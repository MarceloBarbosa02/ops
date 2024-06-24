import { useMutation } from "@tanstack/react-query";

import { api } from "@shared/services/api";
import { ICompanyCreate } from "@shared/types";

interface UpdateCompanyRequest {
  uuid: string;
  data: {
    status?: "ACTIVE" | "DISABLED";
    nickname?: string | null;
  };
}

export function useSearchCompanyByDocument() {
  return useMutation((document: string) => {
    return api.get(`/companies/check/${document}`);
  });
}

export function useCreateCompany() {
  return useMutation(async (company: ICompanyCreate) => {
    return await api.post("/companies", company);
  });
}

export function useUpdateStatusCompany() {
  return useMutation(({ uuid, data }: UpdateCompanyRequest) => {
    return api.put(`/companies/${uuid}`, data);
  });
}

export function useUpdateNicknameCompany() {
  return useMutation(({ uuid, data }: UpdateCompanyRequest) => {
    return api.put(`/companies/${uuid}`, data);
  });
}

export function useSearchCompanyById() {
  return useMutation((companyUuid: string) => {
    return api.get(`/companies/${companyUuid}`);
  });
}
