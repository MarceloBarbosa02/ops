import { Stack } from 'expo-router';
import { View } from 'moti';
import { useTheme } from 'styled-components/native';

export default function ModaisLayout() {
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
          animation: 'ios',
        }}>
        <Stack.Screen name="contact-phone-code" />
        <Stack.Screen name="contact-phone" />
        <Stack.Screen name="modal-journey" />
        <Stack.Screen name="contact-email-code" />
        <Stack.Screen name="contact-methods" />
        <Stack.Screen name="contact-finished" />
        <Stack.Screen name="methods-security" />
        <Stack.Screen name="code-security" />
        <Stack.Screen name="new-password" />
        <Stack.Screen name="add-business" />
        <Stack.Screen name="edit-business" />
        <Stack.Screen name="search-business" />
        <Stack.Screen name="add-access" />
        <Stack.Screen name="filters-extract" />
        <Stack.Screen name="details-extract" />
        <Stack.Screen name="filters-sales" />
        <Stack.Screen name="details-sales" />
        <Stack.Screen name="type-document" />
        <Stack.Screen name="document-back" />
        <Stack.Screen name="document-front" />
        <Stack.Screen name="selfie" />
        <Stack.Screen name="photos-missing" />
        <Stack.Screen name="took-while" />
        <Stack.Screen name="validation-analysis" />
        <Stack.Screen name="validation-error" />
        <Stack.Screen name="validation-performed" />
      </Stack>
    </View>
  );
}
