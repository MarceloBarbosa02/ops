import { Feather } from '@expo/vector-icons';
import { forwardRef, memo, useMemo } from 'react';
import { useTheme } from 'styled-components/native';

import { Typography } from '../typography';

import { TCheckboxProps } from './checkbox.types';
import * as S from './checkbox.styles';
import { View } from 'react-native';
import { CheckBoxIcon } from '@/shared/assets/components/generics';

const Checkbox = (
  {
    label = '',
    description = '',
    size = 'small',
    colorValue = 'primary',
    isChecked = false,
    radius,
    sizeWidth = '100%',
    ...rest
  }: TCheckboxProps,
  ref: any
) => {
  const theme = useTheme();

  const isBlack = useMemo(() => {
    if (colorValue === 'warning' || colorValue === 'default') {
      return true;
    }
    return false;
  }, [colorValue]);

  return (
    <S.Wrapper>
      <S.WrapperButton {...rest}>
        <S.WrapperCheck
          radius={radius}
          size={size}
          isChecked={isChecked}
          colorValue={colorValue}>
          {isChecked && <CheckBoxIcon isBlack={isBlack} />}
        </S.WrapperCheck>
        <View style={{ width: '100%' }}>
          {label && (
            <Typography
              title={label}
              colorValue="neutral-black"
              size="large"
              variant="subtitle"
              style={{ width: sizeWidth }}
            />
          )}
          {description && (
            <Typography
              title={description}
              variant="subtitle"
              colorValue="neutral-medium"
              style={{ width: sizeWidth }}
            />
          )}
        </View>
      </S.WrapperButton>
    </S.Wrapper>
  );
};

export default memo(forwardRef(Checkbox));
