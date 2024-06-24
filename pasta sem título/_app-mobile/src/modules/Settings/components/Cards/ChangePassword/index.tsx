import React, { useRef, useState } from "react";

import * as S from "./styles";
import { ChangePasswordModal } from "../../Modal/ChangePassword";
import { Modalize } from "react-native-modalize";

export const ChangePasswordCard = () => {
  const modalChangePasswordRef = useRef<Modalize>(null);
  const [isNewPassword, setIsNewPassword] = useState(false);

  const handleShowModalPassword = () => {
    modalChangePasswordRef.current?.open();
    setIsNewPassword(true);
  };

  return (
    <S.Wrapper>
      <S.Title>Segurança</S.Title>

      <S.Description>
        Se você redefinir sua senha, sairá de todas as sessões da Kirvano ativas
        em outros dispositivos.
      </S.Description>
      <S.ButtonPassword onPress={handleShowModalPassword}>
        <S.TitleButton>Redefinir senha</S.TitleButton>
      </S.ButtonPassword>
      <ChangePasswordModal
        refModal={modalChangePasswordRef}
        isNewPassword={isNewPassword}
        setIsNewPassword={setIsNewPassword}
      />
    </S.Wrapper>
  );
};
