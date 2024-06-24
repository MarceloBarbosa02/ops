import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const CheckedIcon = () => {
  const colors = useTheme();

  return (
    <Svg width={9} height={7} fill="none">
      <Path
        stroke={colors.gray[900]}
        strokeLinecap="round"
        strokeWidth={2}
        d="m1 3.22 2.666 2.22L7.22 1"
      />
    </Svg>
  );
};

export default CheckedIcon;
