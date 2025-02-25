import React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList, View } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const categories = [
  { id: 1, name: 'Fashion', image: require('@/assets/images/product-1.webp'), price: '$199.99', description: 'Latest fashion trends' },
  { id: 2, name: 'Electronics', image: require('@/assets/images/product-2.webp'), price: '$499.99', description: 'Smart devices' },
  { id: 3, name: 'Home', image: require('@/assets/images/product-3.webp'), price: '$299.99', description: 'Home decor' },
  { id: 4, name: 'Beauty', image: require('@/assets/images/product-4.webp'), price: '$99.99', description: 'Beauty essentials' },
  { id: 5, name: 'Sports', image: require('@/assets/images/product-5.webp'), price: '$149.99', description: 'Sports equipment' },
  { id: 6, name: 'Books', image: require('@/assets/images/product-6.webp'), price: '$29.99', description: 'Best sellers' },
];

export function CategoryGrid() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.sectionTitle}>Featured Products</ThemedText>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.productInfo}>
              <ThemedText style={styles.productName}>{item.name}</ThemedText>
              <ThemedText style={styles.productDescription}>{item.description}</ThemedText>
              <ThemedText style={styles.productPrice}>{item.price}</ThemedText>
              <TouchableOpacity style={styles.addToCartButton}>
                <ThemedText style={styles.buttonText}>Add to Cart</ThemedText>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 16,
    fontSize: 24,
    fontWeight: 'bold',
  },
  productCard: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  productDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2ecc71',
    marginBottom: 8,
  },
  addToCartButton: {
    backgroundColor: '#2ecc71',
    padding: 8,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
  },
});