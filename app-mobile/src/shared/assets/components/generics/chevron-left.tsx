import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export const ChevronLeftIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m15 18-6-6 6-6"
    />
  </Svg>
);
