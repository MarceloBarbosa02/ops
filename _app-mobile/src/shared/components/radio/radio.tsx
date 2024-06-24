import { forwardRef, memo } from 'react';
import { Pressable, View } from 'react-native';

import { Typography } from '../typography';
import { TRadioProps } from './radio.types';
import RadioIcon from './radio.icon';

import * as S from './radio.styles';

const Radio = (
  {
    title = '',
    description = '',
    size = 'small',
    colorValue = 'primary',
    select = false,
    sizeWidth = '100%',
    ...rest
  }: TRadioProps,
  ref: any
) => {
  return (
    <S.Wrapper>
      <Pressable {...rest}>
        <RadioIcon
          colorValue={select ? colorValue : 'default'}
          size={size}
          select={select}
        />
      </Pressable>
      <View>
        {title && (
          <Typography
            title={title}
            colorValue="neutral"
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
    </S.Wrapper>
  );
};

export default memo(forwardRef(Radio));
