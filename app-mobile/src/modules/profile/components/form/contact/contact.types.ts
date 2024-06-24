import { TSelectOptions } from '@/shared/components/input/input.types';

export type TContactProps = 'phone' | 'code' | 'methods';

export type TContactPhoneContext = {
  optionCountry: TSelectOptions;
  phone: string;
  optionSteps: TContactProps;
  handleNavigationCancel: () => void;
  handleSetPhone: (item: string) => void;
  handleSelectOptionSteps: (item: TContactProps) => void;
  handleSelectOptionCountry: (item: TSelectOptions) => void;
};
