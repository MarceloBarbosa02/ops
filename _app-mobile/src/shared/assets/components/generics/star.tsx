import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

const StarIcon = () => (
  <Svg width={18} height={18} fill="none">
    <G clipPath="url(#a)">
      <Path
        fill="#EBCB00"
        d="M13.464 16.993a.951.951 0 0 1-.553-.178L9 14.01 5.09 16.815a.947.947 0 0 1-1.456-.475.947.947 0 0 1-.002-.584L5.09 11.05 1.215 8.32a.952.952 0 0 1 .002-1.532.95.95 0 0 1 .554-.183l4.8-.007L8.1 2.007a.95.95 0 0 1 1.802 0l1.503 4.59 4.824.007a.95.95 0 0 1 .557 1.714L12.91 11.05l1.458 4.707a.948.948 0 0 1-.904 1.237Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.348.348h17.305v17.305H.348z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default StarIcon;
