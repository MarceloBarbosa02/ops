import { Href } from 'expo-router';
import {
  DimensionValue,
  PressableProps,
  TouchableOpacityProps,
} from 'react-native';

type TSize = 'small' | 'medium' | 'large';
type TVariant = 'solid' | 'outlined' | 'link';
export type TColor =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'danger'
  | 'success'
  | 'warning';
type TRadius = 'sm' | 'md' | 'lg' | 'xlg' | 'full';
type TTextWeightButton = 'bold' | 'regular' | 'medium';
type TSpinnerPlacement = 'start' | 'end';

export type TButtonProps = {
  /**
   * Content text button.
   */
  title?: string;
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
  sizeWidth?: DimensionValue | undefined;
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
  href?: Href<string>;
} & TouchableOpacityProps;

export type TButtonOptionProps = {
  title: string;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
} & TouchableOpacityProps;
