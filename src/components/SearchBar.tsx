import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="menu" size={24} color="#333" />
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" />
        <TextInput 
          placeholder="Search medicine"
          style={styles.input}
        />
      </View>
      <Icon name="shopping-cart" size={24} color="#333" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    gap: 12,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
  },
});

export default SearchBar; 