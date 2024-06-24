import { useMemo } from 'react';
import { TTypographyProps } from './typography.types';
import { styledTypography } from './typography.styles';

export const useTypography = (props: TTypographyProps) => {
  const {
    title,
    variant = 'body',
    size = 'medium',
    weight = 'regular',
    color = 'neutral-black',
    align = 'left',
    className,
    children,
    ...rest
  } = props;

  const stylesTypography = useMemo(
    () =>
      styledTypography({
        variant,
        size,
        weight,
        color,
        align,
        className,
      }),
    [variant, size, weight, color, align, className]
  );

  return {
    stylesTypography,
    children,
    title,
    ...rest,
  };
};
