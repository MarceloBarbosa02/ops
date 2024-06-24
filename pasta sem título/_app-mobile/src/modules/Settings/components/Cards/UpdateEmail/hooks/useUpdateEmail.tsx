import { useState } from "react";
import { useTimer } from "react-timer-hook";

import {
  useSendContactUpdate,
  useSendUpdateCode,
} from "@modules/Settings/hooks/useProfile";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { showToast } from "@shared/store/useToastStore";
import { EnumContactTypes } from "@shared/types/enum/EnumUser";
import { useUpdateContact } from "@shared/store/useUpdateContact";
import { loadIpv6 } from "@shared/hooks/useRequestGenerics";

export const useUpdateEmail = () => {
  const [isErrorEmail, setIsErroEmail] = useState(false);
  const [codeIsValid, setCodeIsValid] = useState(false);
  const [isLoadingEmail, setIsLoadingEmail] = useState(false);
  const { refetch } = useFetchMe();
  const { mutate } = useSendContactUpdate();
  const { mutate: mutateUpdateCode } = useSendUpdateCode();

  const { uuid, handleChangeCode, handleChangeUUID, handleChangeIsValidation } =
    useUpdateContact((store) => {
      return {
        uuid: store.uuid,
        handleChangeCode: store.handleChangeCode,
        handleChangeUUID: store.handleChangeUUID,
        handleChangeIsValidation: store.handleChangeIsValidationEmail,
      };
    });

  const getSeconds = () => {
    const time = new Date();

    time.setSeconds(time.getSeconds() + 45);

    return time;
  };

  const {
    seconds: secondsEmail,
    restart,
    pause,
  } = useTimer({
    expiryTimestamp: getSeconds(),
    autoStart: true,
  });

  const handleSendCodeEmail = async (email: string) => {
    setIsLoadingEmail(true);
    const ipv6 = await loadIpv6();

    const payload = {
      provider: EnumContactTypes.EMAIL,
      type: "EMAIL" as "EMAIL" | "PHONE",
      value: email,
      requester: ipv6,
    };

    mutate(payload, {
      onSuccess({ data }) {
        restart(getSeconds());
        handleChangeIsValidation(true);
        handleChangeUUID(data?.uuid || "");
        handleChangeCode("");
        setIsErroEmail(false);
        showToast({
          type: "success",
          message: "Código enviado com sucesso!",
        });
        setIsLoadingEmail(false);
      },
      onError(error: any) {
        setIsLoadingEmail(false);
        showToast({
          type: "error",
          message: error.response?.data.message || "Erro ao enviar código",
        });
      },
    });
  };

  const handleVerifyCodeEmail = async (codeEmail: string) => {
    mutateUpdateCode(
      {
        code: codeEmail,
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
          setIsErroEmail(true);
          setTimeout(() => {
            handleChangeCode("");
            setIsErroEmail(false);
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
    isErrorEmail,
    secondsEmail,
    isLoadingEmail,
    codeIsValid,
    handleSendCodeEmail,
    handleVerifyCodeEmail,
  };
};
