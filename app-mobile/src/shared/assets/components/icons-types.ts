import { SvgProps } from 'react-native-svg';

export type IconGenericProps = {
  focused?: boolean;
  isActive?: boolean;
  isBlack?: boolean;
  variant?: 'primary' | 'secondary';
} & SvgProps;
