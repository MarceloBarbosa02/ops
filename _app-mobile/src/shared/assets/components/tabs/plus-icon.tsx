import Svg, { Path } from 'react-native-svg';
import { useTheme } from 'styled-components/native';

export const PlusIcon = ({ focused }: IconGenericProps) => {
  const colors = useTheme();

  return (
    <Svg width={25} height={25} fill="none">
      <Path
        stroke={focused ? colors.blue[400] : colors.gray[500]}
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M8.211 19.03h12.717m0-7h-16m16-7H13.9"
      />
    </Svg>
  );
};
