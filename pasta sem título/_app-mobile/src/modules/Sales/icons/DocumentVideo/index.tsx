import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { useTheme } from "styled-components/native";

export function IconDocumentVideo() {
  const theme = useTheme();
  return (
    // <Svg width={17} height={16} viewBox="0 0 17 16" fill="none">
    //   <Path
    //     d="M15.36 4.28a1.853 1.853 0 0 0-1.293-1.334c-1.147-.28-5.733-.28-5.733-.28s-4.587 0-5.734.307a1.853 1.853 0 0 0-1.293 1.333A19.333 19.333 0 0 0 1 7.833c-.007 1.191.096 2.38.307 3.553a1.854 1.854 0 0 0 1.293 1.28c1.147.307 5.734.307 5.734.307s4.586 0 5.733-.307a1.853 1.853 0 0 0 1.293-1.333 19.33 19.33 0 0 0 .307-3.5 19.33 19.33 0 0 0-.307-3.554Z"
    //     stroke={theme.colors.gray_l800_d100}
    //     strokeLinecap="round"
    //     strokeLinejoin="round"
    //   />
    //   <Path d="m6.834 10.014 3.833-2.18-3.833-2.18v4.36Z" stroke={theme.colors.gray_l800_d100} />
    // </Svg>
    <Svg width={16} height={16} fill="none">
      <Path
        stroke={theme.colors.gray_l800_d100}
        d="M1.963 5.523a2.995 2.995 0 0 1 2.215-2.248 9.754 9.754 0 0 1 4.616.004 3.057 3.057 0 0 1 2.239 2.202l.017.065a9.976 9.976 0 0 1 0 4.907l-.017.066a3.057 3.057 0 0 1-2.239 2.202 9.754 9.754 0 0 1-4.616.004 2.995 2.995 0 0 1-2.215-2.248l-.041-.183a10.45 10.45 0 0 1 0-4.589l.041-.182Z"
      />
      <Path
        stroke={theme.colors.gray_l800_d100}
        d="m11.11 10.205.13.044a.758.758 0 0 1 .1.04l1.123.558c.86.427 1.87-.194 1.87-1.148V6.54c0-1.009-1.116-1.623-1.977-1.089l-.99.615a.76.76 0 0 0-.136.106l-.036.037a9.974 9.974 0 0 1-.085 3.996Z"
      />
    </Svg>
  );
}
