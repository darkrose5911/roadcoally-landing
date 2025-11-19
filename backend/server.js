const express = require('express');
const http = require('http');
const WebSocket = require('ws');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const bodyParser = require('body-parser');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

app.use(cors());
app.use(bodyParser.json());

// In-memory data stores (replace with a database in production)
const users = new Map();
const drivers = new Map();
const orders = new Map();
const activeConnections = new Map();

// WebSocket connection handling
wss.on('connection', (ws) => {
  const connectionId = uuidv4();
  console.log('New WebSocket connection:', connectionId);

  ws.on('message', (message) => {
    try {
      const data = JSON.parse(message);
      handleWebSocketMessage(ws, connectionId, data);
    } catch (error) {
      console.error('Error parsing WebSocket message:', error);
    }
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed:', connectionId);
    activeConnections.delete(connectionId);
  });
});

function handleWebSocketMessage(ws, connectionId, data) {
  const { type, payload } = data;

  switch (type) {
    case 'REGISTER_USER':
      activeConnections.set(connectionId, {
        ws,
        userId: payload.userId,
        userType: payload.userType
      });
      console.log(`Registered ${payload.userType}:`, payload.userId);
      break;

    case 'UPDATE_DRIVER_LOCATION':
      const driverConnection = activeConnections.get(connectionId);
      if (driverConnection) {
        const driver = drivers.get(driverConnection.userId);
        if (driver) {
          driver.location = payload.location;
          drivers.set(driverConnection.userId, driver);

          // Broadcast location to customers tracking this driver
          broadcastDriverLocation(driverConnection.userId, payload.location);
        }
      }
      break;

    case 'TRACK_ORDER':
      console.log('Customer tracking order:', payload.orderId);
      break;

    default:
      console.log('Unknown message type:', type);
  }
}

function broadcastDriverLocation(driverId, location) {
  // Find all orders assigned to this driver
  const driverOrders = Array.from(orders.values()).filter(
    order => order.driverId === driverId && order.status !== 'delivered'
  );

  // Send location updates to customers
  activeConnections.forEach((connection) => {
    if (connection.userType === 'customer') {
      const customerOrders = driverOrders.filter(
        order => order.customerId === connection.userId
      );

      if (customerOrders.length > 0) {
        connection.ws.send(JSON.stringify({
          type: 'DRIVER_LOCATION_UPDATE',
          payload: {
            driverId,
            location,
            orders: customerOrders.map(o => o.id)
          }
        }));
      }
    }
  });
}

function notifyDriver(driverId, message) {
  activeConnections.forEach((connection) => {
    if (connection.userType === 'driver' && connection.userId === driverId) {
      connection.ws.send(JSON.stringify(message));
    }
  });
}

function notifyCustomer(customerId, message) {
  activeConnections.forEach((connection) => {
    if (connection.userType === 'customer' && connection.userId === customerId) {
      connection.ws.send(JSON.stringify(message));
    }
  });
}

// REST API Endpoints

// User Registration
app.post('/api/users/register', (req, res) => {
  const { name, email, phone, userType } = req.body;
  const userId = uuidv4();

  const user = {
    id: userId,
    name,
    email,
    phone,
    userType,
    createdAt: new Date().toISOString()
  };

  users.set(userId, user);

  if (userType === 'driver') {
    drivers.set(userId, {
      ...user,
      available: true,
      location: null,
      currentOrders: []
    });
  }

  res.json({ success: true, user });
});

// Get User
app.get('/api/users/:userId', (req, res) => {
  const user = users.get(req.params.userId);
  if (user) {
    res.json({ success: true, user });
  } else {
    res.status(404).json({ success: false, message: 'User not found' });
  }
});

