import { create } from 'zustand';

import { TSelectOptions } from '@/shared/components/input/input.types';
import { ddi_phone } from '@/shared/components/input/phone.ddi';

import { TContactPhoneContext } from './contact.types';

export const useContactConfigureStore = create<TContactPhoneContext>((set) => ({
  optionCountry: ddi_phone[29],
  phone: '',
  optionSteps: 'phone',
  handleNavigationCancel: () => {},
  handleSetPhone: (item: string) => set({ phone: item }),
  handleSelectOptionSteps: (item) => set({ optionSteps: item }),
  handleSelectOptionCountry: (item: TSelectOptions) =>
    set({ optionCountry: item }),
}));
