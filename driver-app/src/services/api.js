import axios from 'axios';
import * as Location from 'expo-location';

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
    this.locationWatchId = null;
    this.driverId = null;
  }

  // WebSocket methods
  connectWebSocket(driverId) {
    this.driverId = driverId;
    return new Promise((resolve, reject) => {
      try {
        this.ws = new WebSocket(WS_URL);

        this.ws.onopen = () => {
          console.log('WebSocket connected');
          this.ws.send(JSON.stringify({
            type: 'REGISTER_USER',
            payload: {
              userId: driverId,
              userType: 'driver'
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
            if (this.driverId) {
              this.connectWebSocket(this.driverId);
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

  sendDriverLocation(location) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'UPDATE_DRIVER_LOCATION',
        payload: {
          location: {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
          }
        }
      }));
    }
  }

  async startLocationTracking() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        console.error('Location permission not granted');
        return;
      }

      const { status: backgroundStatus } = await Location.requestBackgroundPermissionsAsync();
      if (backgroundStatus !== 'granted') {
        console.warn('Background location permission not granted');
      }

      this.locationWatchId = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (location) => {
          this.sendDriverLocation(location);
        }
      );

      console.log('Location tracking started');
    } catch (error) {
      console.error('Error starting location tracking:', error);
    }
  }

  stopLocationTracking() {
    if (this.locationWatchId) {
      this.locationWatchId.remove();
      this.locationWatchId = null;
      console.log('Location tracking stopped');
    }
  }

  disconnectWebSocket() {
    this.stopLocationTracking();
    if (this.ws) {
      this.ws.close();
      this.ws = null;
    }
    this.driverId = null;
  }

  // REST API methods
  async registerDriver(userData) {
    try {
      const response = await this.api.post('/users/register', {
        ...userData,
        userType: 'driver'
      });
      return response.data;
    } catch (error) {
      console.error('Error registering driver:', error);
      throw error;
    }
  }

  async getDriver(driverId) {
    try {
      const response = await this.api.get(`/users/${driverId}`);
      return response.data;
    } catch (error) {
      console.error('Error getting driver:', error);
      throw error;
    }
  }

  async getAvailableOrders(driverId) {
    try {
      const response = await this.api.get(`/drivers/${driverId}/available-orders`);
      return response.data;
    } catch (error) {
      console.error('Error getting available orders:', error);
      throw error;
    }
  }

  async getDriverOrders(driverId) {
    try {
      const response = await this.api.get(`/drivers/${driverId}/orders`);
      return response.data;
    } catch (error) {
      console.error('Error getting driver orders:', error);
      throw error;
    }
  }

  async getActiveOrder(driverId) {
    try {
      const response = await this.api.get(`/drivers/${driverId}/active-order`);
      return response.data;
    } catch (error) {
      console.error('Error getting active order:', error);
      throw error;
    }
  }

  async acceptOrder(orderId, driverId) {
    try {
      const response = await this.api.post(`/orders/${orderId}/accept`, {
        driverId
      });
      return response.data;
    } catch (error) {
      console.error('Error accepting order:', error);
      throw error;
    }
  }

  async updateOrderStatus(orderId, status, driverId) {
    try {
      const response = await this.api.patch(`/orders/${orderId}/status`, {
        status,
        driverId
      });
      return response.data;
    } catch (error) {
      console.error('Error updating order status:', error);
      throw error;
    }
  }

  async updateDriverAvailability(driverId, available) {
    try {
      const response = await this.api.patch(`/drivers/${driverId}/availability`, {
        available
      });
      return response.data;
    } catch (error) {
      console.error('Error updating driver availability:', error);
      throw error;
    }
  }
}

export default new ApiService();
