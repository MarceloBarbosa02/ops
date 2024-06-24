import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const CheckBoxIcon = ({ isBlack }: IconGenericProps) => {
  const theme = useTheme();

  return (
    <Svg width={9} height={7} fill="none">
      <Path
        stroke={isBlack ? theme.gray[900] : theme.gray[50]}
        strokeLinecap="round"
        strokeWidth={2}
        d="m1 3.22 2.666 2.22L7.22 1"
      />
    </Svg>
  );
};

export default CheckBoxIcon;
