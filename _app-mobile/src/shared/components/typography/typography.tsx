import { forwardRef, memo } from 'react';

import { TTypographyProps } from './typography.types';

import * as S from './typography.styles';

const Typography = (props: TTypographyProps, ref: any) => {
  const {
    title,
    variant = 'body',
    size = 'medium',
    weight = 'regular',
    colorValue = 'neutral-black',
    align = 'left',
    underline = false,
    lineThrough = false,
    ...rest
  } = props;

  return (
    <S.Typography
      variant={variant}
      size={size}
      weight={weight}
      colorValue={colorValue}
      align={align}
      underline={underline}
      lineThrough={lineThrough}
      {...rest}>
      {title}
    </S.Typography>
  );
};

export default memo(forwardRef(Typography));
