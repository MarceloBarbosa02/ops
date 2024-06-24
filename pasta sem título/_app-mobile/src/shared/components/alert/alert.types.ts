export type TVariant = 'solid' | 'outlined';
export type TColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning';

export type TAlert = {
  title: string;
  variant?: TVariant;
  colorValue?: TColor;
};
