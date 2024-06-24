import { useState } from 'react';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { useFiltersRequestSales } from '@/shared/queries/sales/sales';
import { IUseApproveFakeSaleRequestProps } from '@/shared/queries/sales/sales.interfaces';

export const useActionSalse = () => {
  const [solicitation, setSolicitation] = useState('-');
  const {
    useApproveSale,
    useRefundSale,
    useFetchSalesList,
    useFetchSalesTotals,
  } = useFiltersRequestSales();
  const { mutate: refundSale, isPending: isLoadingRefundSale } =
    useRefundSale();
  const { mutate: approveSale, isPending: isLoadingApproveSale } =
    useApproveSale();
  const { refetch: refetchSales } = useFetchSalesTotals();
  const { refetch: refetchList } = useFetchSalesList();

  const handleManuallyRefund = (
    data: IUseApproveFakeSaleRequestProps,
    onCloseModal: () => void
  ) => {
    refundSale(data, {
      onSuccess: (response) => {
        showToast({ type: 'success', message: response.data.message });
        refetchSales();
        refetchList();
        setSolicitation('-');
        onCloseModal();
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message:
            error.response?.data?.message ?? 'Tente novamente mais tarde!',
        });
        setSolicitation('error');
      },
    });
  };

  const handleManuallyApprove = (
    data: IUseApproveFakeSaleRequestProps,
    onCloseModal: () => void
  ) => {
    approveSale(data, {
      onSuccess: (response) => {
        showToast({ type: 'success', message: response.data.message });
        refetchSales();
        refetchList();
        onCloseModal();
      },
      onError(error: any) {
        showToast({
          type: 'error',
          message:
            error.response?.data?.message ?? 'Tente novamente mais tarde!',
        });
      },
    });
  };

  return {
    solicitation,
    isLoadingRefundSale,
    isLoadingApproveSale,
    setSolicitation,
    handleManuallyRefund,
    handleManuallyApprove,
  };
};
