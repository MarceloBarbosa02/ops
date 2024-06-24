import { create } from "zustand";

import { ICompany } from "../types/entities";

export interface ICompanyContext {
  currentCompany: ICompany;
  allCompanies: ICompany[];

  setCurrentCompany(data: ICompany): void;
  setAllCompanies(data: ICompany[]): void;
}

export const useCompanyStore = create<ICompanyContext>((set) => ({
  currentCompany: {} as ICompany,
  allCompanies: [],
  setCurrentCompany: (data: ICompany) =>
    set({
      currentCompany: data,
    }),
  setAllCompanies: (data: ICompany[]) =>
    set({
      allCompanies: data,
    }),
}));
