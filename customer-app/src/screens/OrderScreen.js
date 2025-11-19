import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator
} from 'react-native';
import * as Location from 'expo-location';
import apiService from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function OrderScreen({ route, navigation }) {
  const { category } = route.params || {};
  const [items, setItems] = useState('');
  const [pickupAddress, setPickupAddress] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryLocation, setDeliveryLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loadingLocation, setLoadingLocation] = useState(false);

  useEffect(() => {
    getCurrentLocation();
  }, []);

  const getCurrentLocation = async () => {
    setLoadingLocation(true);
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Location permission is required for delivery');
        setLoadingLocation(false);
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setDeliveryLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });

      // Reverse geocode to get address
      const addresses = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude
      });

      if (addresses.length > 0) {
        const addr = addresses[0];
        const formattedAddress = `${addr.street || ''} ${addr.city || ''}, ${addr.region || ''} ${addr.postalCode || ''}`;
        setDeliveryAddress(formattedAddress);
      }
    } catch (error) {
      console.error('Error getting location:', error);
      Alert.alert('Error', 'Failed to get current location');
    }
    setLoadingLocation(false);
  };

  const handlePlaceOrder = async () => {
    if (!items.trim() || !pickupAddress.trim() || !deliveryAddress.trim()) {
      Alert.alert('Missing Information', 'Please fill in all fields');
      return;
    }

    setLoading(true);

    try {
      // Get or create user ID
      let userId = await AsyncStorage.getItem('userId');

      if (!userId) {
        // Register new user (simplified for demo)
        const userResult = await apiService.registerUser({
          name: 'Customer User',
          email: `customer${Date.now()}@example.com`,
          phone: '1234567890',
          userType: 'customer'
        });

        if (userResult.success) {
          userId = userResult.user.id;
          await AsyncStorage.setItem('userId', userId);

          // Connect WebSocket
          await apiService.connectWebSocket(userId);
        }
      }

      // Create order
      const orderData = {
        customerId: userId,
        items: items.split(',').map(item => ({
          name: item.trim(),
          quantity: 1
        })),
        pickupAddress,
        deliveryAddress,
        deliveryLocation
      };

      const result = await apiService.createOrder(orderData);

      if (result.success) {
        Alert.alert(
          'Order Placed!',
          'Your order has been placed successfully. We are finding a driver for you.',
          [
            {
              text: 'Track Order',
              onPress: () => navigation.navigate('Tracking', { orderId: result.order.id })
            }
          ]
        );
      }
    } catch (error) {
      console.error('Error placing order:', error);
      Alert.alert('Error', 'Failed to place order. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Category: {category || 'General'}</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Items to Deliver</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Enter items separated by commas&#10;e.g., Pizza, Burger, Fries"
            value={items}
            onChangeText={setItems}
            multiline
            numberOfLines={4}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Pickup Address</Text>
          <TextInput
            style={styles.input}
            placeholder="123 Main St, City, State"
            value={pickupAddress}
            onChangeText={setPickupAddress}
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Delivery Address</Text>
          <View style={styles.addressInputContainer}>
            <TextInput
              style={[styles.input, styles.addressInput]}
              placeholder="456 Oak Ave, City, State"
              value={deliveryAddress}
              onChangeText={setDeliveryAddress}
            />
            <TouchableOpacity
              style={styles.locationButton}
              onPress={getCurrentLocation}
              disabled={loadingLocation}
            >
              {loadingLocation ? (
                <ActivityIndicator size="small" color="#fff" />
              ) : (
                <Text style={styles.locationButtonText}>📍</Text>
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.estimateContainer}>
          <Text style={styles.estimateLabel}>Estimated Delivery Time:</Text>
          <Text style={styles.estimateValue}>30-45 minutes</Text>
        </View>

        <TouchableOpacity
          style={[styles.placeOrderButton, loading && styles.disabledButton]}
          onPress={handlePlaceOrder}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <Text style={styles.placeOrderText}>Place Order</Text>
          )}
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    height: 100,
    textAlignVertical: 'top',
  },
  addressInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressInput: {
    flex: 1,
    marginRight: 10,
  },
  locationButton: {
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationButtonText: {
    fontSize: 24,
  },
  estimateContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  estimateLabel: {
    fontSize: 16,
    color: '#666',
  },
  estimateValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  placeOrderButton: {
    backgroundColor: '#FF5722',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  placeOrderText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
