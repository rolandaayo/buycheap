import { StyleSheet, ScrollView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { SearchHeader } from '@/components/SearchHeader';
import { HeroCarousel } from '@/components/HeroCarousel';
import { CategoryGrid } from '@/components/CategoryGrid';
import { FeaturedProducts } from '@/components/FeaturedProducts';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SearchHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <HeroCarousel />
        <CategoryGrid />
        <FeaturedProducts />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
