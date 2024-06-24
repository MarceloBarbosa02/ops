import Svg, { Path, Defs, Rect } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const SalesIcon = ({ focused }: IconGenericProps) => {
  const colors = useTheme();

  return (
    <Svg width={21} height={18} fill="none">
      <Path
        fill={focused ? colors.blue[400] : colors.gray[500]}
        d="M6.814 17.062a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75ZM16.564 17.062a.875.875 0 1 0 0-1.75.875.875 0 0 0 0 1.75Z"
      />
      <Path
        stroke={focused ? colors.blue[400] : colors.gray[500]}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m1.057 1 2.019.021a1 1 0 0 1 .98.865l1.302 9.56a1 1 0 0 0 .99.866h11.723a1 1 0 0 0 .995-.9l.645-6.364a1 1 0 0 0-.995-1.1H4.528M7.69 16.186a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Zm9.75 0a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0Z"
      />
    </Svg>
  );
};
