import { useCallback, useState } from 'react';
import {
  TextInput,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import { Typography } from '../typography';

interface PinProps extends TouchableOpacityProps {
  title: string;
  isFocused: boolean;
}

export const Pin = ({ isFocused = false, title }: PinProps) => {
  const [isFocus, setIsFocus] = useState(isFocused);

  const handleInputFocus = useCallback(() => {
    setIsFocus(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocus(false);
  }, []);

  const textStyle = ['w-12 h-12 border-b-2 items-center justify-center'];

  if (!isFocused) textStyle.push('border-gray-300');
  if (isFocused) textStyle.push('border-blue-600');

  return (
    <TouchableOpacity className={textStyle.join(' ')}>
      <Typography
        title={title}
        weight="bold"
        className="text-center"
        size="large"
      />
      {/* <TextInput
        className="w-full h-16 font-Satoshi-Medium text-[32px] leading-10 text-center"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        maxLength={1}
        keyboardType="numeric"

      /> */}
    </TouchableOpacity>
  );
};
