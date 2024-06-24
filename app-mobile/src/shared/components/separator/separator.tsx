import { View } from 'react-native';
import { forwardRef, memo } from 'react';
import { IconAsterisk } from '@/shared/assets/components/generics';

const Separator = () => {
  return (
    <View className="w-full flex-row items-center justify-center gap-2">
      <View className="h-px w-[45%] bg-gray-300" />
      <IconAsterisk />
      <View className="h-px w-[45%] bg-gray-300" />
    </View>
  );
};

export default memo(forwardRef(Separator));
