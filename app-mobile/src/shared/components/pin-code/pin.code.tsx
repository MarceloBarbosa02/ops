import { TextInput, TextInputProps, View } from 'react-native';
import { Typography } from '../typography';
import { colors } from '@/shared/theme';
import { Pin } from './pin';
import { createRef, useCallback, useRef, useState } from 'react';
import { Control, Controller, useFormContext } from 'react-hook-form';

interface InputOnboardProps extends TextInputProps {
  control: Control;
  name: string;
}

const PinCode = ({ control, name, ...rest }: InputOnboardProps) => {
  const lengthInput = 6;
  const textPin = useRef<TextInput>(null);
  const [pinCode, setPinCode] = useState('      ');

  const isPinFocused = useCallback(
    (index: number) => {
      const text_len = pinCode.length;

      return index === text_len;
    },
    [pinCode]
  );
  console.log({ pinCode });
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <View className="w-full flex-row items-center justify-center gap-4">
          {Array(lengthInput)
            .fill('')
            .map((_, index) => (
              <Pin
                key={index.toString()}
                onPress={() => textPin.current?.focus()}
                title={pinCode && pinCode.length > 0 ? pinCode[index] : ''}
                isFocused={isPinFocused(index)}
              />
            ))}
          <TextInput
            {...rest}
            ref={textPin}
            autoFocus
            onChangeText={(text) => {
              onChange(text);
              setPinCode(text);
            }}
            style={{ width: 1, opacity: 0 }}
            value={value}
            maxLength={lengthInput}
            keyboardType="numeric"
            blurOnSubmit={false}
          />
        </View>
      )}
    />
  );
};

export default PinCode;
