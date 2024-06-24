import { useMutation, useQuery } from '@tanstack/react-query';

import {
  COMPANIES,
  COMPANIES_CHECK,
  COMPANIES_LIST,
  COMPANIES_STATUS,
  USER_TOGGLE_COMPANIES,
  // COMPANIES_CHECK,
  // COMPANIES_EDIT,
  // COMPANIES_STATUS,
  // USER_TOGGLE_COMPANIES,
} from '@/shared/constants';

import {
  ICompanyCreateRequest,
  ICompanyResponse,
  IUpdateCompanyRequest,
} from './companies.interfaces';
import { EnumStorageSignIn } from '@/shared/enum';
import { useAuthStore } from '@/shared/store';
import { api } from '@/shared/services/api';

async function fetchCompanies(): Promise<ICompanyResponse> {
  const { data } = await api.get(COMPANIES_LIST);

  return data;
}

export function useFetchCompanies() {
  const token = useAuthStore((store) => store.token);

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

// export function useSearchCompanyById() {
//   return useMutation({
//     mutationFn: (companyUuid: string) => {
//       return api.get(COMPANIES_EDIT(companyUuid));
//     },
//   });
// }

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
