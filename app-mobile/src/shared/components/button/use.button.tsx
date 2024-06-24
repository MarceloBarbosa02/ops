import { useMemo } from 'react';
import { TButtonProps } from './button.types';
import { classNamesBackground, classNamesText } from './button.styles';
import { ActivityIndicator } from 'react-native';

export const useButton = (props: TButtonProps) => {
  const {
    title,
    children,
    startContent,
    endContent,
    className,
    spinner = <ActivityIndicator size={'small'} />,
    size,
    _text,
    colorValue = 'primary',
    variant = 'solid',
    radius = 'sm',
    isDisabled: isDisabledProp = false,
    isLoading = false,
    spinnerPlacement = 'start',
    textWeightButton = 'bold',
    sizeWidth,
    ...rest
  } = props;

  const isDisabled = rest.disabled || isDisabledProp || isLoading;

  const stylesButton = useMemo(
    () =>
      classNamesBackground({
        size,
        colorValue,
        variant,
        radius,
        isDisabled,
        sizeWidth,
        className,
      }),
    [size, colorValue, sizeWidth, variant, radius, isDisabled, className]
  );

  const stylesText = useMemo(
    () =>
      classNamesText({
        size,
        _text,
        colorValue,
        variant,
        isDisabled,
        className,
        textWeightButton,
      }),
    [colorValue, size, variant, isDisabled, textWeightButton, className]
  );

  return {
    stylesButton,
    stylesText,
    title,
    children,
    startContent,
    endContent,
    className,
    spinner,
    size,
    colorValue,
    variant,
    radius,
    isDisabled,
    isLoading,
    spinnerPlacement,
    ...rest,
  };
};
