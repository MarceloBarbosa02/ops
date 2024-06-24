import { TouchableOpacity, View } from 'react-native';
import { Typography } from '../typography';
import { ChevronRightIcon } from '@/shared/assets';
import { TMethodsButtonProps } from './button.types';

const ButtonMethods = ({
  icon,
  title = '',
  onSelectMethods,
}: TMethodsButtonProps) => {
  return (
    <TouchableOpacity
      className="flex-row items-center justify-between border border-gray-300 rounded-full p-2"
      activeOpacity={0.8}
      onPress={onSelectMethods}>
      <View className="flex-row items-center gap-4">
        <View className="w-8 h-8 items-center justify-center bg-gray-100 rounded-full">
          {icon}
        </View>
        <Typography title={title} size="small" />
      </View>
      <ChevronRightIcon variant="primary" />
    </TouchableOpacity>
  );
};

export default ButtonMethods;
