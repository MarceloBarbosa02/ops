import { ActivityIndicator } from 'react-native';
import { forwardRef, memo, useMemo } from 'react';
import { useTheme } from 'styled-components/native';

import { Typography } from '../typography';
import { TSwitchProps } from './switch.types';

import * as S from './switch.styles';

const Switch = (
  {
    title,
    size = 'sm',
    variant = 'primary',
    isLoading = false,
    defaultValue,
    onValueChange,
    spinner: spinnerProps,
    ...rest
  }: TSwitchProps,
  ref: any
) => {
  const theme = useTheme();
  const spinner = <ActivityIndicator size={'small'} color={theme.gray[50]} />;

  const buttonSwitch = useMemo(() => {
    return (
      <S.ButtonToggle
        {...rest}
        size={size}
        active={defaultValue}
        variant={variant}
      >
        {isLoading ? spinner : <S.Dot size={size} />}
      </S.ButtonToggle>
    );
  }, [isLoading, spinner, size, defaultValue, variant]);

  return (
    <S.Wrapper ref={ref}>
      {buttonSwitch}
      <Typography title={title} />
    </S.Wrapper>
  );
};

export default memo(forwardRef(Switch));
