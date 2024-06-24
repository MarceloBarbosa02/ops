import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const BusinessTabsIcon = () => {
  const colors = useTheme();

  return (
    <Svg width={22} height={22} fill="none">
      <Path
        stroke={colors.gray[900]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.333 6.416H3.667c-1.013 0-1.834.82-1.834 1.833v9.167c0 1.012.821 1.833 1.834 1.833h14.666c1.013 0 1.834-.82 1.834-1.833V8.249c0-1.012-.821-1.833-1.834-1.833Z"
      />
      <Path
        stroke={colors.gray[900]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M14.667 19.25V4.583a1.833 1.833 0 0 0-1.834-1.833H9.167a1.833 1.833 0 0 0-1.834 1.833V19.25"
      />
    </Svg>
  );
};

export default BusinessTabsIcon;
