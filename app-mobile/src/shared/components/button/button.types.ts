import { TouchableOpacityProps } from 'react-native';

type TSize = 'small' | 'xsmall' | 'medium' | 'large';
type TVariant = 'solid' | 'outlined' | 'link';
export type TColor =
  | 'primary'
  | 'secondary'
  | 'backWhite'
  | 'whiteBlack'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning';
type TRadius = 'sm' | 'md' | 'lg' | 'xlg' | 'full';
type TTextWeightButton = 'black' | 'bold' | 'regular' | 'medium';
type TSpinnerPlacement = 'start' | 'end';
type TSizeWidth =
  | 'size10'
  | 'size20'
  | 'size30'
  | 'size40'
  | 'size50'
  | 'sizeFull';

export type TButtonProps = {
  /**
   * Content text button.
   */
  title?: string;
  /**
   * Content text button.
   */
  _text?: string;
  /**
   * Content text button.
   */
  className?: string;
  /**
   * Content text button.
   * * @default 'medium'
   */
  textWeightButton?: TTextWeightButton;
  /**
   * The button start content.
   */
  startContent?: JSX.Element;
  /**
   * The button end content.
   */
  endContent?: JSX.Element;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isDisabled?: boolean;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  isLoading?: boolean;
  /**
   * Whether the buttons are disabled.
   * @default 100
   */
  sizeWidth?: TSizeWidth;
  /**
   * Whether the buttons are disabled.
   * @default 'medium'
   */
  size?: TSize;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  radius?: TRadius;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  spinner?: JSX.Element;
  /**
   * Whether the buttons are disabled.
   * @default "start"
   */
  spinnerPlacement?: TSpinnerPlacement;
  /**
   * Whether the buttons are disabled.
   * @default 'solid'
   */
  variant?: TVariant;
  /**
   * Whether the buttons are disabled.
   * @default 'primary'
   */
  colorValue?: TColor;
  /**
   * Whether the buttons are disabled.
   * @default 'primary'
   */
  disabledColor?: TColor;
  /**
   * Whether the buttons are disabled.
   * @default false
   */
  underline?: boolean;
  /**
   * Whether the rota navegável.
   */
} & TouchableOpacityProps;

export type TMethodsButtonProps = {
  icon?: JSX.Element;
  title?: string;
  onSelectMethods?: () => void;
};
