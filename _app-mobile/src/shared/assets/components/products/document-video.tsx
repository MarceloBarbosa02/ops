import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export function IconDocumentVideo() {
  const theme = useTheme();
  return (
    <Svg width={16} height={16} fill="none">
      <Path
        stroke={theme.gray[800]}
        d="M1.963 5.523a2.995 2.995 0 0 1 2.215-2.248 9.754 9.754 0 0 1 4.616.004 3.057 3.057 0 0 1 2.239 2.202l.017.065a9.976 9.976 0 0 1 0 4.907l-.017.066a3.057 3.057 0 0 1-2.239 2.202 9.754 9.754 0 0 1-4.616.004 2.995 2.995 0 0 1-2.215-2.248l-.041-.183a10.45 10.45 0 0 1 0-4.589l.041-.182Z"
      />
      <Path
        stroke={theme.gray[800]}
        d="m11.11 10.205.13.044a.758.758 0 0 1 .1.04l1.123.558c.86.427 1.87-.194 1.87-1.148V6.54c0-1.009-1.116-1.623-1.977-1.089l-.99.615a.76.76 0 0 0-.136.106l-.036.037a9.974 9.974 0 0 1-.085 3.996Z"
      />
    </Svg>
  );
}
