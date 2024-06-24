import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconGenericProps } from '../icons-types';
import { colors } from '@/shared/theme';

export const FilterIcon = ({ variant, ...rest }: IconGenericProps) => {
  return (
    <Svg width={24} height={24} fill="none" {...rest}>
      <Path
        stroke={variant === 'primary' ? colors.blue[600] : colors.purple[600]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8h12m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Zm-6 8h12M9 16a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
      />
    </Svg>
  );
};
