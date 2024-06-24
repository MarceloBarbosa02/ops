import {
  RefObject,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Modalize } from "react-native-modalize";
import { useNavigation } from "@react-navigation/native";

import { useFetchBalances } from "@modules/Dashboard/hooks/useBalances";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useBiometricNavigation } from "@shared/store/useBiometricNavigation";
import { useCompanyStore } from "@shared/store/useCompanyStore";
import { useFinancesStore } from "@shared/store/useFinancesStore";
import { EnumBiometryStatus } from "@shared/types/enum/EnumBiometricStatus";
import { Keyboard } from "react-native";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormNewWithdrawalsSchema,
  IFormNewWithdrawalsSchema,
} from "./withdrawals.validation";

interface WithdrawalCreateProps {
  refModal: RefObject<Modalize>;
}

const MINIMUM_WITHDRAWAL_VALUE = 500;

export const useWithdrawalCreate = () => {
  const refModal = useRef<Modalize>(null);
  const { navigate } = useNavigation();
  const { data: balances } = useFetchBalances();
  const { data: userData } = useFetchMe();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { handleConfirmValue } = useFinancesStore((store) => {
    return {
      handleConfirmValue: store.handleConfirmValue,
    };
  });
  const { handleChangeNavigation } = useBiometricNavigation((store) => {
    return {
      handleChangeNavigation: store.handleChangeNavigation,
    };
  });
  const methods = useForm<IFormNewWithdrawalsSchema>({
    criteriaMode: "all",
    mode: "onChange",
    resolver: zodResolver(FormNewWithdrawalsSchema),
  });

  const handleNavigation = () => {
    handleChangeNavigation("finance");
    navigate("InfoUserScreen");
  };

  const handleShowModalWithdrawals = () => {
    refModal.current?.open();
  };

  const handleEffectRequest = () => {
    methods.setValue("value", "0");
  };

  const handleShowModalConfirm = (data: IFormNewWithdrawalsSchema) => {
    let intValue = parseInt(String(data.value).replace(/\D/g, ""));
    intValue = !isNaN(intValue) ? intValue : 0;

    Keyboard.dismiss();

    if (intValue > Number(balances?.availableBalance)) {
      methods.setError("value", {
        type: "required",
        message: "Saldo insuficiente.",
      });
      return;
    }

    if (intValue <= currentCompany?.withdrawalTax!) {
      methods.setError("value", {
        type: "required",
        message: "O valor mínimo é de R$ 5,00.",
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
    handleShowModalWithdrawals();
  };

  const isValidIdentity = useMemo(() => {
    return (
      Number(balances?.availableBalance) >= MINIMUM_WITHDRAWAL_VALUE &&
      userData?.isDocumentUpdated &&
      userData?.isUpdated &&
      userData?.biometryStatus !== "APPROVED"
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

  console.log("balances?.availableBalance", balances?.availableBalance);
  console.log("MINIMUM_WITHDRAWAL_VALUE", MINIMUM_WITHDRAWAL_VALUE);

  const isBiometrics = useMemo(() => {
    return userData?.biometryStatus === EnumBiometryStatus.APPROVED;
  }, [userData?.biometryStatus]);

  console.log(!isValuesBalance);

  return {
    methods,
    refModal,
    balances,
    isBiometrics,
    isValuesBalance,
    isValidIdentity,
    handleNavigation,
    handleShowModalConfirm: methods.handleSubmit(handleShowModalConfirm),
  };
};
