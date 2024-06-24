import { colors } from '@/shared/theme';
import * as React from 'react';
import { useMemo } from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconGenericProps } from '../icons-types';

export const ChevronRightIcon = ({ variant, ...props }: IconGenericProps) => {
  const colorChevron = useMemo(() => {
    if (variant === 'primary') return colors.blue[600];

    return colors.gray[50];
  }, [variant]);

  return (
    <Svg width={24} height={24} fill="none" {...props}>
      <Path
        stroke={colorChevron}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="m9 18 6-6-6-6"
      />
    </Svg>
  );
};
