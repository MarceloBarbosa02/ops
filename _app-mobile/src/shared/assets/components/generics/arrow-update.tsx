import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const ArrowUpdateIcon = ({ isActive }: IconGenericProps) => {
  const theme = useTheme();

  return (
    <Svg width={25} height={24} fill="none">
      <Path
        stroke={
          isActive ? theme.button.text.primary : theme.button.disabled.text
        }
        strokeWidth={1.5}
        d="M3.603 8.95A7.511 7.511 0 0 1 9.2 3.353c2.006-.47 4.094-.47 6.1 0a7.511 7.511 0 0 1 5.597 5.597c.47 2.006.47 4.094 0 6.1a7.511 7.511 0 0 1-5.597 5.597c-2.006.47-4.094.47-6.1 0a7.511 7.511 0 0 1-5.597-5.597 13.354 13.354 0 0 1 0-6.1Z"
      />
      <Path
        stroke={
          isActive ? theme.button.text.primary : theme.button.disabled.text
        }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M8.75 12h7m0 0-2.5-2.5m2.5 2.5-2.5 2.5"
      />
    </Svg>
  );
};

export default ArrowUpdateIcon;
