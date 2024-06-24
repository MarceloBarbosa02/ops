import { useMutation, useQuery } from '@tanstack/react-query';

import {
  COMPANIES,
  COMPANIES_CHECK,
  COMPANIES_EDIT,
  COMPANIES_LIST,
  COMPANIES_STATUS,
  USER_TOGGLE_COMPANIES,
} from '@/shared/constants';
import { api } from '@/shared/services';

import {
  ICompanyCreateRequest,
  ICompanyResponse,
  IUpdateCompanyRequest,
} from './companies.interfaces';
import { zustandStorage } from '@/shared/utils';
import { EnumStorageSignIn } from '@/shared/enum';

async function fetchCompanies(): Promise<ICompanyResponse> {
  const { data } = await api.get(COMPANIES_LIST);

  return data;
}

export function useFetchCompanies() {
  const token = zustandStorage.getItem(EnumStorageSignIn.ACCESS);

  return useQuery({
    queryKey: ['/companies', token],
    queryFn: fetchCompanies,
    enabled: !!token,
    staleTime: Infinity,
  });
}

export function useCreateCompany() {
  return useMutation({
    mutationFn: async (company: ICompanyCreateRequest) => {
      return await api.post(COMPANIES, company);
    },
  });
}

export function useSearchCompanyByDocument() {
  return useMutation({
    mutationFn: (document: string) => {
      return api.get(COMPANIES_CHECK(document));
    },
  });
}

export function useSearchCompanyById() {
  return useMutation({
    mutationFn: (companyUuid: string) => {
      return api.get(COMPANIES_EDIT(companyUuid));
    },
  });
}

export function useUpdateCompanies() {
  return useMutation({
    mutationFn: (companyUuid: string) => {
      return api.put(USER_TOGGLE_COMPANIES, { companyUuid });
    },
  });
}

export function useUpdateStatusCompany() {
  return useMutation({
    mutationFn: ({ uuid, data }: IUpdateCompanyRequest) => {
      return api.put(COMPANIES_STATUS(uuid), data);
    },
  });
}

export function useUpdateNicknameCompany() {
  return useMutation({
    mutationFn: ({ uuid, data }: IUpdateCompanyRequest) => {
      return api.put(COMPANIES_STATUS(uuid), data);
    },
  });
}
