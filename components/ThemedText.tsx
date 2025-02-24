import { Text, TextProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface ThemedTextProps extends TextProps {
  type?: 'default' | 'defaultSemiBold' | 'title' | 'link';
}

export function ThemedText({ type = 'default', style, ...props }: ThemedTextProps) {
  const colorScheme = useColorScheme();

  const textStyles = {
    default: {
      fontSize: 16,
      lineHeight: 24,
      color: Colors[colorScheme ?? 'light'].text,
      fontWeight: '400' as const,
    },
    defaultSemiBold: {
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '600' as const,
      color: Colors[colorScheme ?? 'light'].text,
    },
    title: {
      fontSize: 28,
      lineHeight: 34,
      fontWeight: 'bold' as const,
      color: Colors[colorScheme ?? 'light'].text,
      letterSpacing: -0.5,
    },
    link: {
      fontSize: 16,
      lineHeight: 24,
      color: Colors[colorScheme ?? 'light'].tint,
      textDecorationLine: 'underline',
    },
  };

  return <Text style={[textStyles[type], style]} {...props} />;
} 