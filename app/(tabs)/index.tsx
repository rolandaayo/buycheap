import { StyleSheet, ScrollView, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { SearchHeader } from '@/components/SearchHeader';
import { HeroCarousel } from '@/components/HeroCarousel';
import { CategoryGrid } from '@/components/CategoryGrid';
import { useAuth } from '@/context/AuthContext';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const { signOut } = useAuth();
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={[styles.header, { paddingTop: insets.top }]}>
        <View style={styles.headerTop}>
          <ThemedText style={styles.logo}>BuyCHEAP</ThemedText>
          <TouchableOpacity style={styles.logoutButton} onPress={signOut}>
            <Feather name="log-out" size={22} color="#FF4C4C" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerBottom}>
          <ThemedText style={styles.welcomeText}>Welcome back! 👋</ThemedText>
          <ThemedText style={styles.subText}>Find your favorite products</ThemedText>
        </View>
      </ThemedView>
      <SearchHeader />
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <HeroCarousel />
        <CategoryGrid />
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
  },
  headerBottom: {
    marginTop: 8,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2563EB',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subText: {
    fontSize: 16,
    color: '#666',
  },
  logoutButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: '#FEE2E2',
  },
  scrollContent: {
    flexGrow: 1,
  },
});
