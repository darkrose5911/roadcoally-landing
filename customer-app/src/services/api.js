import axios from 'axios';

// Replace with your actual server URL
const API_BASE_URL = 'http://localhost:3000/api';
const WS_URL = 'ws://localhost:3000';

class ApiService {
  constructor() {
    this.api = axios.create({
      baseURL: API_BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    this.ws = null;
    this.listeners = new Map();
  }

  // WebSocket methods
  connectWebSocket(userId) {
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(WS_URL);

        this.ws.onopen = () => {
          console.log('WebSocket connected');
          this.ws.send(JSON.stringify({
            type: 'REGISTER_USER',
            payload: {
              userId,
              userType: 'customer'
            }
          }));
          resolve();
        };

        this.ws.onmessage = (event) => {
          try {
            const message = JSON.parse(event.data);
            this.handleWebSocketMessage(message);
          } catch (error) {
            console.error('Error parsing WebSocket message:', error);
          }
        };

        this.ws.onerror = (error) => {
          console.error('WebSocket error:', error);
          reject(error);
        };

        this.ws.onclose = () => {
          console.log('WebSocket disconnected');
          // Attempt to reconnect after 3 seconds
          setTimeout(() => {
            if (userId) {
              this.connectWebSocket(userId);
            }
          }, 3000);
        };
      } catch (error) {
        reject(error);
      }
    });
  }

  handleWebSocketMessage(message) {
    const { type, payload } = message;
    const listeners = this.listeners.get(type) || [];
    listeners.forEach(callback => callback(payload));
  }

  addEventListener(type, callback) {
    const listeners = this.listeners.get(type) || [];
    listeners.push(callback);
    this.listeners.set(type, listeners);
  }

  removeEventListener(type, callback) {
    const listeners = this.listeners.get(type) || [];
    const filtered = listeners.filter(cb => cb !== callback);
    this.listeners.set(type, filtered);
  }

  trackOrder(orderId) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'TRACK_ORDER',
        payload: { orderId }
      }));
    }
  }

  disconnectWebSocket() {
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
  }

  // REST API methods
  async registerUser(userData) {
    try {
      const response = await this.api.post('/users/register', userData);
      return response.data;
    } catch (error) {
      console.error('Error registering user:', error);
      throw error;
    }
  }

  async getUser(userId) {
    try {
      const response = await this.api.get(`/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting user:', error);
      throw error;
    }
  }

  async createOrder(orderData) {
    try {
      const response = await this.api.post('/orders', orderData);
      return response.data;
    } catch (error) {
      console.error('Error creating order:', error);
      throw error;
    }
  }

  async getOrder(orderId) {
    try {
      const response = await this.api.get(`/orders/${orderId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting order:', error);
      throw error;
    }
  }

  async getCustomerOrders(customerId) {
    try {
      const response = await this.api.get(`/customers/${customerId}/orders`);
      return response.data;
    } catch (error) {
      console.error('Error getting customer orders:', error);
      throw error;
    }
  }
}

export default new ApiService();
