import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';

const categories = [
  { id: 1, name: 'Medicines', icon: require('../assets/medicines.png') },
  { id: 2, name: 'Supplements', icon: require('../assets/supplements.png') },
  { id: 3, name: 'Health Devices', icon: require('../assets/devices.png') },
  { id: 4, name: 'Personal Care', icon: require('../assets/personal-care.png') },
];

const Categories = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Categories</Text>
        <Text style={styles.seeAll}>See All</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <View key={category.id} style={styles.category}>
            <Image source={category.icon} style={styles.icon} />
            <Text style={styles.name}>{category.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#7094FF',
  },
  category: {
    alignItems: 'center',
    marginLeft: 16,
    width: 80,
  },
  icon: {
    width: 48,
    height: 48,
    marginBottom: 8,
  },
  name: {
    fontSize: 12,
    textAlign: 'center',
  },
});

export default Categories; 