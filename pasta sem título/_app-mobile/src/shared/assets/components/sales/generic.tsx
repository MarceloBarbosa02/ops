import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

export const GenericIcon = () => (
  <Svg width={32} height={24} fill="none">
    <Path
      stroke="#474747"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M2 9h28"
    />
    <Rect
      width={28.5}
      height={20.5}
      x={1.75}
      y={1.75}
      stroke="#474747"
      strokeWidth={1.5}
      rx={3.25}
    />
  </Svg>
);
