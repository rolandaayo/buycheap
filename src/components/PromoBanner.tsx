import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const PromoBanner = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.discount}>15% OFF</Text>
        <Text style={styles.description}>Medicine at Your Doorstep</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Shop Now</Text>
        </TouchableOpacity>
      </View>
      <Image 
        source={require('../assets/delivery-person.png')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 16,
    padding: 16,
    backgroundColor: '#7094FF',
    borderRadius: 12,
  },
  content: {
    flex: 1,
  },
  discount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginTop: 4,
  },
  button: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 12,
  },
  buttonText: {
    color: '#7094FF',
    fontWeight: '600',
  },
  image: {
    width: 100,
    height: 100,
  },
});

export default PromoBanner; 