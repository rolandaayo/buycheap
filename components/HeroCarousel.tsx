import React from 'react';
import { StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import { ThemedView } from './ThemedView';
import { ThemedText } from './ThemedText';

const width = Dimensions.get('window').width;

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
];

export function HeroCarousel() {
  return (
    <ThemedView style={styles.container}>
      <Carousel
        loop
        width={width - 32}
        height={200}
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
  },
  slide: {
    borderRadius: 16,
    overflow: 'hidden',
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
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  subtitle: {
    color: '#fff',
    fontSize: 16,
  },
}); 