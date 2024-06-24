import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const EmptyIcon = () => (
  <Svg width={25} height={24} fill="none">
    <Path
      stroke="#A8B0B3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M6.136 18.364A9 9 0 0 1 18.864 5.636M6.136 18.364A9 9 0 0 0 18.864 5.636M6.136 18.364 18.864 5.636"
    />
  </Svg>
);

export default EmptyIcon;
