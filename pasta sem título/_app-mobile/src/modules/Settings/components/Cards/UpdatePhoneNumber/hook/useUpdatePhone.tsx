import { cleanMask } from "masks-br";
import { useState } from "react";
import { useTimer } from "react-timer-hook";

import {
  useSendContactUpdate,
  useSendUpdateCode,
} from "@modules/Settings/hooks/useProfile";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { showToast } from "@shared/store/useToastStore";
import { EnumContactTypes } from "@shared/types/enum/EnumUser";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { useUpdateContact } from "@shared/store/useUpdateContact";
import { loadIpv6 } from "@shared/hooks/useRequestGenerics";

export const useUpdatePhone = () => {
  const { refetch } = useFetchMe();
  const { mutate: mutateSendContact } = useSendContactUpdate();
  const { mutate: mutateUpdateCode } = useSendUpdateCode();
  const [isError, setIsError] = useState(false);
  const [codeIsValid, setCodeIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { selectedDDI } = useCurrentUserStore((store) => {
    return {
      selectedDDI: store.selectedDDI,
    };
  });
  const { uuid, handleChangeCode, handleChangeUUID, handleChangeIsValidation } =
    useUpdateContact((store) => {
      return {
        uuid: store.uuid,
        handleChangeCode: store.handleChangeCode,
        handleChangeUUID: store.handleChangeUUID,
        handleChangeIsValidation: store.handleChangeIsValidation,
      };
    });

  const getSeconds = () => {
    const time = new Date();

    time.setSeconds(time.getSeconds() + 45);

    return time;
  };

  const { seconds, restart, pause } = useTimer({
    expiryTimestamp: getSeconds(),
    autoStart: true,
  });

  const handleSendCode = async (phone: string) => {
    setIsLoading(true);
    const ipv6 = await loadIpv6();

    const payload = {
      provider: EnumContactTypes.SMS,
      type: "PHONE" as "EMAIL" | "PHONE",
      value: `${selectedDDI.dialCode}${cleanMask(phone)}`,
      requester: ipv6,
    };

    mutateSendContact(payload, {
      onSuccess({ data }) {
        restart(getSeconds());
        handleChangeIsValidation(true);
        handleChangeUUID(data?.uuid);
        handleChangeCode("");
        setIsError(false);
        showToast({
          type: "success",
          message: "Código enviado com sucesso!",
        });
        setIsLoading(false);
      },
      onError(error: any) {
        setIsLoading(false);
        showToast({
          type: "error",
          message: error.response?.data.message || "Erro ao enviar código",
        });
      },
    });
  };

  const handleVerifyCode = async (code: string) => {
    mutateUpdateCode(
      {
        code: code,
        uuid: uuid,
      },
      {
        onSuccess() {
          setCodeIsValid(true);
          showToast({
            type: "success",
            message: "Código validado com sucesso!",
          });
          refetch();
          pause();
        },
        onError(error: any) {
          setIsError(true);
          setTimeout(() => {
            handleChangeCode("");
            setIsError(false);
          }, 500);
          showToast({
            type: "error",
            message: error.response?.data.message || "Código incorreto",
          });
        },
      }
    );
  };

  return {
    isError,
    seconds,
    isLoading,
    codeIsValid,
    handleSendCode,
    handleVerifyCode,
  };
};
