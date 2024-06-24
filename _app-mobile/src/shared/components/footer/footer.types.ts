import { TColor } from '../button/button.types';

export type TFooterProps = {
  titleLeft: string;
  titleRight: string;
  colorLeft?: TColor;
  colorRight?: TColor;
  isLoading?: boolean;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  handleOnPressLeft: () => void;
  handleOnPressRight: () => void;
};
