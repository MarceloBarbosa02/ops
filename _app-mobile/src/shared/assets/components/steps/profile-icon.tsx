import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export type IconProps = {
  active: boolean;
  complete: boolean;
};

const ProfileIcon = ({ active, complete }: IconProps) => {
  const colors = useTheme();

  const color = {
    stroke: active
      ? colors.blue[600]
      : complete
      ? colors.blue[200]
      : colors.gray[400],
    stroke1: active
      ? colors.gray[600]
      : complete
      ? colors.blue[200]
      : colors.gray[400],
  };

  return (
    <Svg width={40} height={40} fill="none">
      <Path
        stroke={color.stroke}
        strokeLinecap="round"
        strokeWidth={2}
        d="M34.789 17h-3m-3 0h3m0 3v-3m0-3v3"
      />
      <Path
        stroke={color.stroke1}
        strokeWidth={2}
        d="M9.675 29.074c0-3.606 2.503-6.677 5.906-7.245l.306-.051c2.725-.455 5.501-.455 8.226 0l.306.051c3.403.568 5.906 3.64 5.906 7.245 0 1.558-1.207 2.822-2.696 2.822H12.37c-1.489 0-2.696-1.264-2.696-2.822ZM26.023 10.884c0 3.25-2.696 5.883-6.023 5.883-3.326 0-6.023-2.634-6.023-5.883S16.674 5.001 20 5.001c3.327 0 6.023 2.634 6.023 5.883Z"
      />
    </Svg>
  );
};

export default ProfileIcon;
