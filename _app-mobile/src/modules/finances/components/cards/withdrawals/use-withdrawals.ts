import { useFinancesHome } from '@/modules/finances/screens/home/use-finances.home';
import { useFinancesStore } from '@/modules/finances/store/use-finances-store';
import { EnumBiometryStatus } from '@/shared/enum';
import { useFetchBalances, useFetchMe } from '@/shared/queries';
import { useNavigationStore } from '@/shared/store';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { router } from 'expo-router';
import { useEffect, useMemo, useRef } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormNewWithdrawalsSchema,
  IFormNewWithdrawalsSchema,
} from './withdrawals.validation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Keyboard } from 'react-native';
import { Modalize } from 'react-native-modalize';

const MINIMUM_WITHDRAWAL_VALUE = 500;

export const useWithdrawals = () => {
  const refActionSheet = useRef<Modalize>(null);
  const { data: userData } = useFetchMe();
  const { refetch: refetchBalances, data: balances } = useFetchBalances();
  const { currentCompany } = useFinancesHome();
  const { handleChangeNavigation } = useNavigationStore((store) => {
    return {
      handleChangeNavigation: store.handleChangeNavigation,
    };
  });
  const { value, payload, handleConfirmValue, handleSetValue } =
    useFinancesStore((store) => {
      return {
        value: store.value,
        payload: store.payload,
        handleConfirmValue: store.handleConfirmValue,
        handleSetValue: store.handleSetValue,
      };
    });

  const methods = useForm<IFormNewWithdrawalsSchema>({
    criteriaMode: 'all',
    mode: 'onChange',
    resolver: zodResolver(FormNewWithdrawalsSchema),
  });

  useEffect(() => {
    handleSetValue('0');
    methods.setValue('value', '0');
    refetchBalances();
  }, []);

  const handleNavigation = () => {
    handleChangeNavigation('finance');
    router.push('/(private)/(stack)/biometrics');
  };

  const handleShowModalConfirm = (data: IFormNewWithdrawalsSchema) => {
    let intValue = parseInt(String(data.value).replace(/\D/g, ''));
    intValue = !isNaN(intValue) ? intValue : 0;

    Keyboard.dismiss();

    if (intValue > Number(balances?.availableBalance)) {
      methods.setError('value', {
        type: 'required',
        message: 'Saldo insuficiente',
      });
      return;
    }

    if (intValue <= currentCompany?.withdrawalTax!) {
      methods.setError('value', {
        type: 'required',
        message: 'O valor deve ser maior que a taxa de saque',
      });
      return;
    }

    const payload = {
      document: currentCompany?.document!,
      balance: Number(balances?.availableBalance),
      tax: currentCompany?.withdrawalTax!,
      value: intValue,
    };

    handleConfirmValue(payload);
    refActionSheet.current?.open();
  };

  const isValidIdentity = useMemo(() => {
    return (
      Number(balances?.availableBalance) >= MINIMUM_WITHDRAWAL_VALUE &&
      userData?.isDocumentUpdated &&
      userData?.isUpdated &&
      userData?.biometryStatus !== 'APPROVED'
    );
  }, [
    userData?.isDocumentUpdated,
    userData?.isUpdated,
    userData?.biometryStatus,
    balances?.availableBalance,
  ]);

  const isValuesBalance = useMemo(() => {
    return Number(balances?.availableBalance) >= MINIMUM_WITHDRAWAL_VALUE;
  }, [balances?.availableBalance]);

  const isBiometrics = useMemo(() => {
    return userData?.biometryStatus === EnumBiometryStatus.APPROVED;
  }, [userData?.biometryStatus]);

  return {
    methods,
    balances,
    isBiometrics,
    currentCompany,
    isValidIdentity,
    isValuesBalance,
    refActionSheet,
    handleNavigation,
    handleShowModalConfirm: methods.handleSubmit(handleShowModalConfirm),
  };
};
