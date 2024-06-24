import { TouchableOpacityProps } from 'react-native';

export type TOptionsProps = {
  title: string;
  description: string;
  icon?: JSX.Element;
  isSelected?: boolean;
} & TouchableOpacityProps;
