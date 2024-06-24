import * as React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const StartSellingIcon = ({ focused }: IconGenericProps) => {
  const colors = useTheme();

  return (
    <Svg width={25} height={25} fill="none">
      <Path
        stroke={focused ? colors.blue[400] : colors.gray[500]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M19.261 12.28v4.75a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-4.75"
      />
      <Path
        stroke={focused ? colors.blue[400] : colors.gray[500]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M20.011 7.906h-15.5a1 1 0 0 0-1 1v2.375a1 1 0 0 0 1 1h15.5a1 1 0 0 0 1-1V8.906a1 1 0 0 0-1-1ZM12.261 21.03V7.907M12.261 7.906H8.324a2.188 2.188 0 0 1 0-4.375c3.062 0 3.937 4.375 3.937 4.375ZM12.261 7.906H16.2a2.187 2.187 0 1 0 0-4.375c-3.063 0-3.938 4.375-3.938 4.375Z"
      />
    </Svg>
  );
};

export default StartSellingIcon;
