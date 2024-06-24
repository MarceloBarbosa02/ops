import { Feather } from '@expo/vector-icons';
import { forwardRef, memo, useMemo } from 'react';
import { Controller } from 'react-hook-form';
import { useTheme } from 'styled-components/native';

import { Typography } from '../typography';

import { TCheckboxControlProps } from './checkbox.types';
import * as S from './checkbox.styles';
import { CheckBoxIcon } from '@/shared/assets';

const CheckboxControl = ({
  label = '',
  size = 'small',
  colorValue = 'primary',
  value = false,
  radius,
  control,
  name,
  sizeWidth = 100,
  errorMessage,
  ...rest
}: TCheckboxControlProps) => {
  const theme = useTheme();

  const isBlack = useMemo(() => {
    if (colorValue === 'warning' || colorValue === 'default') {
      return true;
    }
    return false;
  }, [colorValue]);

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <S.Wrapper>
          <S.WrapperButton {...rest} onPress={() => onChange(!value)}>
            <S.WrapperCheck
              radius={radius}
              size={size}
              isChecked={value}
              colorValue={colorValue}>
              {value && <CheckBoxIcon isBlack={isBlack} />}
            </S.WrapperCheck>
            <Typography title={label} style={{ width: '90%' }} />
          </S.WrapperButton>
        </S.Wrapper>
      )}
    />
  );
};

export default CheckboxControl;
