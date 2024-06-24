import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { queryClient } from "@shared/services/queryClient";
import { showToast } from "@shared/store/useToastStore";
import { IUseApproveFakeSaleProps } from "@shared/types/entities/Sales";
import { useState } from "react";

export const useActionSalse = () => {
  const [solicitation, setSolicitation] = useState("-");
  const {
    useApproveSale,
    useRefundSale,
    useFetchSalesList,
    useFetchSalesTotals,
    useFetchSalesRefundTax,
  } = useFiltersSearch();
  const { mutate: refundSale, isLoading: isLoadingRefundSale } =
    useRefundSale();
  const { mutate: approveSale, isLoading: isLoadingApproveSale } =
    useApproveSale();
  const { refetch: refetchSales } = useFetchSalesTotals();
  const { refetch: refetchList } = useFetchSalesList();
  const { data: refundData } = useFetchSalesRefundTax();

  const handleManuallyRefund = (
    data: IUseApproveFakeSaleProps,
    onCloseModal: () => void
  ) => {
    refundSale(data, {
      onSuccess: (response) => {
        showToast({ type: "success", message: response.data.message });
        refetchSales();
        refetchList();
        setSolicitation("-");
        onCloseModal();
      },
      onError(error: any) {
        showToast({
          type: "error",
          message:
            error.response?.data?.message ?? "Tente novamente mais tarde!",
        });
        setSolicitation("error");
      },
    });
  };

  const handleManuallyApprove = (
    data: IUseApproveFakeSaleProps,
    onCloseModal: () => void
  ) => {
    const payload = {
      uuid: data.uuid,
      subscriptionChargeUuid: data.subscriptionChargeUuid,
    };

    approveSale(payload, {
      onSuccess: (response) => {
        showToast({ type: "success", message: response.data.message });
        refetchSales();
        refetchList();
        onCloseModal();
      },
      onError(error: any) {
        showToast({
          type: "error",
          message:
            error.response?.data?.message ?? "Tente novamente mais tarde!",
        });
      },
    });
  };

  return {
    refundData,
    solicitation,
    isLoadingRefundSale,
    isLoadingApproveSale,
    setSolicitation,
    handleManuallyRefund,
    handleManuallyApprove,
  };
};
