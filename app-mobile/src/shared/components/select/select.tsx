import { Pressable, Text, TouchableOpacity, View } from 'react-native';
import { Typography } from '../typography';
import { Entypo } from '@expo/vector-icons';
import { colors } from '@/shared/theme';
import { TSelectOptions, TSelectProps } from './select.types';
import { useRef, useState } from 'react';

const Select = ({
  title = '',
  label,
  type = 'select',
  options,
  errorMessage,
  defaultValue,
  selectedValue,
  onValueChange,
  ...rest
}: TSelectProps) => {
  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [option, setOption] = useState<TSelectOptions>({} as TSelectOptions);
  const [active, setActive] = useState<boolean>(false);

  const handleIsOpen = () => {
    setActive(true);
    // bottomSheetModalRef.current?.present();
  };

  const handleSelectFocused = () => {
    setActive(false);
  };

  const handleSelectOption = (item: TSelectOptions) => {
    handleSelectFocused();
    setOption(item);
    if (onValueChange) onValueChange(item.value);
  };

  return (
    <View className="w-auto">
      <View className="rounded-md h-12 mt-1 w-full">
        <View className="w-auto absolute flex-row items-center -top-2 px-2 z-10">
          <Text className="font-Satoshi-Regular text-xs px-0.5 bg-gray-50 text-gray-700">
            {label}
          </Text>
        </View>
        <TouchableOpacity
          {...rest}
          activeOpacity={0.8}
          onPress={handleIsOpen}
          className={`flex-row items-center justify-between border rounded-[4] py-3 px-2 ${
            active ? 'border-blue-600 bg-blue-50' : 'border-gray-300'
          }`}>
          <Text className="flex-auto text-sm font-Satoshi-Regular text-gray-800">
            {option.label ?? label}
          </Text>
          <Entypo
            name="chevron-small-down"
            size={20}
            color={colors.gray[600]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Select;
