import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const InfoIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      fill="#0D6EDE"
      stroke="#0D6EDE"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.144 3.83c1.879-.44 3.833-.44 5.712 0a7.13 7.13 0 0 1 5.313 5.314c.441 1.879.441 3.833 0 5.712a7.13 7.13 0 0 1-5.313 5.313c-1.879.441-3.833.441-5.712 0a7.13 7.13 0 0 1-5.314-5.313 12.506 12.506 0 0 1 0-5.712A7.13 7.13 0 0 1 9.144 3.83Zm3.451 6.629a1.458 1.458 0 1 0-1.19 0 1.218 1.218 0 0 0-.623 1.062v3.83a1.218 1.218 0 0 0 2.436 0v-3.83c0-.456-.251-.854-.623-1.062Z"
    />
  </Svg>
);
export default InfoIcon;
