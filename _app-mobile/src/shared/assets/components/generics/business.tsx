import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';

const BusinessIcon = () => (
  <Svg width={25} height={24} fill="none">
    <Path
      stroke="#FAFAFA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M19.5 21V5a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0h-2m2 0h5m-1-14h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4"
    />
  </Svg>
);
export default BusinessIcon;
