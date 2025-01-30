import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProductDetailScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} />
        </TouchableOpacity>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="heart" size={24} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon name="share-2" size={24} />
          </TouchableOpacity>
        </View>
      </View>

      <Image 
        source={require('../assets/product-image.png')}
        style={styles.productImage}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Liver Cleanse Detox & Repair</Text>
        <View style={styles.ratingContainer}>
          <Text>Visit </Text>
          <Text style={styles.brand}>SAN Pharma</Text>
          <View style={styles.rating}>
            <Icon name="star" size={16} color="#FFD700" />
            <Text>4.8 (2.2k)</Text>
          </View>
        </View>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>Price $18.99</Text>
          <Text style={styles.unit}>/pack</Text>
        </View>

        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  headerRight: {
    flexDirection: 'row',
    gap: 16,
  },
  iconButton: {
    padding: 8,
  },
  productImage: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  brand: {
    color: '#7094FF',
    marginRight: 8,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 24,
  },
  price: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  unit: {
    color: '#666',
    marginLeft: 4,
  },
  addToCartButton: {
    backgroundColor: '#7094FF',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ProductDetailScreen; 