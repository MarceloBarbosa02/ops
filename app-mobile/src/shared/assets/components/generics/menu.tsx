import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const MenuIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M3 12h12M3 6h18M3 18h18"
    />
  </Svg>
);
