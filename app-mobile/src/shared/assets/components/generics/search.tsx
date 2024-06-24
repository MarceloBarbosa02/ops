import { colors } from '@/shared/theme';
import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconGenericProps } from '../icons-types';

export const SearchIcon = ({ variant, ...rest }: IconGenericProps) => (
  <Svg width={16} height={16} fill="none" {...rest}>
    <Path
      stroke={variant === 'primary' ? colors.blue[600] : colors.purple[600]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m14 14-4-4m1.334-3.333a4.667 4.667 0 1 1-9.334 0 4.667 4.667 0 0 1 9.334 0Z"
    />
  </Svg>
);
