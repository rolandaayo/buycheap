import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const carouselData = [
  {
    id: 1,
    title: 'Summer Sale',
    subtitle: 'Up to 50% off',
    image: require('@/assets/images/banner1.jpg'),
  },
  {
    id: 2,
    title: 'New Arrivals',
    subtitle: 'Check out latest items',
    image: require('@/assets/images/banner2.jpg'),
  },
  {
    id: 3,
    title: 'Limited Time Offer',
    subtitle: 'Don\'t miss out',
    image: require('@/assets/images/banner3.jpg'),
  },
  {
    id: 4,
    title: 'Christmas Sale',
    subtitle: 'Don\'t miss out',
    image: require('@/assets/images/banner4.jpg'),
  }
];

export function HeroCarousel() {
  return (
    <ThemedView style={styles.container}>
      <Carousel
        loop
        width={width - 32}
        height={height * 0.3} // 30% of screen height
        autoPlay={true}
        data={carouselData}
        scrollAnimationDuration={1000}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.slide}>
            <Image source={item.image} style={styles.image} />
            <ThemedView style={styles.content}>
              <ThemedText style={styles.title}>{item.title}</ThemedText>
              <ThemedText style={styles.subtitle}>{item.subtitle}</ThemedText>
            </ThemedView>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    height: height * 0.35, // Container slightly taller than carousel
  },
  slide: {
    borderRadius: 16,
    overflow: 'hidden',
    margin: 10,
    height: '100%',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
  },
}); 