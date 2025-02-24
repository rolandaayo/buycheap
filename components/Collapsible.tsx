import { useState } from 'react';
import { StyleSheet, Pressable, View } from 'react-native';
import { ThemedText } from './ThemedText';
import { IconSymbol } from './ui/IconSymbol';
import { Colors } from '../constants/Colors';
import { useColorScheme } from '../hooks/useColorScheme';

interface CollapsibleProps {
  title: string;
  children: React.ReactNode;
}

export function Collapsible({ title, children }: CollapsibleProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const colorScheme = useColorScheme();

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={() => setIsExpanded(!isExpanded)}>
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
        <IconSymbol
          name={isExpanded ? 'chevron.up' : 'chevron.down'}
          size={20}
        />
      </Pressable>
      {isExpanded && <View style={styles.content}>{children}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    backgroundColor: Colors[colorScheme ?? 'light'].secondary,
    borderRadius: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors[colorScheme ?? 'light'].border,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    padding: 16,
    paddingTop: 0,
    gap: 16,
  },
}); 