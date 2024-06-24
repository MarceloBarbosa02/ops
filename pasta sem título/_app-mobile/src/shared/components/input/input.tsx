import React, { forwardRef, memo, useMemo } from "react";
import { Controller } from "react-hook-form";
import { useTheme } from "styled-components/native";
import { View } from "react-native";
import {
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from "react-native-masked-text";
import { Feather } from "@expo/vector-icons";

import { mergeRefs, removeSpecialCharacters } from "@shared/utils";

import { TInputProps } from "./input.types";
import { useInput } from "./use-input";

import * as S from "./input.styles";

const Input = (props: TInputProps, ref: any) => {
  const {
    name,
    type,
    mask,
    label,
    isMask,
    textRef,
    options,
    control,
    isFocused,
    isLoading,
    variant,
    isRequired,
    endContent,
    sizeWidth,
    textRefMask,
    isDisabled,
    description,
    startContent,
    errorMessage,
    hasPlaceholder,
    labelPlacement,
    isLabelOutside,
    isErrorMessage,
    isPasswordVisible,
    isRemoveSpecialCharacters,
    shouldLabelBeOutside,
    shouldLabelBeInside,
    isLabelOutsideAsPlaceholder,
    handleInputBlur,
    handleInputFocus,
    handlePasswordVisibilityChange,
    ...rest
  } = useInput({ ...props });
  const theme = useTheme();

  const inputOrInputMask = useMemo(() => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <>
            {!mask && (
              <S.Input
                {...rest}
                ref={mergeRefs([ref, textRef])}
                autoCorrect={false}
                value={value}
                onChangeText={(text) =>
                  isRemoveSpecialCharacters
                    ? onChange(removeSpecialCharacters(text))
                    : onChange(text)
                }
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                maxFontSizeMultiplier={1.1}
                textContentType="oneTimeCode"
                placeholder={hasPlaceholder ? rest.placeholder : label}
                placeholderTextColor={theme.colors.gray_l600_d300}
                autoCapitalize={rest.autoCapitalize ?? "none"}
                secureTextEntry={
                  rest.secureTextEntry ? isPasswordVisible : false
                }
                editable={!isDisabled ?? rest.editable}
              />
            )}
            {mask && (
              <S.MaskTextInput
                {...rest}
                ref={mergeRefs([ref, textRefMask])}
                autoCorrect={false}
                maxFontSizeMultiplier={1.1}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                textContentType="oneTimeCode"
                type={type as TextInputMaskTypeProp}
                options={options as TextInputMaskOptionProp}
                placeholderTextColor={theme.colors.gray_l600_d300}
                value={value}
                onChangeText={(text) =>
                  isRemoveSpecialCharacters
                    ? onChange(removeSpecialCharacters(text))
                    : onChange(text)
                }
                autoCapitalize={rest.autoCapitalize ?? "none"}
                secureTextEntry={
                  rest.secureTextEntry === true ? isPasswordVisible : false
                }
                editable={!isDisabled ?? rest.editable}
              />
            )}
          </>
        )}
      />
    );
  }, [
    type,
    options,
    textRef,
    textRefMask,
    hasPlaceholder,
    isDisabled,
    isPasswordVisible,
    isRemoveSpecialCharacters,
    rest.placeholder,
    rest.autoCapitalize,
    rest.secureTextEntry,
    rest.editable,
  ]);

  const labelContent = useMemo(() => {
    return label ? (
      <>
        {isLabelOutside ? (
          <S.WrapperIsRequired>
            <S.Label>{label}</S.Label>
            {isRequired && <S.LabelRequired>(obrigatório)</S.LabelRequired>}
          </S.WrapperIsRequired>
        ) : (
          <S.Label>{label}</S.Label>
        )}
      </>
    ) : null;
  }, [label, isLabelOutside, isRequired]);

  const inputLabel = useMemo(() => {
    if (shouldLabelBeInside) {
      return (
        <View style={{ flex: 1 }}>
          {isLabelOutsideAsPlaceholder ? labelContent : null}
          {inputOrInputMask}
        </View>
      );
    }

    return <View style={{ flex: 1 }}>{inputOrInputMask}</View>;
  }, [
    labelContent,
    inputOrInputMask,
    isPasswordVisible,
    shouldLabelBeInside,
    isLabelOutsideAsPlaceholder,
  ]);

  const inputWrapper = useMemo(() => {
    if (startContent || endContent) {
      return (
        <S.WrapperInput>
          {startContent}
          {inputLabel}
          {endContent}
        </S.WrapperInput>
      );
    }

    return <S.WrapperInput>{inputLabel}</S.WrapperInput>;
  }, [startContent, endContent, inputLabel]);

  const helperWrapper = useMemo(() => {
    return (
      <S.WrapperIsError>
        {errorMessage && !isErrorMessage ? (
          <View
            style={{
              gap: 4,
              flexDirection: "row",
            }}
          >
            <Feather name="info" size={14} color={theme.colors.red_l600_d300} />
            <S.Error>{errorMessage}</S.Error>
          </View>
        ) : description ? (
          <S.Description>{description}</S.Description>
        ) : null}
      </S.WrapperIsError>
    );
  }, [errorMessage, isErrorMessage, description]);

  const mainWrapper = useMemo(() => {
    if (shouldLabelBeOutside) {
      return (
        <S.Wrapper
          sizeWidth={sizeWidth}
          isDisabled={isDisabled}
          isErrorMessage={isErrorMessage}
        >
          {!shouldLabelBeInside ? labelContent : null}
          <S.Container
            labelPlacement={labelPlacement}
            isDisabled={isDisabled}
            variant={variant}
            isFilled={isLabelOutsideAsPlaceholder && !shouldLabelBeOutside}
          >
            {inputWrapper}
          </S.Container>
          {helperWrapper}
        </S.Wrapper>
      );
    }

    return (
      <S.Wrapper
        sizeWidth={sizeWidth}
        isDisabled={isDisabled}
        isErrorMessage={isErrorMessage}
      >
        <S.Container
          labelPlacement={labelPlacement}
          isDisabled={isDisabled}
          variant={variant}
          isFilled={isLabelOutsideAsPlaceholder && !shouldLabelBeOutside}
        >
          {inputWrapper}
        </S.Container>
        {helperWrapper}
      </S.Wrapper>
    );
  }, [
    variant,
    sizeWidth,
    isDisabled,
    inputWrapper,
    helperWrapper,
    labelPlacement,
    isLabelOutside,
    shouldLabelBeOutside,
    isLabelOutsideAsPlaceholder,
  ]);

  return mainWrapper;
};

export default memo(forwardRef(Input));
