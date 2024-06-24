import { create } from 'zustand';

import { PersonTypes, TBusinessContext } from './use-business.types';
import { ICompany } from '@/shared/store/company/company.interfaces';

export const useBusinessStore = create<TBusinessContext>((set) => ({
  person: '',
  companyData: {} as ICompany,
  document: '',
  step: '',
  handleChangePerson: (person: PersonTypes | '') =>
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
  handleSetStep: (data: string) =>
    set({
      step: data,
    }),
}));
