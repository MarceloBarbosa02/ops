import { Text, TouchableOpacity } from 'react-native';
import { TButtonProps } from './button.types';
import { useButton } from './use.button';
import { forwardRef, memo } from 'react';

const Button = (props: TButtonProps, ref: any) => {
  const {
    endContent,
    isLoading,
    isDisabled,
    spinner,
    spinnerPlacement,
    startContent,
    stylesButton,
    stylesText,
    title,
    ...rest
  } = useButton({ ...props });

  return (
    <TouchableOpacity
      {...rest}
      ref={ref}
      activeOpacity={0.8}
      testID="button"
      className={stylesButton}>
      {startContent}
      {isLoading && spinnerPlacement === 'start' ? spinner : null}
      {title && <Text className={stylesText}>{title}</Text>}
      {isLoading && spinnerPlacement === 'end' ? spinner : null}
      {endContent}
    </TouchableOpacity>
  );
};

export default memo(forwardRef(Button));
