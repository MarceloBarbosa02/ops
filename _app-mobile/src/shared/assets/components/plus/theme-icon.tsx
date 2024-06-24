import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const ThemeIcon = () => {
  const colors = useTheme();

  return (
    <Svg width={24} height={24} fill="none">
      <Path
        stroke={colors.gray[900]}
        strokeWidth={1.5}
        d="M17 12a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
      />
      <Path
        stroke={colors.gray[900]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m18.312 5.688.117-.117M5.57 18.43l.117-.117M12 3.074V3m0 18v-.074M3.074 12H3m18 0h-.074M5.688 5.688l-.117-.117M18.43 18.43l-.117-.117"
      />
    </Svg>
  );
};

export default ThemeIcon;
