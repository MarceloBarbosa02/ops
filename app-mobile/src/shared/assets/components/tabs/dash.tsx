import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/shared/theme';

import { IconGenericProps } from '../icons-types';

export const DashIcon = ({ focused }: IconGenericProps) => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke={focused ? colors.gray[50] : colors.gray[600]}
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M6 11.088h1.304c.62 0 1.139-.465 1.195-1.073l.272-2.942c.135-1.452 2.303-1.42 2.393.034l.36 5.785c.085 1.346 2.03 1.523 2.363.214l.286-1.125a1.196 1.196 0 0 1 1.164-.893H18"
    />
    <Path
      stroke={focused ? colors.gray[50] : colors.gray[600]}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M8 22h8m-4-4.444V22m-5.2-4.444h10.4c1.68 0 2.52 0 3.162-.364a3.186 3.186 0 0 0 1.311-1.457C22 15.024 22 14.09 22 12.223V7.333c0-1.867 0-2.8-.327-3.513a3.187 3.187 0 0 0-1.311-1.457C19.72 2 18.88 2 17.2 2H6.8c-1.68 0-2.52 0-3.162.363-.564.32-1.023.83-1.311 1.457C2 4.533 2 5.466 2 7.333v4.89c0 1.866 0 2.8.327 3.512a3.187 3.187 0 0 0 1.311 1.457c.642.364 1.482.364 3.162.364Z"
    />
  </Svg>
);
