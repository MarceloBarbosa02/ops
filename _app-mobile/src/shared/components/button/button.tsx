import React, { forwardRef, memo } from 'react';

import { TButtonProps } from './button.types';
import { useButton } from './use-button';
import * as S from './button.styles';

const Button = (props: TButtonProps, ref: any) => {
  const {
    size,
    title,
    radius,
    spinner,
    variant,
    colorValue,
    underline,
    sizeWidth,
    isLoading,
    endContent,
    isDisabled,
    startContent,
    textWeightButton,
    spinnerPlacement,
    disabled_color_bg,
    disabled_color_text,
    ...rest
  } = useButton({ ...props });

  return (
    <S.Wrapper
      size={size}
      colorValue={colorValue}
      variant={variant}
      sizeWidth={sizeWidth}
      radius={radius}
      disabledColor={disabled_color_bg}
      activeOpacity={0.7}
      {...rest}>
      {isLoading && spinnerPlacement === 'start' ? spinner : startContent}
      {title && (
        <S.Title
          colorValue={colorValue}
          underline={underline}
          disabledColor={disabled_color_text}
          size={size}
          textWeightButton={textWeightButton}
          variant={variant}>
          {title}
        </S.Title>
      )}
      {isLoading ? null : endContent}
    </S.Wrapper>
  );
};

export default memo(forwardRef(Button));
