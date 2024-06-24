import { Text, TouchableOpacity, View } from 'react-native';
import { Typography } from '../typography';
import { TabsLayoutProps } from './base.screen.types';

import { router } from 'expo-router';
import {
  ArrowLeftIcon,
  BellIcon,
  CartIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  LogoHorizontalIcon,
  MenuIcon,
} from '@/shared/assets';

export const Header = ({
  title,
  variant,
  description,
  isBackLeft,
  startContent,
  endContent,
  onNavigateLeft,
}: Omit<TabsLayoutProps, 'children'>) => {
  if (variant === 'auth') {
    return (
      <View className="w-full flex-row items-center justify-between bg-gray-50 p-4">
        <TouchableOpacity
          className="bg-blue-600 p-2 rounded-full"
          activeOpacity={0.7}
          onPress={onNavigateLeft}>
          <ChevronLeftIcon />
        </TouchableOpacity>
        <LogoHorizontalIcon isBlack />
      </View>
    );
  }

  if (variant === 'place') {
    return (
      <View className="w-full flex-row items-center justify-between bg-gray-900 p-4">
        <MenuIcon />
        <LogoHorizontalIcon />
        <CartIcon />
      </View>
    );
  }

  if (variant === 'dash') {
    return (
      <View className="w-full flex-row items-center justify-between bg-gray-900 p-4">
        <View className="flex-row items-center gap-3">
          <View className="bg-blue-600 w-8 h-8 items-center justify-center rounded-full">
            <Typography title="LM" color="white" variant="caption" />
          </View>
          <View className="flex-row items-center">
            <Typography title="Boas vendas, " color="white" weight="bold" />
            <Typography title="Laura" color="white" weight="bold" />
            <ChevronRightIcon />
          </View>
        </View>
        <View className="flex-row items-center gap-6">
          <EyeIcon />
          {/* <EyeOffIcon /> */}
          <View className="items-center justify-center">
            <View className="bg-blue-600 w-5 h-5 items-center justify-center rounded-full absolute z-10 -top-2.5 -right-1.5">
              <Text className="text-gray-50 text-[10px] font-Satoshi-Bold font-bold">
                10
              </Text>
            </View>
            <BellIcon />
          </View>
        </View>
      </View>
    );
  }

  return (
    <View className="w-full flex-row items-center justify-between bg-gray-900 p-4">
      <View>
        <View className="w-full flex-row items-center gap-4">
          {isBackLeft && <ArrowLeftIcon />}
          {startContent}
        </View>
        {description && (
          <Typography title={description} color="neutral-medium" />
        )}
      </View>
      {endContent}
    </View>
  );
};
