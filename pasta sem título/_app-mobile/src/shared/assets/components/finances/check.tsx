import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

export const CheckIcon = () => {
  const theme = useTheme();

  return (
    <Svg width={25} height={24} fill="none">
      <Path
        stroke={theme.colors.color_neutral_100}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.25 7 9.679 17 6.25 13"
      />
    </Svg>
  );
};
