import { TextProps } from 'react-native';

type TVariant = 'head' | 'body' | 'subheading' | 'microText' | 'caption';

type TSize = 'small' | 'medium' | 'large' | 'large2';

type TAlign = 'left' | 'center' | 'right';

type TWeight = 'black' | 'bold' | 'medium' | 'regular' | 'light';

export type TColor =
  | 'neutral'
  | 'neutral-black'
  | 'neutral-bold'
  | 'neutral-medium'
  | 'neutral-regular'
  | 'neutral-light'
  | 'white'
  | 'primary'
  | 'success'
  | 'warning'
  | 'secondary'
  | 'danger';

export type TTypographyProps = {
  title?: string;
  className?: string;
  variant?: TVariant;
  size?: TSize;
  weight?: TWeight;
  color?: TColor;
  align?: TAlign;
  children?: React.ReactNode;
} & TextProps;
