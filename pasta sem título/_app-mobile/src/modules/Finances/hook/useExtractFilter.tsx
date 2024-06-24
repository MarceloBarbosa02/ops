import { useMutation, useQuery } from "@tanstack/react-query";

import { useCompanyStore, useFinancesStore } from "@shared/store";
import { TRANSFER, TRANSFER_DETAIL, TRANSFER_EXPORT } from "@shared/constants";
import { api } from "@shared/services/api";

import { formatParams } from "../utils/format-params";
import {
  IListTransfersResponse,
  IShowTransferDetailsResponse,
} from "@shared/types/entities/Finance/interface";

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
    return useQuery(["/extract", params], () => fetchExtract(), {
      staleTime: 1000 * 10 * 1, // 10 seconds
      refetchOnWindowFocus: false,
      enabled: !!currentCompany?.uuid,
    });
  }

  function useExportTransfers() {
    return useMutation(async (queryString: string) => {
      return await api.get(TRANSFER_EXPORT(queryString));
    });
  }

  async function fetchDetail(
    uuid: string
  ): Promise<IShowTransferDetailsResponse> {
    const { data } = await api.get(TRANSFER_DETAIL(uuid));
    return data;
  }

  function useTransfersDetails() {
    return useQuery(["/Detail", uuidDetail], () => fetchDetail(uuidDetail), {
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
