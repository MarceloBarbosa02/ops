import { Typography } from '@/shared/components';
import { TouchableOpacity, View } from 'react-native';
import { TOptionsProps } from './components.types';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '@/shared/theme';

export function ButtonOption({
  icon,
  title,
  isSelected,
  description,
  ...rest
}: TOptionsProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      className={`w-full flex-row items-center justify-between gap-3 p-4 rounded-lg ${isSelected ? 'border-2 border-blue-600' : 'border border-gray-300'}`}
      {...rest}>
      {icon}
      <View style={{ width: '80%' }}>
        <Typography title={description} variant="caption" />
        <Typography title={title} weight="bold" />
      </View>
      <View
        className={`w-5 h-5 border-2 ${isSelected ? 'bg-blue-600 border-blue-600' : 'border-gray-400'} rounded-full items-center justify-center`}>
        <FontAwesome name="check" size={12} color={colors.gray[50]} />
      </View>
    </TouchableOpacity>
  );
}
