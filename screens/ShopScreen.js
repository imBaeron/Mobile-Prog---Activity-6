
import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { AppContext } from '../AppContext';

// Sample products
const products = [
  { id: '1', name: 'Wireless Headphones', price: 850 },
  { id: '2', name: 'Mechanical Keyboard', price: 1500 },
  { id: '3', name: 'Gaming Mouse', price: 650 },
  { id: '4', name: 'USB Flash Drive', price: 350 },
];

export default function ShopScreen() {
  // Access global context
  const { addToCart, cartCount } = useContext(AppContext);

  // Loading state
  const [addingProduct, setAddingProduct] = useState(null);

  const handleAddToCart = (product) => {
    setAddingProduct(product.id);

    // Simulate a one-second saving process
    setTimeout(() => {
      addToCart(product);
      setAddingProduct(null);
    }, 1000);
  };

  const renderProduct = ({ item }) => {
    const isAdding = addingProduct === item.id;

    return (
      <View style={styles.productCard}>
        <Text style={styles.productName}>
          {item.name}
        </Text>

        <Text style={styles.productPrice}>
          ₱{item.price.toLocaleString()}
        </Text>

        <TouchableOpacity
          style={[
            styles.addButton,
            isAdding && styles.disabledButton,
          ]}
          onPress={() => handleAddToCart(item)}
          disabled={addingProduct !== null}
        >
          <Text style={styles.buttonText}>
            {isAdding ? 'Adding...' : 'Add to Cart'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>MiniShop</Text>

      <Text style={styles.subtitle}>
        Find something you like!
      </Text>

      <View style={styles.cartSummary}>
        <Text style={styles.summaryText}>
          Items in Cart: {cartCount}
        </Text>
      </View>

      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E3A8A',
  },
  subtitle: {
    fontSize: 15,
    color: '#666666',
    marginBottom: 15,
  },
  cartSummary: {
    backgroundColor: '#DBEAFE',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  summaryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E40AF',
  },
  list: {
    paddingBottom: 20,
  },
  productCard: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    elevation: 2,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333333',
  },
  productPrice: {
    fontSize: 16,
    color: '#2563EB',
    marginVertical: 10,
  },
  addButton: {
    backgroundColor: '#2563EB',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#9CA3AF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
