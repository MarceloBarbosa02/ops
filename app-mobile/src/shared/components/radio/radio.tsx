import { forwardRef, memo } from 'react';
import { Pressable, View } from 'react-native';

import { Typography } from '../typography';
import { TRadioProps } from './radio.types';
import RadioIcon from './radio.icon';

const Radio = (
  {
    title = '',
    description = '',
    size = 'small',
    colorValue = 'default',
    select = false,
    sizeWidth = '100%',
    ...rest
  }: TRadioProps,
  ref: any
) => {
  return (
    <View className="w-full flex-row gap-3 items-center">
      <Pressable {...rest}>
        <RadioIcon colorValue={colorValue} size={size} select={select} />
      </Pressable>
      <View>
        {title && (
          <Typography
            title={title}
            size="small"
            style={{ width: sizeWidth }}
            color="neutral-black"
            weight="medium"
          />
        )}
        {description && (
          <Typography
            title={description}
            variant="caption"
            style={{ width: sizeWidth }}
            color="neutral-medium"
          />
        )}
      </View>
    </View>
  );
};

export default memo(forwardRef(Radio));
