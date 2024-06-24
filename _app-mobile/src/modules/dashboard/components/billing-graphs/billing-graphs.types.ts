import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { RefObject } from 'react';
import { TouchableOpacityProps } from 'react-native';

export type FilterChartsProps = {
  title: string;
  active?: boolean;
  type: 'filter' | 'date';
} & TouchableOpacityProps;

export type TBillingGraphsContext = {
  active: boolean;
  optionSelect: number;
  optionMonth: TSelectOptions;
  handleSetIsActive: (bool: boolean) => void;
  handleSetOptionSelect: (num: number) => void;
  handleSetOptionSelectMonth: (month: TSelectOptions) => void;
};

export type TBillingGraphsModal = {
  refModal: RefObject<BottomSheetModal>;
};

export type TSelectOptions = {
  label: string;
  value: string;
};
