import { ReactNode, createContext, useEffect, useMemo, useState } from "react";
import { MMKV } from "react-native-mmkv";

import { useFetchMe } from "../../modules/SignIn/hooks/useSignIn";
import { useFetchCompanies } from "../hooks/useCompany";
import { useFetchBalances } from "../../modules/Dashboard/hooks";
import { EnumBiometryStatus, EnumStorageSignIn } from "../types/enum";

const storage = new MMKV();

export interface IAlertContext {
  profile: boolean;
  company: boolean;
  biometry: boolean;
  notShowBiometry: boolean;
  availableValue: boolean;
  isShowCardBiometry: boolean;
  handleCloseAlert(): void;
  setIsShowBiometry: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertContext = createContext<IAlertContext>({} as IAlertContext);

interface IProps {
  children: ReactNode;
}

const AlertProvider = ({ children }: IProps) => {
  const { data: userData } = useFetchMe();
  const { data: companies } = useFetchCompanies();
  const { data: balances } = useFetchBalances();
  const [isShowBiometry, setIsShowBiometry] = useState<boolean>(false);
  const [isShowCardBiometry, setIsShowCardBiometry] = useState<boolean>(true);

  const status_storage = storage.getString(
    `${EnumStorageSignIn.BIOMETRY}_${userData?.uuid}`
  );

  const profile = userData?.isUpdated as boolean;

  const biometry = [
    EnumBiometryStatus.PENDING,
    EnumBiometryStatus.REFUSED,
    EnumBiometryStatus.ERROR,
  ].includes(userData?.biometryStatus as any);

  const company = companies?.data.length === 0;

  const status = useMemo(() => {
    return status_storage === "APPROVED";
  }, [status_storage]);

  const availableValue = useMemo(() => {
    return balances?.availableBalance >= 500;
  }, [balances?.availableBalance]);

  const notShowBiometry = useMemo(() => {
    return status && biometry && isShowBiometry;
  }, [status, biometry]);

  const handleCloseAlert = () => {
    setIsShowCardBiometry(false);
  };

  useEffect(() => {
    if (
      balances?.availableBalance >= 500 &&
      userData?.isDocumentUpdated &&
      userData?.isUpdated
    ) {
      setIsShowCardBiometry(true);
    }
  }, [balances, userData]);

  const values = useMemo(
    () => ({
      profile,
      biometry,
      company,
      notShowBiometry,
      availableValue,
      isShowCardBiometry,
      setIsShowBiometry,
      handleCloseAlert,
    }),
    [
      profile,
      biometry,
      company,
      notShowBiometry,
      availableValue,
      isShowCardBiometry,
    ]
  );

  return (
    <AlertContext.Provider value={values}>{children}</AlertContext.Provider>
  );
};

export { AlertProvider };
