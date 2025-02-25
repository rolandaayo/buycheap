import React from 'react';
import { StyleSheet, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const products = [
  {
    id: 1,
    name: 'Sony WH-1000XM4',
    price: 349.99,
    image: require('@/assets/images/product1.jpg'),
    discount: '20% OFF',
    rating: 4.8,
    reviews: 2453,
    description: 'Industry-leading noise canceling with Dual Noise Sensor technology',
  },
  {
    id: 2,
    name: 'Apple Watch Series 7',
    price: 399.99,
    image: require('@/assets/images/product2.jpg'),
    discount: '15% OFF',
    rating: 4.9,
    reviews: 3211,
    description: 'Always-On Retina display with crack-resistant front crystal',
  },
  {
    id: 3,
    name: 'JBL Flip 5',
    price: 119.99,
    image: require('@/assets/images/product3.jpg'),
    discount: '10% OFF',
    rating: 4.7,
    reviews: 1876,
    description: 'Waterproof IPX7 design with 12 hours of playtime',
  },
];

const { width } = Dimensions.get('window');
const ITEM_WIDTH = (width - 48) / 2;

export function FeaturedProducts() {
  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.header}>
        <ThemedText type="title">Best Sellers</ThemedText>
        <TouchableOpacity>
          <ThemedText style={styles.seeAll}>View All</ThemedText>
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
              <ThemedText style={styles.description} numberOfLines={2}>{item.description}</ThemedText>
              <ThemedView style={styles.ratingContainer}>
                <ThemedText style={styles.rating}>★ {item.rating}</ThemedText>
                <ThemedText style={styles.reviews}>({item.reviews})</ThemedText>
              </ThemedView>
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
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
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
  description: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  rating: {
    fontSize: 12,
    color: '#FFB800',
    marginRight: 4,
  },
  reviews: {
    fontSize: 12,
    color: '#666',
  },
  productPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7094FF',
  },
});