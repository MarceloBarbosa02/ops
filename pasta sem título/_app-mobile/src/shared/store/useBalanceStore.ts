import { create } from "zustand";

import { ICompanyBalances } from "../types/entities";

export interface IBalanceContext {
  balances: ICompanyBalances;
  handleBalanceData(data: ICompanyBalances): void;
}

export const useBalanceStore = create<IBalanceContext>((set) => ({
  balances: {} as ICompanyBalances,
  handleBalanceData: (data: ICompanyBalances) =>
    set({
      balances: data,
    }),
}));
