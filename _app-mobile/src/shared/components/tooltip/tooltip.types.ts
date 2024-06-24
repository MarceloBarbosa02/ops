import { TColor, TWeight } from '../typography/typography.types';

export type TTooltipProps = {
  title: string;
  description: string;
  startContent?: boolean;
  endContent?: boolean;
  color?: TColor;
  typeWeight?: TWeight;
};
