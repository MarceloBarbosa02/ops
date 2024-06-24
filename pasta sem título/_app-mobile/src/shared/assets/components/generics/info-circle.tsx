import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";
import { useTheme } from "styled-components/native";

export const IconCircleIcon = (props: SvgProps) => {
  const theme = useTheme();

  return (
    <Svg width={16} height="1em" fill="none" viewBox="0 0 24 24" {...props}>
      <Path
        stroke={theme.colors.gray_l900_d50}
        strokeWidth={1.5}
        d="M3.353 8.95A7.511 7.511 0 0 1 8.95 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
      />
      <Path
        stroke={theme.colors.gray_l900_d50}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M12 15.5v-4"
      />
      <Circle
        cx={12}
        cy={9}
        r={0.5}
        stroke={theme.colors.gray_l900_d50}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
