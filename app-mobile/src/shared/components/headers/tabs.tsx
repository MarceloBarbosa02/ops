import {
  BellIcon,
  ChevronRightIcon,
  EyeIcon,
  EyeOffIcon,
} from '@/shared/assets/components';
import { Text, TouchableOpacity, View } from 'react-native';
import { Typography } from '../typography';
import { useHeaders } from './use-headers';

const HeaderTabs = () => {
  const { initialName, formattedName, toggle, handleChangeVisible } =
    useHeaders();

  return (
    <View className="w-full flex-row items-center justify-between bg-gray-900 p-4">
      <View className="flex-row items-center gap-3">
        <View className="bg-blue-600 w-8 h-8 items-center justify-center rounded-full">
          <Typography title={formattedName} color="white" variant="caption" />
        </View>
        <View className="flex-row items-center">
          <Typography title="Boas vendas, " color="white" weight="bold" />
          <Typography title={initialName} color="white" weight="bold" />
          <ChevronRightIcon />
        </View>
      </View>
      <View className="flex-row items-center gap-6">
        <TouchableOpacity onPress={handleChangeVisible}>
          {toggle ? <EyeIcon /> : <EyeOffIcon />}
        </TouchableOpacity>
        <View className="items-center justify-center mr-1">
          <View className="bg-blue-600 w-5 h-5 items-center justify-center rounded-full absolute z-10 -top-2.5 -right-1.5">
            <Text className="text-gray-50 text-[10px] font-Satoshi-Bold font-bold">
              9+
            </Text>
          </View>
          <BellIcon />
        </View>
      </View>
    </View>
  );
};

export default HeaderTabs;
