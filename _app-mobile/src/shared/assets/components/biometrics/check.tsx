import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const CheckBioIcon = () => (
  <Svg width={16} height={16} fill="none">
    <Rect
      width={14}
      height={14}
      x={1}
      y={1}
      fill="#0D6EDE"
      stroke="#0D6EDE"
      strokeWidth={2}
      rx={7}
    />
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeWidth={2}
      d="m5 8.22 2.666 2.22L11.22 6"
    />
  </Svg>
);
export default CheckBioIcon;
