import { useQuery } from "@tanstack/react-query";
import { api } from "@shared/services/api";
import { useCompanyStore } from "@shared/store";
import { EnumStorageSignIn, ICompany, ICompanyResponse } from "@shared/types";
import { COMPANIES } from "@shared/constants";
import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

async function fetchCompanies(): Promise<ICompanyResponse> {
  const { data } = await api.get(COMPANIES);
  return data;
}

export function useFetchCompanies() {
  const _token = storage.getString(EnumStorageSignIn.ACCESS);
  const { setAllCompanies, setCurrentCompany } = useCompanyStore((store) => {
    return {
      setAllCompanies: store.setAllCompanies,
      setCurrentCompany: store.setCurrentCompany,
    };
  });

  return useQuery(["/companies"], () => fetchCompanies(), {
    enabled: !!_token,
    staleTime: 1000 * 60 * 5,
    onSuccess: ({ data }) => {
      setAllCompanies(data);
      setCurrentCompany(
        data.filter((company: ICompany) => company?.isDefault)[0]
      );
    },
  });
}
