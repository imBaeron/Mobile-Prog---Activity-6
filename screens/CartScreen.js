
import React, { useContext } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { AppContext } from '../AppContext';

export default function CartScreen() {
  // Access shared global state
  const {
    cart,
    removeFromCart,
    cartCount,
    cartTotal,
  } = useContext(AppContext);

  const renderCartItem = ({ item }) => {
    return (
      <View style={styles.cartItem}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName}>
            {item.name}
          </Text>

          <Text style={styles.itemDetails}>
            ₱{item.price.toLocaleString()} x {item.quantity}
          </Text>

          <Text style={styles.itemSubtotal}>
            Subtotal: ₱{(item.price * item.quantity).toLocaleString()}
          </Text>
        </View>

        <TouchableOpacity
          style={styles.removeButton}
          onPress={() => removeFromCart(item.id)}
        >
          <Text style={styles.removeButtonText}>
            Remove
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Cart</Text>

      <Text style={styles.subtitle}>
        Your selected products
      </Text>

      {cart.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>
            Your cart is empty.
          </Text>

          <Text style={styles.emptySubtext}>
            Go to the Shop tab to add products!
          </Text>
        </View>
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderCartItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={styles.list}
          />

          <View style={styles.summary}>
            <Text style={styles.summaryText}>
              Total Items: {cartCount}
            </Text>

            <Text style={styles.totalText}>
              Total: ₱{cartTotal.toLocaleString()}
            </Text>
          </View>
        </>
      )}
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
    marginBottom: 20,
  },
  list: {
    paddingBottom: 20,
  },
  cartItem: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 2,
  },
  itemInfo: {
    flex: 1,
  },
  itemName: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#333333',
  },
  itemDetails: {
    fontSize: 14,
    color: '#666666',
    marginTop: 5,
  },
  itemSubtotal: {
    fontSize: 15,
    color: '#2563EB',
    fontWeight: 'bold',
    marginTop: 5,
  },
  removeButton: {
    backgroundColor: '#DC2626',
    padding: 10,
    borderRadius: 6,
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555555',
  },
  emptySubtext: {
    fontSize: 14,
    color: '#888888',
    marginTop: 8,
    textAlign: 'center',
  },
  summary: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#555555',
  },
  totalText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1E40AF',
    marginTop: 8,
  },
});
