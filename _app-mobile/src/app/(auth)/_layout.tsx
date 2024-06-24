import { Stack } from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'landing',
};

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="account-recovery" />
      <Stack.Screen name="access-not-permitted" />
      <Stack.Screen name="complete-your-registration" />
      <Stack.Screen name="forgot-your-password" />
      <Stack.Screen name="onboarding" />
      <Stack.Screen name="buyer-access/[hash]" />
      <Stack.Screen name="email-confirmation/[hash]" />
      <Stack.Screen name="reset-password/[hash]" />
    </Stack>
  );
}
