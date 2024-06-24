import { useMemo } from 'react';
import { TCheckboxProps } from './checkbox.types';
import { colors } from '@/shared/theme';
import {
  classNamesCheckStyles,
  classNamesStylesCheckbox,
  classNamesStylesText,
} from './checkbox.styles';

export const useCheckbox = (props: TCheckboxProps) => {
  const {
    label,
    className,
    isChecked,
    line = false,
    radius = 'none',
    size = 'medium',
    colorValue = 'primary',
    errorMessage,
    ...rest
  } = props;

  const isDisabled = rest.disabled ?? false;

  const sizeCheckIcon = useMemo(() => {
    if (size === 'large') return 12;
    if (size === 'medium') return 10;
    if (size === 'small') return 8;
  }, [size]);

  const sizeCheckColorIcon = useMemo(() => {
    if (colorValue === 'default' || colorValue === 'warning') {
      return colors.gray[900];
    } else {
      return colors.gray[50];
    }
  }, [size]);

  const stylesCheck = useMemo(
    () =>
      classNamesCheckStyles({
        size,
        radius,
        isDisabled,
        isChecked,
        colorValue,
        errorMessage,
      }),
    [
      size,
      radius,
      isDisabled,
      isChecked,
      className,
      colorValue,
      errorMessage,
      rest.disabled,
    ]
  );

  const stylesText = useMemo(
    () =>
      classNamesStylesText({
        line,
        isDisabled,
      }),
    [line, isDisabled, rest.disabled]
  );

  const stylesTextCheckbox = useMemo(
    () =>
      classNamesStylesCheckbox({
        className,
      }),
    [className]
  );

  return {
    ...rest,
    label,
    isChecked,
    stylesText,
    stylesCheck,
    errorMessage,
    sizeCheckIcon,
    stylesTextCheckbox,
    sizeCheckColorIcon,
  };
};
