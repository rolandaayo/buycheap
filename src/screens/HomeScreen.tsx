import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import SearchBar from '../components/SearchBar';
import PromoBanner from '../components/PromoBanner';
import Categories from '../components/Categories';
// import BestsellerProducts from '../components/BestsellerProducts';
// import BottomTabBar from '../components/BottomTabBar';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <SearchBar />
        <PromoBanner />
        <Categories />
        {/* <BestsellerProducts /> */}
      </ScrollView>
      {/* <BottomTabBar /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomeScreen; 