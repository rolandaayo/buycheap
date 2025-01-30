import React from 'react';
import { StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const categories = [
  { id: 1, name: 'Fashion', image: require('@/assets/images/category1.jpg') },
  { id: 2, name: 'Electronics', image: require('@/assets/images/category2.jpg') },
  { id: 3, name: 'Home', image: require('@/assets/images/category3.jpg') },
  { id: 4, name: 'Beauty', image: require('@/assets/images/category4.jpg') },
];

export function CategoryGrid() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="subtitle" style={styles.sectionTitle}>Categories</ThemedText>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <ThemedText style={styles.categoryName}>{item.name}</ThemedText>
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
  },
  categoryItem: {
    flex: 1,
    margin: 8,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5',
  },
  categoryImage: {
    width: '100%',
    height: 120,
    resizeMode: 'cover',
  },
  categoryName: {
    padding: 12,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
}); 