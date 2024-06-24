import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

const LinkIcon = () => (
  <Svg width={24} height={24} fill="none">
    <G
      stroke="#02A0FC"
      strokeLinecap="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      clipPath="url(#a)"
    >
      <Path d="m12.85 17.91-1.66 1.69a4.76 4.76 0 0 1-6.75 0 4.761 4.761 0 0 1 0-6.75l1.68-1.69M11.19 6.09l1.69-1.69a4.79 4.79 0 0 1 6.76 0 4.79 4.79 0 0 1 0 6.76l-1.69 1.69M8.62 15.38l6.76-6.75" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v24H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default LinkIcon;
