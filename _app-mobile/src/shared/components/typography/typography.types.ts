import { TextProps } from 'react-native';

type TVariant = 'head' | 'body' | 'subtitle';

type TSize = 'small' | 'medium' | 'large' | 'large2';

type TAlign = 'left' | 'center' | 'right';

export type TWeight = 'black' | 'bold' | 'medium' | 'regular' | 'light';

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
  | 'yellow'
  | 'danger';

export type TTypographyProps = {
  title: string;
  className?: string;
  variant?: TVariant;
  size?: TSize;
  weight?: TWeight;
  colorValue?: TColor;
  align?: TAlign;
  underline?: boolean;
  lineThrough?: boolean;
} & TextProps;
