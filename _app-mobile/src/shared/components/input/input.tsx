import React, { forwardRef, memo, useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components/native';
import { View } from 'react-native';
import {
  TextInputMaskMethods,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';

import { Typography } from '../typography';
import { TInputProps } from './input.types';
import { useInput } from './use-input';

import * as S from './input.styles';
import { mergeRefs, removeSpecialCharacters } from '@/shared/utils';
import { Feather } from '@expo/vector-icons';
import { RFPercentage } from 'react-native-responsive-fontsize';

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
    isFocusedOut,
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
                placeholderTextColor={theme.gray[500]}
                autoCapitalize={rest.autoCapitalize ?? 'none'}
                secureTextEntry={
                  rest.secureTextEntry ? isPasswordVisible : false
                }
                editable={!isDisabled ?? rest.editable}
                multiline={rest.multiline ?? false}
                style={{
                  lineHeight: rest.multiline ? 16 : 18,
                }}
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
                placeholderTextColor={theme.gray[500]}
                value={value}
                onChangeText={(text) =>
                  isRemoveSpecialCharacters
                    ? onChange(removeSpecialCharacters(text))
                    : onChange(text)
                }
                autoCapitalize={rest.autoCapitalize ?? 'none'}
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
    rest.multiline,
  ]);

  const labelContent = useMemo(() => {
    return label ? (
      <>
        {isLabelOutside ? (
          <S.WrapperIsRequired>
            <Typography title={label} variant="subtitle" size="large" />
            {isRequired && (
              <Typography
                title="(obrigatório)"
                variant="subtitle"
                size="medium"
                colorValue="neutral-light"
              />
            )}
          </S.WrapperIsRequired>
        ) : (
          <Typography
            title={label}
            variant="subtitle"
            size="medium"
            colorValue="neutral-regular"
          />
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
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 16,
            }}>
            {/* <Feather name="info" size={12} color={theme.red[600]} /> */}
            <Typography
              title={errorMessage}
              variant="subtitle"
              size="small"
              colorValue="danger"
            />
          </View>
        ) : description ? (
          <Typography
            title={description}
            variant="subtitle"
            size="small"
            colorValue="neutral-medium"
          />
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
          isErrorMessage={isErrorMessage}>
          {!shouldLabelBeInside ? labelContent : null}
          <S.Container
            labelPlacement={labelPlacement}
            isDisabled={isDisabled}
            variant={variant}
            isFilled={isLabelOutsideAsPlaceholder && !shouldLabelBeOutside}>
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
        isErrorMessage={isErrorMessage}>
        <S.Container
          labelPlacement={labelPlacement}
          isDisabled={isDisabled}
          variant={variant}
          isFilled={isLabelOutsideAsPlaceholder && !shouldLabelBeOutside}>
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
    isFocusedOut,
    shouldLabelBeOutside,
    isLabelOutsideAsPlaceholder,
  ]);

  return mainWrapper;
};

export default memo(forwardRef(Input));
