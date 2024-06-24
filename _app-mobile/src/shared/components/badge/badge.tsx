import { forwardRef, memo } from 'react';

import { TBadgeProps } from './badge.types';

import * as S from './badge.styles';

const Badge = (
  {
    label,
    startContent,
    endContent,
    colorValue = 'primary',
    variant = 'outlined',
    radius = 'sm',
    _text,
    size = 'md',
    typeBorder = 'dashed',
  }: TBadgeProps,
  ref: any
) => {
  return (
    <S.Wrapper
      colorValue={colorValue}
      variant={variant}
      typeBorder={typeBorder}
      radius={radius}
      size={size}>
      {startContent}
      <S.Title colorValue={colorValue} variant={variant} size={size}>
        {label}
      </S.Title>
      {endContent}
    </S.Wrapper>
  );
};

export default memo(forwardRef(Badge));
