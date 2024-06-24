import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export function IconDocumentService() {
  const theme = useTheme();
  return (
    <Svg width={17} height={16} fill="none">
      <Path
        d="M15.333 8h-2.666l-2 6-4-12-2 6H2"
        stroke={theme.gray[800]}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
