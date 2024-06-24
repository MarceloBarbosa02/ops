import { Feather } from '@expo/vector-icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { ActivityIndicator, TouchableOpacity } from 'react-native';
import { useWatch } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { TInputProps } from './input.types';

export const useInput = (props: TInputProps) => {
  const theme = useTheme();
  const {
    label = '',
    mask,
    textRef,
    control,
    name = '',
    options,
    type,
    isLoading = false,
    isFocusedOut = false,
    textRefMask,
    variant: variantProp = 'default',
    labelPlacement = 'higher',
    color = 'default',
    fullWidth = false,
    isClearable = false,
    isDisabled = false,
    isMultiline = false,
    isMask = false,
    isErrorMessage = false,
    isRemoveSpecialCharacters = true,
    errorMessage,
    startContent,
    isRequired,
    onValueChange = () => {},
    endContent: endContentProp,
    sizeWidth = 100,
    ...rest
  } = props;
  const form = useWatch();

  const isFilled = !!form[name];

  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const [isFocused, setIsFocused] = useState(isFocusedOut);

  const shouldLabelBeOutside = ['higher', undefined].includes(labelPlacement);
  const shouldLabelBeInside = ['inside', 'filled', undefined].includes(
    labelPlacement
  );
  const hasPlaceholder = !!rest.placeholder;
  const isLabelOutside = (shouldLabelBeOutside && isFilled) || hasPlaceholder;
  const isLabelOutsideAsPlaceholder =
    hasPlaceholder || (shouldLabelBeInside && isFilled);

  const variant = isFocused ? 'focused' : errorMessage ? 'error' : variantProp;

  const handlePasswordVisibilityChange = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const endContent = useMemo(() => {
    if (rest.secureTextEntry) {
      return (
        <TouchableOpacity onPress={handlePasswordVisibilityChange}>
          {isPasswordVisible ? (
            <Feather name="eye-off" size={18} color={theme.gray[400]} />
          ) : (
            <Feather name="eye" size={18} color={theme.gray[400]} />
          )}
        </TouchableOpacity>
      );
    }
    if (isLoading) {
      return <ActivityIndicator size={'small'} color={theme.gray[400]} />;
    }
    return endContentProp;
  }, [isPasswordVisible, isLoading, rest.secureTextEntry, endContentProp]);

  return {
    name,
    mask,
    type,
    label,
    isMask,
    textRef,
    options,
    variant,
    control,
    isFocused,
    isLoading,
    isRequired,
    endContent,
    sizeWidth,
    isDisabled,
    textRefMask,
    errorMessage,
    startContent,
    hasPlaceholder,
    labelPlacement,
    isLabelOutside,
    isErrorMessage,
    isFocusedOut,
    isPasswordVisible,
    isRemoveSpecialCharacters,
    // shouldLabelOutside,
    shouldLabelBeInside,
    shouldLabelBeOutside,
    isLabelOutsideAsPlaceholder,
    handleInputBlur,
    handleInputFocus,
    handlePasswordVisibilityChange,
    ...rest,
  };
};
