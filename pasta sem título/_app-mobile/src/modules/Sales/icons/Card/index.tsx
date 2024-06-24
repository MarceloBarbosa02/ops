import React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

export const SvgCard = () => {
  const theme = useTheme();

  return (
    <Svg width="16" height="16" fill="none" viewBox="0 0 24 24">
      <Path
        stroke={theme.colors.gray_l600_d300}
        strokeWidth={1.5}
        d="M3.203 8.7h17.594M2.885 15.151a13.077 13.077 0 0 1 0-6.302 7.353 7.353 0 0 1 5.546-5.407l.453-.101a14.401 14.401 0 0 1 6.232 0l.453.1a7.353 7.353 0 0 1 5.546 5.408c.514 2.07.514 4.233 0 6.302a7.353 7.353 0 0 1-5.546 5.407l-.453.101a14.402 14.402 0 0 1-6.232 0l-.453-.1a7.353 7.353 0 0 1-5.546-5.408Z"
      />
      <Path
        stroke={theme.colors.gray_l600_d300}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M7 12h4"
      />
    </Svg>
  );
};
