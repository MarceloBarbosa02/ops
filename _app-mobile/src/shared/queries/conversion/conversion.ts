import { CONVERSION } from '@/shared/constants';
import { api } from '@/shared/services/api';
import { useAuthStore, useCompanyStore } from '@/shared/store';
import { useQuery } from '@tanstack/react-query';

export const useConversion = () => {
  const { token } = useAuthStore((store) => {
    return {
      token: store.token,
    };
  });
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });

  async function fetchConversion() {
    const { data } = await api.get(CONVERSION);
    return data;
  }

  function useFetchConversion() {
    return useQuery({
      queryKey: ['/conversion', currentCompany],
      queryFn: fetchConversion,
      enabled: !!token,
      staleTime: Infinity,
    });
  }

  return {
    useFetchConversion,
  };
};
