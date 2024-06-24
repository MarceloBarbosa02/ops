import React, { RefObject, useEffect, useState } from "react";
import { Keyboard, TextInput, TextInputProps } from "react-native";

import { Pin } from "./PIn";
import * as S from "./styles";

type PinCodeProps = {
  pin: boolean;
  isError: boolean;
  sizePin?: number;
  textPinRef: RefObject<TextInput>;
  changeCode(code: string): void;
} & TextInputProps;

export const PinCode = ({
  pin,
  isError,
  sizePin,
  changeCode,
  textPinRef,
  ...rest
}: PinCodeProps) => {
  const [pinCode, setPinCode] = useState<string>("");
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const lengthInput = 4;

  const handleSelectInput = () => {
    setIsFocused(true);
    textPinRef.current?.focus();
  };

  const keyboardDidHideListener = Keyboard.addListener(
    "keyboardDidHide",
    () => {
      setIsFocused(false);
    }
  );

  useEffect(() => {
    return () => {
      keyboardDidHideListener.remove();
    };
  }, [keyboardDidHideListener]);

  useEffect(() => {
    if (pin) {
      setPinCode("");
      changeCode("");
    }
  }, [pin]);

  return (
    <S.Wrapper>
      {Array(lengthInput)
        .fill("")
        .map((_, index) => (
          <Pin
            sizePin={sizePin}
            isError={isError}
            key={index.toString()}
            onPress={handleSelectInput}
            isFocused={isFocused}
            title={pinCode?.length > 0 ? pinCode[index] : ""}
          />
        ))}
      <TextInput
        {...rest}
        ref={textPinRef}
        value={pinCode}
        style={{ width: 1, height: 10, opacity: 0 }}
        onChangeText={(text) => {
          setPinCode(text);
          changeCode(text);
        }}
        maxLength={lengthInput}
      />
    </S.Wrapper>
  );
};
