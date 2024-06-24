import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const CalendarIcon = ({ isActive }: IconGenericProps) => {
  const theme = useTheme();

  return (
    <Svg width={24} height={24} fill="none">
      <Path
        stroke={isActive ? theme.blue[300] : theme.gray[900]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M18.417 4.667H5.583c-1.012 0-1.833.82-1.833 1.833v12.833c0 1.013.82 1.834 1.833 1.834h12.834c1.012 0 1.833-.821 1.833-1.834V6.5c0-1.012-.82-1.833-1.833-1.833ZM15.668 2.833V6.5M8.332 2.833V6.5M3.75 10.167h16.5"
      />
    </Svg>
  );
};

export default CalendarIcon;
