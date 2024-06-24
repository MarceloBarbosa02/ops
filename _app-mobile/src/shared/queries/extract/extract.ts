import { TRANSFER, TRANSFER_DETAIL, TRANSFER_EXPORT } from '@/shared/constants';
import { api } from '@/shared/services';
import { useCompanyStore } from '@/shared/store/company';
import { useMutation, useQuery } from '@tanstack/react-query';
import {
  IListTransfersResponse,
  IShowTransferDetailsResponse,
} from './extract.interfaces';
import { formatParams } from './format-params';
import { useFinancesStore } from '@/modules/finances/store/use-finances-store';

export const useExtractFilter = () => {
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { params, uuidDetail } = useFinancesStore((store) => {
    return {
      params: store.params,
      uuidDetail: store.uuidDetail,
    };
  });

  async function fetchExtract(): Promise<IListTransfersResponse> {
    const queryString = formatParams(params);

    const { data } = await api.get(TRANSFER(queryString));
    return data;
  }

  function useFetchExtract() {
    return useQuery({
      queryKey: ['/extract', currentCompany?.uuid, params],
      queryFn: fetchExtract,
      staleTime: Infinity,
      enabled: !!currentCompany?.uuid,
    });
  }

  function useExportTransfers() {
    return useMutation({
      mutationFn: async (queryString: string) => {
        return await api.get(TRANSFER_EXPORT(queryString));
      },
    });
  }

  async function fetchDetail(
    uuid: string
  ): Promise<IShowTransferDetailsResponse> {
    const { data } = await api.get(TRANSFER_DETAIL(uuid));
    return data;
  }

  function useTransfersDetails() {
    return useQuery({
      queryKey: ['/details', uuidDetail],
      queryFn: () => fetchDetail(uuidDetail),
      refetchOnWindowFocus: true,
      enabled: !!uuidDetail,
    });
  }

  return {
    useFetchExtract,
    useExportTransfers,
    useTransfersDetails,
  };
};
