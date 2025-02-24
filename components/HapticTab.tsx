import * as Haptics from 'expo-haptics';
import { GestureResponderEvent, Pressable } from 'react-native';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';

export function HapticTab(props: BottomTabBarButtonProps) {
  const { onPress, ...otherProps } = props;

  const handlePress = (e: GestureResponderEvent) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.(e);
  };

  return <Pressable onPress={handlePress} {...otherProps} />;
} 