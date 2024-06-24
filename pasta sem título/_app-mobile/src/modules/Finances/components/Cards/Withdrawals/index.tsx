import React from "react";
import { FormProvider } from "react-hook-form";

import Finances from "@shared/assets/icons/svg/finance/dollar.svg";
import { ButtonMaster } from "@shared/components/Buttons/ButtonMaster";
import { Input } from "@shared/components/input";

import { ConfirmWithdrawalModal } from "../../Modal";

import { VerifyIdentity } from "../VerifyIdentity";
import { useWithdrawalCreate } from "./hook/useWithdrawalCreate";
import * as S from "./styles";

export const WithdrawalsCards = () => {
  const {
    methods,
    refModal,
    balances,
    isBiometrics,
    isValidIdentity,
    isValuesBalance,
    handleNavigation,
    handleShowModalConfirm,
  } = useWithdrawalCreate();

  return (
    <S.Wrapper>
      <FormProvider {...methods}>
        <S.WrapperHeader>
          <S.Title>Solicitação de saque</S.Title>
        </S.WrapperHeader>

        {isValidIdentity ? (
          <VerifyIdentity />
        ) : (
          <S.Content>
            {isBiometrics ? (
              <>
                {isValuesBalance ? (
                  <S.Description>
                    Insira o valor para receber via chave PIX do seu negócio
                  </S.Description>
                ) : (
                  <S.Description>
                    O saldo disponível na conta é insuficiente para solicitar um
                    saque. Valor mínimo de R$ 5,00.
                  </S.Description>
                )}
              </>
            ) : isValuesBalance ? (
              <S.Description>
                A verificação de identidade é necessária para solicitar um
                saque.
              </S.Description>
            ) : (
              <S.Description>
                Para solicitar um saque, é necessário o valor mínimo de R$ 5,00
                e verificar sua identidade.
              </S.Description>
            )}

            <Input
              control={methods.control}
              name="value"
              label="Valor"
              placeholder="R$ 0,00"
              maxLength={18}
              keyboardType="numeric"
              labelPlacement="inside"
              mask
              type="money"
              options={{
                precision: 2,
                separator: ",",
                delimiter: ".",
                unit: "R$",
                suffixUnit: "",
              }}
              errorMessage={methods.formState.errors.value?.message}
              isDisabled={!isBiometrics}
            />

            {isValuesBalance && !isBiometrics ? (
              <ButtonMaster
                title="Verificar identidade"
                variant="primary"
                onPress={handleNavigation}
              />
            ) : (
              <ButtonMaster
                title="Solicitar saque"
                variant="primary"
                icon={<Finances width={24} height={24} />}
                positionIcon="left"
                onPress={handleShowModalConfirm}
                disabled={!isBiometrics}
              />
            )}
          </S.Content>
        )}
        <ConfirmWithdrawalModal refModal={refModal} />
      </FormProvider>
    </S.Wrapper>
  );
};
