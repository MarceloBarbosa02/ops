import * as React from 'react';
import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

const ShoppingIcon = ({ focused }: IconGenericProps) => {
  const colors = useTheme();

  return (
    <Svg width={25} height={25} fill="none">
      <G
        stroke={focused ? colors.blue[400] : colors.gray[500]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        clipPath="url(#a)"
      >
        <Path d="M12.595 3.53v11.91M16.544 12.03l-3.67 3.66c-.15.15-.4.15-.56 0l-3.67-3.66" />
        <Path d="M21.595 15.81v1.89c0 1.56-1.27 2.83-2.84 2.83H6.435c-1.57 0-2.84-1.27-2.84-2.83v-1.89" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M.595.03h24v24h-24z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ShoppingIcon;
