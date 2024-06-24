import * as React from "react";
import Svg, { Path } from "react-native-svg";

export const ArrowOutIcon = () => (
  <Svg width={24} height={24} fill="none">
    <Path
      stroke="#DA2B59"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 6.5v11m0 0 4-4.588M12 17.5l-4-4.588"
    />
  </Svg>
);
