import { create } from 'zustand';
import { TSelectOptions } from '@/shared/components/select/select.types';
import { TInputPhoneContext } from './input.types';
import { ddi_phone } from '@/modules/auth/screens/sign-up/phone.ddi';

export const useInputPhoneStore = create<TInputPhoneContext>((set) => ({
  optionCountry: ddi_phone[29],
  handleSelectOptionCountry: (item: TSelectOptions) =>
    set({ optionCountry: item }),
}));
