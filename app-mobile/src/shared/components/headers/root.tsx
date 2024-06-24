import { View } from 'react-native';

export function HeaderRoot({ children }: { children: React.ReactNode }) {
  return (
    <View className="w-full flex-row items-center justify-between bg-gray-900 p-4">
      {children}
    </View>
  );
}
