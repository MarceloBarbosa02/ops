import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

export const ArrowLeftIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 12H4m0 0 6 6m-6-6 6-6"
    />
  </Svg>
);
