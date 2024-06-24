import { useMemo } from 'react';
import { classNamesBackground, classNamesText } from './badge.styles';
import { TBadgeProps } from './badge.types';

export const useBadge = (props: TBadgeProps) => {
  const {
    label,
    startContent,
    endContent,
    className,
    colorValue = 'primary',
    variant = 'outlined',
    radius = 'sm',
    _text,
    typeBorder = 'dashed',
  } = props;

  const stylesBorder = useMemo(
    () =>
      classNamesBackground({
        colorValue,
        variant,
        radius,
        typeBorder,
        className,
      }),
    [colorValue, variant, radius, className]
  );

  const stylesText = useMemo(
    () =>
      classNamesText({
        colorValue,
        variant,
        _text,
      }),
    [colorValue, variant, _text]
  );

  return { label, startContent, endContent, stylesBorder, stylesText };
};
