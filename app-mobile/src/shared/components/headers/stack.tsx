import { ArrowLeftIcon } from '@/shared/assets/components';
import { router } from 'expo-router';
import { TouchableOpacity, View } from 'react-native';
import { HeaderProps } from './headers.type';
import { Typography } from '../typography';

const HeaderStack = ({ title }: HeaderProps) => {
  return (
    <View className="w-full flex-row items-center justify-between bg-gray-950 p-4">
      <TouchableOpacity
        className="flex-row items-center gap-4"
        activeOpacity={0.7}
        onPress={() => router.back()}>
        <ArrowLeftIcon />
        <Typography title={title} color="white" weight="bold" />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderStack;
