import { create } from 'zustand';
import { ICompany, ICompanyContext } from './company.interfaces';
import { useFetchCompanies } from '@/shared/queries';

export const useCompanyStore = create<ICompanyContext>((set) => ({
  currentCompany: {} as ICompany,
  setCurrentCompany: (data: ICompany) => {
    set({
      currentCompany: data,
    });
  },
}));
