import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView
} from 'react-native';

export default function HomeScreen({ navigation }) {
  const categories = [
    { id: 1, name: 'Food', icon: '🍔' },
    { id: 2, name: 'Groceries', icon: '🛒' },
    { id: 3, name: 'Pharmacy', icon: '💊' },
    { id: 4, name: 'Packages', icon: '📦' },
    { id: 5, name: 'Flowers', icon: '💐' },
    { id: 6, name: 'Pet Supplies', icon: '🐾' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>What would you like delivered?</Text>
          <Text style={styles.subtitle}>Choose a category below</Text>
        </View>

        <View style={styles.categoriesContainer}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              style={styles.categoryCard}
              onPress={() => navigation.navigate('Order', { category: category.name })}
            >
              <Text style={styles.categoryIcon}>{category.icon}</Text>
              <Text style={styles.categoryName}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.promoSection}>
          <Text style={styles.promoTitle}>🎉 Special Offers</Text>
          <View style={styles.promoCard}>
            <Text style={styles.promoText}>Free delivery on your first order!</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  categoryCard: {
    width: '45%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    margin: '2.5%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  categoryIcon: {
    fontSize: 48,
    marginBottom: 10,
  },
  categoryName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  promoSection: {
    padding: 20,
    marginTop: 10,
  },
  promoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  promoCard: {
    backgroundColor: '#4CAF50',
    borderRadius: 12,
    padding: 20,
  },
  promoText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});
