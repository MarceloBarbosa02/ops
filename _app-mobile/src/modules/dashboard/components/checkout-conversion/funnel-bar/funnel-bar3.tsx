import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { useTheme } from "styled-components/native";
import { FunnelBarProps } from "./funnel-bar";

const FunnelBar3 = ({ active }: FunnelBarProps) => {
  const theme = useTheme();

  return (
    <Svg width={100} height={36} fill="none">
      <Path
        fill={active ? theme.blue[200] : theme.gray[200]}
        stroke={active ? theme.blue[200] : theme.gray[200]}
        strokeWidth={2}
        d="M1.372 4.803A3 3 0 0 1 4.262 1h91.475a3 3 0 0 1 2.891 3.803l-7.778 28A3 3 0 0 1 87.96 35H12.04a3 3 0 0 1-2.89-2.197l-7.778-28Z"
      />
    </Svg>
  );
};

export default FunnelBar3;
