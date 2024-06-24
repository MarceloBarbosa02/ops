import {
  useCreateCompany,
  useFetchCompanies,
  useFetchMe,
  useSearchCompanyByDocument,
  useSearchCompanyById,
  useUpdateStatusCompany,
} from '@/shared/queries';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useMemo, useState } from 'react';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { router } from 'expo-router';
import { cleanMask } from 'masks-br';
import { ICompany } from '@/shared/store/company/company.interfaces';
import { EnumCStatus, queryClient, useUpdateCompanies } from '@/shared';
import { useBusinessStore } from '@/modules/business/store/use-business-store';
import { TBusinessList } from './business-list.types';

export const useBusinessList = ({ data }: TBusinessList) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const { mutate: mutateEditCompany, isPending: isPendingEditCompany } =
    useSearchCompanyById();
  const { mutate: mutateStatusCompany, isPending: isPendingStatusCompany } =
    useUpdateStatusCompany();

  const { handleSearchCompany } = useBusinessStore((store) => {
    return {
      handleSearchCompany: store.handleSearchCompany,
    };
  });

  useEffect(() => {
    setIsActive(data?.status === EnumCStatus.ACTIVE ? true : false);
  }, [data]);

  const handleEditCompany = (uuid: string) => {
    mutateEditCompany(uuid, {
      onSuccess: (response: any) => {
        handleSearchCompany(response.data);
        router.push('/(private)/(modais)/edit-business');
      },
      onError(error: any) {
        handleSearchCompany({} as ICompany);
        showToast({
          type: 'error',
          message: error?.response?.data?.message ?? 'Negócio não encontrado.',
        });
      },
    });
  };

  const handleToggleStatus = (status: 'ACTIVE' | 'DISABLED', uuid: string) => {
    const payload = {
      uuid: uuid,
      data: { status: status },
    };

    mutateStatusCompany(payload, {
      onSuccess() {
        setIsActive(true);
        queryClient.invalidateQueries({ queryKey: ['/companies'] });
        showToast({
          type: 'success',
          message: 'Negócio atualizado com sucesso.',
        });
      },
      onError(error: any) {
        setIsActive(false);
        showToast({
          type: 'error',
          message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  return {
    isActive,
    isPendingEditCompany,
    isPendingStatusCompany,
    handleEditCompany,
    handleToggleStatus,
  };
};
