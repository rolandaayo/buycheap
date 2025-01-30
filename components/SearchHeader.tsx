import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

export function SearchHeader() {
  const insets = useSafeAreaInsets();
  
  return (
    <ThemedView style={[
      styles.container, 
      { paddingTop: Platform.OS === 'ios' ? insets.top : StatusBar.currentHeight }
    ]}>
      <ThemedView style={styles.header}>
        <ThemedText type="title" style={styles.title}>Discover</ThemedText>
        <TouchableOpacity>
          <ThemedView style={styles.cartBadge}>
            <Feather name="shopping-cart" size={24} />
            <ThemedView style={styles.badge}>
              <ThemedText style={styles.badgeText}>2</ThemedText>
            </ThemedView>
          </ThemedView>
        </TouchableOpacity>
      </ThemedView>
      
      <ThemedView style={styles.searchContainer}>
        <Feather name="search" size={20} color="#999" />
        <TextInput 
          placeholder="Search products"
          style={styles.input}
          placeholderTextColor="#999"
        />
      </ThemedView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    gap: 16,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
  },
  cartBadge: {
    position: 'relative',
    padding: 8,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 4,
    backgroundColor: '#FF4C4C',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    paddingHorizontal: 16,
    height: 48,
  },
  input: {
    flex: 1,
    marginLeft: 12,
    fontSize: 16,
  },
}); 