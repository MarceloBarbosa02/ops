import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { IconProps } from './profile-icon';
import { useTheme } from 'styled-components/native';

const BusinessIcon = ({ active, complete }: IconProps) => {
  const colors = useTheme();

  const color = {
    fill: active
      ? colors.blue[600]
      : complete
      ? colors.blue[200]
      : colors.gray[400],
    stroke: active
      ? colors.gray[600]
      : complete
      ? colors.blue[200]
      : colors.gray[400],
  };

  return (
    <Svg width={40} height={41} fill="none">
      <Path
        stroke={color.stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M31.51 12.833H7.944C6.32 12.833 5 14.215 5 15.92v15.428c0 1.705 1.319 3.086 2.945 3.086H31.51c1.627 0 2.946-1.381 2.946-3.085V15.918c0-1.704-1.32-3.086-2.946-3.086ZM25.891 12.479V7.242c0-.173-.31-.34-.863-.463-.552-.122-1.301-.191-2.082-.191h-5.891c-.782 0-1.53.069-2.083.191-.553.123-.863.29-.863.463v5.237"
      />
      <Path
        fill={color.fill}
        d="M15.11 14.833v-1h-2v1h2Zm-2 6a1 1 0 0 0 2 0h-2Zm0-6v6h2v-6h-2ZM26.89 14.833v-1h-2v1h2Zm-2 6a1 1 0 0 0 2 0h-2Zm0-6v6h2v-6h-2Z"
      />
    </Svg>
  );
};

export default BusinessIcon;
