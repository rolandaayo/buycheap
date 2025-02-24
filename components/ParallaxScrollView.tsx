import { useRef } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Animated, {
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';

interface ListItem {
  key: string;
  content: React.ReactNode;
}

interface ParallaxScrollViewProps {
  children: React.ReactNode;
  headerImage: React.ReactNode;
  headerBackgroundColor: {
    light: string;
    dark: string;
  };
}

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList<ListItem>);

export default function ParallaxScrollView({
  children,
  headerImage,
  headerBackgroundColor,
}: ParallaxScrollViewProps) {
  const scrollY = useSharedValue(0);
  const colorScheme = useColorScheme();

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  const headerStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: scrollY.value * 0.5 }],
    };
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.header,
          headerStyle,
          { backgroundColor: headerBackgroundColor[colorScheme ?? 'light'] },
        ]}>
        {headerImage}
      </Animated.View>
      <AnimatedFlatList
        data={[{ key: 'content', content: children }]}
        renderItem={({ item }) => (
          <View style={styles.content}>{item.content}</View>
        )}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    height: 280,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  content: {
    marginTop: 280,
    padding: 20,
    gap: 20,
  },
}); 