import React, { RefObject, forwardRef, memo, useEffect, useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';

import * as S from './pin-code.styles';
import { Pin } from './pin';

type PinCodeProps = {
  pin: boolean;
  isError?: boolean;
  sizePin?: number;
  textPinRef: RefObject<TextInput>;
  changeCode(code: string): void;
} & TextInputProps;

const PinCode = (
  {
    pin,
    isError = false,
    sizePin,
    changeCode,
    textPinRef,
    ...rest
  }: PinCodeProps,
  ref: any
) => {
  const [pinCode, setPinCode] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const lengthInput = 4;

  const handleSelectInput = () => {
    setIsFocused(true);
    textPinRef.current?.focus();
  };

  useEffect(() => {
    if (pinCode?.length === lengthInput) {
      setIsFocused(true);
    }
    if (pin) {
      setPinCode('');
      changeCode('');
    }
  }, [pin, pinCode]);

  useEffect(() => {
    if (isError) {
      setIsFocused(false);
      setTimeout(() => {
        setPinCode('');
        changeCode('');
      }, 1000);
    }
  }, [isError]);

  return (
    <>
      <S.Wrapper>
        {Array(lengthInput)
          .fill('')
          .map((_, index) => (
            <Pin
              sizePin={sizePin}
              isError={isError}
              key={index.toString()}
              onPress={handleSelectInput}
              isFocused={isFocused}
              title={pinCode?.length > 0 ? pinCode[index] : ''}
            />
          ))}
      </S.Wrapper>
      <TextInput
        ref={textPinRef}
        value={pinCode}
        style={{ width: 1, height: 1, opacity: 0 }}
        onChangeText={(text) => {
          setPinCode(text);
          changeCode(text);
        }}
        keyboardType="numeric"
        maxLength={lengthInput}
        {...rest}
      />
    </>
  );
};

export default memo(forwardRef(PinCode));
