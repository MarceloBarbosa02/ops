import * as React from 'react';
import Svg, { Rect, Circle } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

import { TRadioProps } from './radio.types';

const RadioIcon = ({
  colorValue = 'default',
  size = 'medium',
  select = false,
}: TRadioProps) => {
  const colors = useTheme();

  const variantStylesDot = {
    default: colors.gray[400],
    primary: colors.blue[600],
    purple: colors.purple[600],
    danger: colors.red[600],
    success: colors.green[600],
    warning: colors.yellow[600],
  };

  if (size === 'large') {
    return (
      <Svg width={24} height={24} fill="none">
        <Rect
          width={22}
          height={22}
          x={1}
          y={1}
          stroke={variantStylesDot[colorValue]}
          strokeWidth={2}
          rx={11}
        />
        {select ? (
          <Circle cx={12} cy={12} r={5} fill={variantStylesDot[colorValue]} />
        ) : null}
      </Svg>
    );
  }

  if (size === 'medium') {
    return (
      <Svg width={20} height={20} fill="none">
        <Rect
          width={18}
          height={18}
          x={1}
          y={1}
          stroke={variantStylesDot[colorValue]}
          strokeWidth={2}
          rx={9}
        />
        {select ? (
          <Circle cx={10} cy={10} r={4} fill={variantStylesDot[colorValue]} />
        ) : null}
      </Svg>
    );
  }

  return (
    <Svg width={16} height={16} fill="none">
      <Rect
        width={14}
        height={14}
        x={1}
        y={1}
        stroke={variantStylesDot[colorValue]}
        strokeWidth={2}
        rx={7}
      />
      {select ? (
        <Circle cx={8} cy={8} r={3} fill={variantStylesDot[colorValue]} />
      ) : null}
    </Svg>
  );
};

export default RadioIcon;
