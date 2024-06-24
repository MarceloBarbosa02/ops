import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

export type FunnelBarProps = {
  active: boolean;
};

const FunnelBar = ({ active }: FunnelBarProps) => {
  const theme = useTheme();

  return (
    <Svg width={250} height={36} fill="none">
      <Path
        fill={active ? theme.blue[300] : theme.gray[300]}
        stroke={active ? theme.blue[300] : theme.gray[300]}
        strokeWidth={2}
        d="M1.372 4.803A3 3 0 0 1 4.262 1h241.475a3 3 0 0 1 2.891 3.803l-7.778 28A3 3 0 0 1 237.96 35H12.04a3 3 0 0 1-2.89-2.197l-7.778-28Z"
      />
    </Svg>
  );
};

export default FunnelBar;
