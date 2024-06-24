import { CONVERSION } from '@/shared/constants';
import { api } from '@/shared/services/api';
import { useCompanyStore } from '@/shared/store';
import { useQuery } from '@tanstack/react-query';

export const useConversion = () => {
  const currentCompany = useCompanyStore((store) => store.currentCompany);

  async function fetchConversion() {
    const { data } = await api.get(CONVERSION);
    return data;
  }

  function useFetchConversion() {
    return useQuery({
      queryKey: ['/conversion', currentCompany],
      queryFn: fetchConversion,
    });
  }

  return {
    useFetchConversion,
  };
};
