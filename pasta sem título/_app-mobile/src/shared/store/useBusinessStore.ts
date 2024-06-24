import { create } from "zustand";

import { ICompany } from "../types/entities";

export enum PersonTypes {
  LEGAL_PERSON = "LEGAL_PERSON",
  PHYSICAL_PERSON = "PHYSICAL_PERSON",
}

export interface IBusinessContext {
  person: PersonTypes | "";
  companyData: ICompany;
  document: string;

  handleChangePerson(person: PersonTypes | ""): void;
  handleSearchCompany(data: ICompany): void;
  handleAddDocument(data: string): void;
}

export const useBusinessStore = create<IBusinessContext>((set) => ({
  person: "",
  companyData: {} as ICompany,
  document: "",
  handleChangePerson: (person: PersonTypes | "") =>
    set({
      person: person,
    }),
  handleSearchCompany: (data: ICompany) =>
    set({
      companyData: data,
    }),
  handleAddDocument: (data: string) =>
    set({
      document: data,
    }),
}));
