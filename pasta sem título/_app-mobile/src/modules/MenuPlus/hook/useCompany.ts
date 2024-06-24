import { api } from "@shared/services/api";
import { useMutation } from "@tanstack/react-query";

export function useUpdateCompanies() {
  return useMutation((companyUuid: string) => {
    return api.put("/users/company-default", { companyUuid });
  });
}
