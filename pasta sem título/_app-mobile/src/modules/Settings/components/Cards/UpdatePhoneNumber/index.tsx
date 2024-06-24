import React, { useEffect, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { View } from "react-native";

import { formatPhoneDDI } from "@shared/utils/formatters";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useCurrentUserStore } from "@shared/store/useCurrentUserStore";
import { useUpdateContact } from "@shared/store/useUpdateContact";

import { ValidationCode } from "../../Items/ValidationCode";
import { WaitingConfirmation } from "../WaitingConfirmation";
import { DropDDIModal } from "../../Modal/DropDDI";
import { InputUpdatePhone } from "../../Inputs/InputUpdatePhone";
import * as S from "./styles";

export function UpdatePhoneNumber() {
  const theme = useTheme();
  const [codeIsValid, setCodeIsValid] = useState(false);
  const { data: userData, refetch } = useFetchMe();
  const { showModalDDI } = useCurrentUserStore((store) => {
    return {
      showModalDDI: store.showModalDDI,
    };
  });
  const {
    isOpen,
    phoneNumber,
    isValidation,
    handleChangeIsOpen,
    handleChangePhoneNumber,
    handleChangeIsValidation,
  } = useUpdateContact((store) => {
    return {
      isOpen: store.isOpen,
      isValidation: store.isValidation,
      phoneNumber: store.phoneNumber,
      handleChangeIsOpen: store.handleChangeIsOpen,
      handleChangePhoneNumber: store.handleChangePhoneNumber,
      handleChangeIsValidation: store.handleChangeIsValidation,
    };
  });

  useEffect(() => {
    refetch();
    handleChangeIsOpen(false);
    handleChangeIsValidation(false);
  }, []);

  const handleUpdateBack = () => {
    handleChangeIsOpen(false);
    handleChangeIsValidation(false);
    handleChangePhoneNumber(userData?.phoneNumber ?? "");
  };

  const handleCleanInput = () => {
    handleChangeIsOpen(true);
    handleChangePhoneNumber("");
  };

  const updateStatus = useMemo(() => {
    return userData?.requestUpdateContact?.find(
      (obj: any) => obj.type === "PHONE"
    );
  }, [userData]);

  const isValidationUpdate = useMemo(() => {
    return !isOpen && !updateStatus;
  }, [isOpen, updateStatus]);

  return (
    <S.Container>
      <View style={{ width: "100%", flexDirection: "row" }}>
        <S.Content widthSize={isOpen || !isValidationUpdate ? 100 : 80}>
          {updateStatus ? (
            <WaitingConfirmation type="PHONE" />
          ) : (
            <>
              {!codeIsValid && (
                <>
                  <S.WrapperHeader>
                    <S.Label>
                      {isOpen ? "Atualizar telefone" : "Telefone"}
                    </S.Label>
                    {isOpen && (
                      <S.BtnClose onPress={handleUpdateBack}>
                        <AntDesign
                          name="close"
                          size={20}
                          color={theme.colors.color_neutral_100}
                        />
                      </S.BtnClose>
                    )}
                  </S.WrapperHeader>
                  <S.ChangeContactText>
                    {isOpen &&
                      !isValidation &&
                      "Insira seu novo número de telefone para validação."}

                    {!isOpen &&
                      !isValidation &&
                      ` Atual: ${
                        phoneNumber
                          ? formatPhoneDDI(phoneNumber || "")
                          : "Não informado"
                      }`}
                  </S.ChangeContactText>

                  {isOpen && !isValidation && <InputUpdatePhone />}
                  {isValidation && <ValidationCode type="PHONE" />}
                </>
              )}
            </>
          )}
        </S.Content>
        {isValidationUpdate && (
          <S.ContactButton onPress={handleCleanInput}>
            <S.ContactButtonText>Atualizar</S.ContactButtonText>
          </S.ContactButton>
        )}
      </View>
      <DropDDIModal isShow={showModalDDI} />
    </S.Container>
  );
}
