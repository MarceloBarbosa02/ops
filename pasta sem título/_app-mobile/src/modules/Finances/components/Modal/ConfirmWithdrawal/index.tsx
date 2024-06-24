import React, { RefObject } from "react";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { useFormContext } from "react-hook-form";

import { IWithdrawalCreate } from "@shared/types/entities/Withdrawal";
import { format } from "@shared/utils/formatters";
import { useCreateWithdrawal } from "@modules/Finances/hook/useWithdrawals";
import { showToast } from "@shared/store/useToastStore";
import { useCompanyStore } from "@shared/store/useCompanyStore";
import { useFinancesStore } from "@shared/store/useFinancesStore";
import { ButtonMaster } from "@shared/components";
import { InfoIconCard } from "@shared/assets/components/finances";
import { useFetchBalances } from "@modules/Dashboard/hooks";

import * as S from "./styles";
import { TooltipCustom } from "@shared/components/tooltip";
import { View } from "react-native";

interface ConfirmWithdrawalProps {
  refModal: RefObject<Modalize>;
}

export const ConfirmWithdrawalModal = ({
  refModal,
}: ConfirmWithdrawalProps) => {
  const theme = useTheme();
  const methods = useFormContext();
  const {
    mutate: mutateCreateWithdrawal,
    isLoading: isLoadingCreateWithdrawal,
  } = useCreateWithdrawal();
  const { refetch: refetchBalances } = useFetchBalances();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { payload } = useFinancesStore((store) => {
    return {
      payload: store.payload,
    };
  });
  const value = methods.watch("");

  const handleClose = () => {
    methods.setValue("value", "0");
    refModal.current?.close();
  };

  const handleRequestWithdrawal = async () => {
    const form: IWithdrawalCreate = {
      tax: currentCompany?.withdrawalTax!,
      value: payload.value,
    };

    mutateCreateWithdrawal(form, {
      onSuccess: () => {
        methods.setValue("value", "0");
        refetchBalances();
        showToast({
          type: "success",
          message: "Saque solicitado com sucesso!",
        });
        refModal.current?.close();
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  return (
    <Portal>
      <Modalize
        ref={refModal}
        adjustToContentHeight
        modalStyle={{
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: theme.colors.color_neutral_0,
        }}
        overlayStyle={{ overflow: "hidden" }}
        onClosed={() => methods.setValue("value", "0")}
      >
        <S.Wrapper>
          <S.WrapperTitle>
            <S.WrapperHeaderIcon>
              <S.Title>Solicitar saque</S.Title>
              <S.WrapperBtnClose onPress={handleClose}>
                <AntDesign
                  name="close"
                  size={18}
                  color={theme.colors.color_neutral_100}
                />
              </S.WrapperBtnClose>
            </S.WrapperHeaderIcon>
            <S.DescriptionTop>
              Para prosseguir, cheque as informações e confirme-as para realizar
              a solicitação
            </S.DescriptionTop>
          </S.WrapperTitle>

          <S.Container>
            <S.WrapperItems>
              <S.Item>
                <View style={{ flexDirection: "row", gap: -4 }}>
                  <S.ItemLabel>Status do produto</S.ItemLabel>
                  <TooltipCustom
                    title=""
                    endContent
                    description="Por questões de segurança, a chave PIX deve ser o CPF/CNPJ do seu negócio. Não podendo ser alterada."
                    typeWeight="medium"
                  />
                </View>
                <S.ItemValue>{format.cpf(payload.document)}</S.ItemValue>
              </S.Item>
              <S.Item>
                <S.ItemLabel>Valor a sacar</S.ItemLabel>
                <S.ItemValue withdrawal>
                  {format.money(payload?.value)}
                </S.ItemValue>
              </S.Item>
              <S.Item>
                <S.ItemLabel>Taxa</S.ItemLabel>
                <S.ItemValue tx>-{format.money(payload?.tax)}</S.ItemValue>
              </S.Item>
              <S.Item not>
                <S.ItemLabel>Valor a receber</S.ItemLabel>
                <S.ItemValue>
                  {format.money(payload?.value - payload?.tax)}
                </S.ItemValue>
              </S.Item>
            </S.WrapperItems>

            <S.WrapperCard>
              <S.WrapperInfo>
                <InfoIconCard />
              </S.WrapperInfo>
              <S.DescriptionCard>
                A solicitação do saque passará por uma análise de segurança
              </S.DescriptionCard>
            </S.WrapperCard>

            <S.WrapperFooter>
              <ButtonMaster
                sizeWidth={50}
                title="Cancelar"
                type="link"
                variant="secondary"
                onPress={handleClose}
              />
              <ButtonMaster
                sizeWidth={50}
                title="Solicitar saque"
                variant="success"
                onPress={handleRequestWithdrawal}
                positionIcon="left"
                icon={
                  <Octicons
                    name="check"
                    size={24}
                    color={theme.color_buttons.bg_outlined}
                  />
                }
                isLoading={isLoadingCreateWithdrawal}
                disabled={isLoadingCreateWithdrawal}
              />
            </S.WrapperFooter>
          </S.Container>
        </S.Wrapper>
      </Modalize>
    </Portal>
  );
};
