import { ComponentProps } from 'react';
import { Text } from 'react-native';

interface IconSymbolProps extends ComponentProps<typeof Text> {
  name: string;
  size?: number;
  color?: string;
}

const iconMap: { [key: string]: string } = {
  'house.fill': '🏠',
  'compass.fill': '🧭',
  'cart.fill': '🛒',
  'person.fill': '👤',
  'chevron.up': '⌃',
  'chevron.down': '⌄',
  'paperplane.fill': '✈️',
  // Add more icons as needed
};

export function IconSymbol({ name, size = 24, color, style, ...props }: IconSymbolProps) {
  return (
    <Text {...props} style={[{ fontSize: size, color, textAlign: 'center' }, style]}>
      {iconMap[name] || name}
    </Text>
  );
} 