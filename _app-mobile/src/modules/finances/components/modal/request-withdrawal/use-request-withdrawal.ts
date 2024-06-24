import { useFormContext } from 'react-hook-form';

import { useFinancesStore } from '@/modules/finances/store/use-finances-store';
import { showToast } from '@/shared/components/toast/use-toast-store';
import { useCreateWithdrawal } from '@/shared/queries/withdrawal/withdrawal';
import { useFinancesHome } from '@/modules/finances/screens/home/use-finances.home';
import { useFetchBalances } from '@/shared';

import {
  IWithdrawalCreate,
  TConfirmWithdrawalProps,
} from './request-withdrawal.types';

export const useRequestWithdrawal = ({
  refActionSheet,
}: TConfirmWithdrawalProps) => {
  const methods = useFormContext();
  const { mutate: mutateWithdrawal, isPending: isPendingWithdrawal } =
    useCreateWithdrawal();
  const { refetch: refetchBalances } = useFetchBalances();
  const { currentCompany } = useFinancesHome();
  const { payload } = useFinancesStore((store) => {
    return {
      payload: store.payload,
    };
  });
  const isDisabled = payload.value < payload.tax;

  const handleClose = () => {
    methods.setValue('value', '0');
    refActionSheet.current?.close();
  };

  const handleRequestWithdrawal = async () => {
    const form: IWithdrawalCreate = {
      tax: currentCompany?.withdrawalTax!,
      value: payload.value,
    };

    mutateWithdrawal(form, {
      onSuccess: ({ data }) => {
        refetchBalances();
        handleClose();
        showToast({
          delay: 5000,
          type: 'success',
          message: 'Saque solicitado com sucesso!',
        });
      },
      onError(error: any) {
        showToast({
          delay: 5000,
          type: 'error',
          message: error?.response?.data?.message ?? 'Ops! Algo deu errado.',
        });
      },
    });
  };

  return {
    payload,
    methods,
    isDisabled,
    isPendingWithdrawal,
    handleClose,
    handleRequestWithdrawal,
  };
};
