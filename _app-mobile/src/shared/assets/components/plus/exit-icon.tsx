import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const ExitIcon = () => {
  const colors = useTheme();

  return (
    <Svg width={24} height={24} fill="none">
      <Path
        stroke={colors.red[600]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.5 12H8.59M12 8.05l-3.66 3.67c-.15.15-.15.4 0 .56L12 15.95"
      />
      <Path
        stroke={colors.red[600]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.22 3H6.33C4.77 3 3.5 4.27 3.5 5.84v12.32C3.5 19.73 4.77 21 6.33 21h1.89"
      />
    </Svg>
  );
};

export default ExitIcon;
