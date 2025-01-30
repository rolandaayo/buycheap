import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 99.99,
    image: require('@/assets/images/product1.jpg'),
    discount: '20% OFF',
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 199.99,
    image: require('@/assets/images/product2.jpg'),
    discount: '15% OFF',
  },
  {
    id: 3,
    name: 'Bluetooth Speaker',
    price: 79.99,
    image: require('@/assets/images/product3.jpg'),
    discount: '10% OFF',
  },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2; // 48 = padding (16) * 2 + gap between items (16)

export function FeaturedProducts() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="subtitle">Featured Products</ThemedText>
        <TouchableOpacity>
          <ThemedText style={styles.seeAll}>See All</ThemedText>
        </TouchableOpacity>
      </ThemedView>

      <FlatList
        data={products}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard}>
            <Image source={item.image} style={styles.productImage} />
            {item.discount && (
              <ThemedView style={styles.discountBadge}>
                <ThemedText style={styles.discountText}>{item.discount}</ThemedText>
              </ThemedView>
            )}
            <ThemedView style={styles.productInfo}>
              <ThemedText style={styles.productName}>{item.name}</ThemedText>
              <ThemedText style={styles.productPrice}>${item.price}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  seeAll: {
    color: '#7094FF',
    fontSize: 14,
  },
  list: {
    paddingHorizontal: 16,
  },
  productCard: {
    width: ITEM_WIDTH,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: '#f5f5f5',
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  discountBadge: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: '#FF4C4C',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
  },
  discountText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  productInfo: {
    padding: 12,
  },
  productName: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7094FF',
  },
}); 