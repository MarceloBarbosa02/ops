import { create } from "zustand";
import { TBillingGraphsContext, TSelectOptions } from "./billing-graphs.types";

export const useBillingGraphsStore = create<TBillingGraphsContext>((set) => ({
  active: true,
  optionSelect: 7,
  optionMonth: {} as TSelectOptions,
  handleSetIsActive: (bool: boolean) =>
    set({
      active: bool,
    }),
  handleSetOptionSelect: (num: number) =>
    set({
      optionSelect: num,
    }),
  handleSetOptionSelectMonth: (month: TSelectOptions) =>
    set({
      optionMonth: month,
    }),
}));
