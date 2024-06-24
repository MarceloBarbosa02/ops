import { Stack } from 'expo-router';
import { View } from 'moti';
import { useTheme } from 'styled-components/native';

export const unstable_settings = {
  initialRouteName: 'online-sales',
};

export default function LeadCaptureLayout() {
  const theme = useTheme();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.gray[50],
      }}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="accommodation" />
        <Stack.Screen name="business-type" />
        <Stack.Screen name="digital-product-plans" />
        <Stack.Screen name="how-did-you-meet-kirvano" />
        <Stack.Screen name="monthly-billing" />
        <Stack.Screen name="online-sales" />
        <Stack.Screen name="physical-or-digital-product" />
        <Stack.Screen name="type-of-product-you-sell" />
      </Stack>
    </View>
  );
}
