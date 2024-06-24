import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const IconAsterisk = (props: SvgProps) => {
  const theme = useTheme();
  return (
    <Svg width={17} height={16} fill="none" {...props}>
      <Path fill={theme.gray[300]} d="M.5 7.167h16v1.666H.5V7.167Z" />
      <Path fill={theme.gray[300]} d="M9.333 0v16H7.667V0h1.666Z" />
      <Path
        fill={theme.gray[300]}
        d="M14.746 2.932 3.432 14.246l-1.178-1.178L13.568 1.754l1.178 1.178Z"
      />
      <Path
        fill={theme.gray[300]}
        d="M13.568 14.246 2.254 2.932l1.178-1.178 11.314 11.314-1.178 1.178Z"
      />
    </Svg>
  );
};

export default IconAsterisk;
