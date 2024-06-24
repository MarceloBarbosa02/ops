import { create } from 'zustand';
import { TInputPhoneContext, TSelectOptions } from './input.types';
import { ddi_phone } from './phone.ddi';

export const useInputPhoneStore = create<TInputPhoneContext>((set) => ({
  optionCountry: ddi_phone[29],
  handleSelectOptionCountry: (item: TSelectOptions) =>
    set({ optionCountry: item }),
}));
