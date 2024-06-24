import React, { useEffect, useMemo, useState } from "react";

import AlertIcon from "@shared/assets/icons/svg/editionProfile/alert.svg";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";

import * as S from "./styles";

interface IWaitingConfirmation {
  oldEmail?: string;
  type: "PHONE" | "EMAIL";
}

export const WaitingConfirmation = ({
  type,
  oldEmail,
}: IWaitingConfirmation) => {
  const { data: userData } = useFetchMe();
  const [countdown, setCountdown] = useState("");
  const [updateStatus, setUpdateStatus] = useState(
    userData?.requestUpdateContact?.find((obj: any) => obj.type === type)
  );

  const updateCountdown = () => {
    const timeRemaining =
      ((updateStatus?.expireDate &&
        Math.floor(
          (new Date(updateStatus?.expireDate).getTime() -
            new Date().getTime()) /
            1000
        )) ||
        3600 * 24) - 1;
    const hours = Math.floor(timeRemaining / 3600);
    const minutes = Math.floor((timeRemaining % 3600) / 60);
    setCountdown(`${hours} horas e ${minutes} minutos`);
  };

  useEffect(() => {
    updateCountdown();
    const timer = setInterval(() => {
      updateCountdown();
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  const emailFormat = useMemo(() => {
    const first = oldEmail?.charAt(0);
    const second = oldEmail?.split("@")[1];
    return `${first}****${second}`;
  }, [oldEmail]);

  return (
    <>
      <S.Label>
        Seu {type == "PHONE" ? "telefone" : "email"} está prestes a ser alterado{" "}
      </S.Label>
      <S.ChangeContactText>
        Para terminar esta validação, enviamos um link com validade de{" "}
        <S.ChangeContactTextBold>{countdown}</S.ChangeContactTextBold> para seu{" "}
        {type == "PHONE" ? (
          "e-mail atual"
        ) : (
          <>
            para seu email antigo:{" "}
            <S.ChangeContactTextBold>{emailFormat}</S.ChangeContactTextBold>
          </>
        )}{" "}
        .
      </S.ChangeContactText>

      <S.AlertContainer>
        <AlertIcon width={16} height={16} />
        <S.ChangeContactTexRegular>
          Caso não encontre na sua caixa de entrada, verifique sua caixa de spam
          ou lixo eletrônico.Para sua segurança, não compartilhe com terceiros.
        </S.ChangeContactTexRegular>
      </S.AlertContainer>
    </>
  );
};
