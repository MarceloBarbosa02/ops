import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/shared/theme';

import { IconGenericProps } from '../icons-types';

export const SalesIcon = ({ focused }: IconGenericProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke={focused ? colors.gray[50] : colors.gray[600]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8.5 14.667A2.333 2.333 0 0 0 10.833 17H13a2.5 2.5 0 0 0 0-5h-2a2.5 2.5 0 0 1 0-5h2.167A2.333 2.333 0 0 1 15.5 9.333M12 5.5V7m0 10v1.5M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10Z"
    />
  </Svg>
);
