import React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

export const FilterIcon = () => {
  const theme = useTheme();

  return (
    <Svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <Path
        stroke={theme.colors.gray_l600_d300}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M17.988 3H5.88C4.254 3 3.308 4.836 4.25 6.16l4.13 5.798a4 4 0 0 1 .742 2.32v4.051a2.67 2.67 0 1 0 5.341 0v-3.99a4 4 0 0 1 .806-2.408l4.316-5.727C20.58 4.886 19.638 3 17.988 3Z"
      />
    </Svg>
  );
};
