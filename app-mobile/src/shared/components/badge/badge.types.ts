type TVariant = 'solid' | 'outlined';
type TTypeBorder = 'solid' | 'dashed';
type TColor =
  | 'primary'
  | 'secondary'
  | 'purple'
  | 'danger'
  | 'success'
  | 'warning'
  | 'default';
type TRadius = 'none' | 'sm' | 'md' | 'lg' | 'xlg' | 'full';

export type TBadgeProps = {
  label: string;
  variant?: TVariant;
  colorValue?: TColor;
  radius?: TRadius;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  className?: string;
  _text?: string;
  typeBorder?: TTypeBorder;
};
