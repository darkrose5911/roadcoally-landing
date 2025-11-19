import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Dimensions
} from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
import apiService from '../services/api';

const { width, height } = Dimensions.get('window');

export default function TrackingScreen({ route }) {
  const { orderId } = route.params;
  const [order, setOrder] = useState(null);
  const [driverLocation, setDriverLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const mapRef = useRef(null);

  useEffect(() => {
    loadOrder();
    setupWebSocketListeners();

    return () => {
      // Cleanup WebSocket listeners
      apiService.removeEventListener('ORDER_ACCEPTED', handleOrderAccepted);
      apiService.removeEventListener('ORDER_STATUS_UPDATE', handleStatusUpdate);
      apiService.removeEventListener('DRIVER_LOCATION_UPDATE', handleDriverLocation);
    };
  }, [orderId]);

  const loadOrder = async () => {
    try {
      const result = await apiService.getOrder(orderId);
      if (result.success) {
        setOrder(result.order);
        apiService.trackOrder(orderId);
      }
    } catch (error) {
      console.error('Error loading order:', error);
      Alert.alert('Error', 'Failed to load order details');
    } finally {
      setLoading(false);
    }
  };

  const setupWebSocketListeners = () => {
    apiService.addEventListener('ORDER_ACCEPTED', handleOrderAccepted);
    apiService.addEventListener('ORDER_STATUS_UPDATE', handleStatusUpdate);
    apiService.addEventListener('DRIVER_LOCATION_UPDATE', handleDriverLocation);
  };

  const handleOrderAccepted = (data) => {
    if (data.order.id === orderId) {
      setOrder(data.order);
    }
  };

  const handleStatusUpdate = (data) => {
    if (data.orderId === orderId) {
      setOrder(prev => ({ ...prev, status: data.status }));
    }
  };

  const handleDriverLocation = (data) => {
    if (data.orders.includes(orderId)) {
      setDriverLocation(data.location);

      // Animate map to show driver location
      if (mapRef.current && data.location) {
        mapRef.current.animateToRegion({
          latitude: data.location.latitude,
          longitude: data.location.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }, 1000);
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending':
        return '#FFC107';
      case 'accepted':
        return '#2196F3';
      case 'picked_up':
        return '#9C27B0';
      case 'in_transit':
        return '#FF9800';
      case 'delivered':
        return '#4CAF50';
      default:
        return '#666';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending':
        return 'Finding a driver...';
      case 'accepted':
        return 'Driver assigned';
      case 'picked_up':
        return 'Items picked up';
      case 'in_transit':
        return 'On the way';
      case 'delivered':
        return 'Delivered!';
      default:
        return status;
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF5722" />
        <Text style={styles.loadingText}>Loading order details...</Text>
      </View>
    );
  }

  if (!order) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.errorText}>Order not found</Text>
      </View>
    );
  }

  const deliveryCoords = order.deliveryLocation || { latitude: 37.78825, longitude: -122.4324 };
  const driverCoords = driverLocation || deliveryCoords;

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        initialRegion={{
          latitude: deliveryCoords.latitude,
          longitude: deliveryCoords.longitude,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        {/* Delivery Location Marker */}
        <Marker
          coordinate={deliveryCoords}
          title="Delivery Location"
          description={order.deliveryAddress}
          pinColor="#4CAF50"
        />

        {/* Driver Location Marker */}
        {driverLocation && (
          <Marker
            coordinate={driverCoords}
            title="Driver Location"
            description="Your driver is here"
          >
            <View style={styles.driverMarker}>
              <Text style={styles.driverMarkerText}>🚗</Text>
            </View>
          </Marker>
        )}

        {/* Route Line */}
        {driverLocation && (
          <Polyline
            coordinates={[driverCoords, deliveryCoords]}
            strokeColor="#FF5722"
            strokeWidth={3}
            lineDashPattern={[1]}
          />
        )}
      </MapView>

      <View style={styles.infoContainer}>
        <View style={[styles.statusBadge, { backgroundColor: getStatusColor(order.status) }]}>
          <Text style={styles.statusText}>{getStatusText(order.status)}</Text>
        </View>

        <View style={styles.orderDetails}>
          <Text style={styles.orderTitle}>Order #{order.id.slice(0, 8)}</Text>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Items:</Text>
            <Text style={styles.detailValue}>
              {order.items.map(item => item.name).join(', ')}
            </Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Pickup:</Text>
            <Text style={styles.detailValue}>{order.pickupAddress}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Delivery:</Text>
            <Text style={styles.detailValue}>{order.deliveryAddress}</Text>
          </View>

          {order.estimatedDeliveryTime && (
            <View style={styles.detailRow}>
              <Text style={styles.detailLabel}>ETA:</Text>
              <Text style={styles.detailValue}>
                {new Date(order.estimatedDeliveryTime).toLocaleTimeString()}
              </Text>
            </View>
          )}
        </View>

        {order.status === 'delivered' && (
          <View style={styles.deliveredBanner}>
            <Text style={styles.deliveredText}>✓ Order Delivered Successfully!</Text>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  map: {
    width: width,
    height: height * 0.5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  errorText: {
    fontSize: 18,
    color: '#f44336',
  },
  driverMarker: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#FF5722',
  },
  driverMarkerText: {
    fontSize: 24,
  },
  infoContainer: {
    flex: 1,
    padding: 20,
  },
  statusBadge: {
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  statusText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderDetails: {
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 15,
  },
  orderTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    width: 80,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  deliveredBanner: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
    alignItems: 'center',
  },
  deliveredText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
