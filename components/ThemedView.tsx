import { View, ViewProps } from 'react-native';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Colors } from '@/constants/Colors';

interface ThemedViewProps extends ViewProps {}

export function ThemedView(props: ThemedViewProps) {
  const { style, ...otherProps } = props;
  const colorScheme = useColorScheme();

  return (
    <View
      style={[
        {
          backgroundColor: Colors[colorScheme ?? 'light'].background,
        },
        style,
      ]}
      {...otherProps}
    />
  );
} 