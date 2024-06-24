import { useMemo } from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

import { TButtonProps, TColor } from './button.types';

export const useButton = (props: TButtonProps) => {
  const theme = useTheme();
  const {
    title,
    startContent,
    endContent,
    spinner: spinnerProps,
    size,
    sizeWidth = 'auto',
    colorValue = 'primary',
    variant = 'solid',
    radius = 'sm',
    isDisabled: isDisabledProp = false,
    isLoading = false,
    spinnerPlacement = 'start',
    underline = false,
    textWeightButton = 'bold',
    ...rest
  } = props;

  const isDisabled = rest.disabled || isDisabledProp || isLoading;

  const disabled_color_bg = useMemo(() => {
    return isDisabled ? theme.button.disabled.background : '';
  }, [isDisabled]) as TColor;

  const disabled_color_text = useMemo(() => {
    return isDisabled ? theme.button.disabled.text : '';
  }, [isDisabled]) as TColor;

  const spinner = (
    <ActivityIndicator size="small" color={disabled_color_text} />
  );

  return {
    size,
    title,
    radius,
    spinner,
    variant,
    sizeWidth,
    colorValue,
    underline,
    isLoading,
    isDisabled,
    endContent,
    startContent,
    textWeightButton,
    spinnerPlacement,
    disabled_color_bg,
    disabled_color_text,
    ...rest,
  };
};
