import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const CommissionIcon = () => (
  <Svg width={17} height={16} fill="none">
    <Path
      stroke="#02A0FC"
      strokeLinecap="round"
      d="M6.75 6h2.667m-2.666 4h2m-2-2h4"
    />
    <Path
      stroke="#02A0FC"
      d="M2.984 5.967a5.008 5.008 0 0 1 3.732-3.732 8.902 8.902 0 0 1 4.066 0 5.008 5.008 0 0 1 3.732 3.732 8.901 8.901 0 0 1 0 4.066 5.008 5.008 0 0 1-3.732 3.732 8.904 8.904 0 0 1-4.066 0 5.008 5.008 0 0 1-3.732-3.732 8.902 8.902 0 0 1 0-4.066Z"
    />
  </Svg>
);
export default CommissionIcon;