// Create Order
app.post('/api/orders', (req, res) => {
  const { customerId, items, pickupAddress, deliveryAddress, deliveryLocation } = req.body;
  const orderId = uuidv4();

  const order = {
    id: orderId,
    customerId,
    items,
    pickupAddress,
    deliveryAddress,
    deliveryLocation,
    status: 'pending',
    driverId: null,
    createdAt: new Date().toISOString(),
    estimatedDeliveryTime: new Date(Date.now() + 30 * 60000).toISOString()
  };

  orders.set(orderId, order);

  // Notify available drivers
  const availableDrivers = Array.from(drivers.values()).filter(d => d.available);
  availableDrivers.forEach(driver => {
    notifyDriver(driver.id, {
      type: 'NEW_ORDER',
      payload: { order }
    });
  });

  res.json({ success: true, order });
});

// Get Order
app.get('/api/orders/:orderId', (req, res) => {
  const order = orders.get(req.params.orderId);
  if (order) {
    res.json({ success: true, order });
  } else {
    res.status(404).json({ success: false, message: 'Order not found' });
  }
});

// Get Customer Orders
app.get('/api/customers/:customerId/orders', (req, res) => {
  const customerOrders = Array.from(orders.values())
    .filter(order => order.customerId === req.params.customerId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json({ success: true, orders: customerOrders });
});

// Accept Order (Driver)
app.post('/api/orders/:orderId/accept', (req, res) => {
  const { driverId } = req.body;
  const order = orders.get(req.params.orderId);

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  if (order.status !== 'pending') {
    return res.status(400).json({ success: false, message: 'Order already accepted' });
  }

  order.status = 'accepted';
  order.driverId = driverId;
  order.acceptedAt = new Date().toISOString();
  orders.set(order.id, order);

  const driver = drivers.get(driverId);
  if (driver) {
    driver.currentOrders.push(order.id);
    driver.available = false;
    drivers.set(driverId, driver);
  }

  // Notify customer
  notifyCustomer(order.customerId, {
    type: 'ORDER_ACCEPTED',
    payload: { order, driver: users.get(driverId) }
  });

  res.json({ success: true, order });
});

// Update Order Status
app.patch('/api/orders/:orderId/status', (req, res) => {
  const { status, driverId } = req.body;
  const order = orders.get(req.params.orderId);

  if (!order) {
    return res.status(404).json({ success: false, message: 'Order not found' });
  }

  order.status = status;
  orders.set(order.id, order);

  // Notify customer about status change
  notifyCustomer(order.customerId, {
    type: 'ORDER_STATUS_UPDATE',
    payload: { orderId: order.id, status }
  });

  // If delivered, mark driver as available
  if (status === 'delivered') {
    const driver = drivers.get(order.driverId);
    if (driver) {
      driver.currentOrders = driver.currentOrders.filter(id => id !== order.id);
      driver.available = driver.currentOrders.length === 0;
      drivers.set(order.driverId, driver);
    }
  }

  res.json({ success: true, order });
});

// Get Available Orders (Driver)
app.get('/api/drivers/:driverId/available-orders', (req, res) => {
  const availableOrders = Array.from(orders.values())
    .filter(order => order.status === 'pending')
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json({ success: true, orders: availableOrders });
});

// Get Driver Orders
app.get('/api/drivers/:driverId/orders', (req, res) => {
  const driverOrders = Array.from(orders.values())
    .filter(order => order.driverId === req.params.driverId)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  res.json({ success: true, orders: driverOrders });
});

// Get Driver Active Order
app.get('/api/drivers/:driverId/active-order', (req, res) => {
  const activeOrder = Array.from(orders.values())
    .find(order =>
      order.driverId === req.params.driverId &&
      ['accepted', 'picked_up', 'in_transit'].includes(order.status)
    );

  res.json({ success: true, order: activeOrder || null });
});

// Update Driver Availability
app.patch('/api/drivers/:driverId/availability', (req, res) => {
  const { available } = req.body;
  const driver = drivers.get(req.params.driverId);

  if (!driver) {
    return res.status(404).json({ success: false, message: 'Driver not found' });
  }

  driver.available = available;
  drivers.set(req.params.driverId, driver);

  res.json({ success: true, driver });
});

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    stats: {
      users: users.size,
      drivers: drivers.size,
      orders: orders.size,
      activeConnections: activeConnections.size
    }
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`WebSocket server is ready`);
});
