import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

export const InfoTooltipIcon = ({ isActive }: IconGenericProps) => {
  const colors = useTheme();

  return (
    <Svg
      width={16}
      height={16}
      fill={
        isActive ? colors.colors.blue_l600_d300 : colors.colors.gray_l400_d500
      }
    >
      <Path fill="#FAFAFA" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0Z" />
      <Path
        fillRule="evenodd"
        d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16ZM7 5a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm1 3a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1Z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
