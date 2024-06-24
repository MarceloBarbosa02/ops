import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/shared/theme';

import { IconGenericProps } from '../icons-types';

export const PlusIcon = ({ focused }: IconGenericProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill={focused ? colors.gray[50] : colors.gray[600]}
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path
      stroke={focused ? colors.gray[50] : colors.gray[600]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM19 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
);
