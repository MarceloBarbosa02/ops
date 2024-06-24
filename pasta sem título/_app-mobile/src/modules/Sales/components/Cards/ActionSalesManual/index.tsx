import React from "react";
import { Feather } from "@expo/vector-icons";

import { ButtonDefault } from "@shared/components/Buttons";
import { useFiltersSearch } from "@modules/Sales/hooks/useFiltersSearch";
import { format } from "@shared/utils";

import { useActionSalse } from "./hook/useActionSalse";
import * as S from "./styles";

interface ActionSalesManualProps {
  uuid: string;
  code: string;
  canRefundSale: boolean;
  canApproveSale: boolean;
  subscriptionChargeUuid: string | null;
  onCloseModal(): void;
}

export const ActionSalesManualCard = ({
  uuid,
  code,
  canRefundSale,
  canApproveSale,
  subscriptionChargeUuid,
  onCloseModal,
}: ActionSalesManualProps) => {
  const { useRefundSale } = useFiltersSearch();
  const {
    refundData,
    solicitation,
    isLoadingRefundSale,
    isLoadingApproveSale,
    setSolicitation,
    handleManuallyApprove,
    handleManuallyRefund,
  } = useActionSalse();

  const { isLoading } = useRefundSale();

  return (
    <S.Container>
      {canApproveSale && (
        <S.Wrapper>
          <S.Title>Aprovar manualmente</S.Title>
          <ButtonDefault
            title="Aprovar"
            variant="warning"
            sizeWidth={34}
            icon={<Feather name="check" size={16} color="white" />}
            typeIcon="left"
            onPress={() =>
              handleManuallyApprove(
                { uuid, subscriptionChargeUuid },
                onCloseModal
              )
            }
            isLoading={isLoadingApproveSale}
          />
        </S.Wrapper>
      )}
      {canRefundSale && (
        <S.Wrapper>
          {solicitation === "-" && (
            <>
              <S.Title>Solicitação de estorno</S.Title>
              <ButtonDefault
                title="Estornar"
                variant="danger"
                sizeWidth={34}
                icon={<Feather name="refresh-ccw" size={16} color="white" />}
                typeIcon="left"
                onPress={() => setSolicitation("confirm")}
              />
            </>
          )}

          {solicitation === "confirm" && (
            <S.WrapperCard>
              <S.WrapperInfo>
                <S.Title>Confirmação de solicitação de estorno</S.Title>
                <S.Description>
                  Ao clicar em {'"Confirmar"'} você concorda em estornar a venda
                  #{code}, não sendo possível reverter a ação.
                </S.Description>

                {refundData?.tax && refundData?.value > 0 && (
                  <S.Description>
                    {`Será cobrada uma taxa de ${format.money(
                      refundData?.value
                    )} por essa ação.`}
                  </S.Description>
                )}
              </S.WrapperInfo>
              <S.WrapperFooter>
                <S.WrapperButtons>
                  <S.BtnCancel
                    activeOpacity={0.7}
                    onPress={() => setSolicitation("-")}
                  >
                    <S.BtnTextCancel>Cancelar</S.BtnTextCancel>
                  </S.BtnCancel>
                  <ButtonDefault
                    title="Confirmar"
                    variant="success"
                    sizeWidth={34}
                    icon={
                      <Feather name="check-circle" size={16} color="white" />
                    }
                    typeIcon="left"
                    onPress={() =>
                      handleManuallyRefund(
                        { uuid, subscriptionChargeUuid },
                        onCloseModal
                      )
                    }
                    isLoading={isLoadingRefundSale}
                  />
                </S.WrapperButtons>
              </S.WrapperFooter>
            </S.WrapperCard>
          )}

          {solicitation === "error" && (
            <S.WrapperCard>
              <S.WrapperInfo>
                <S.Title>Houve um problema</S.Title>
                <S.Description>Tente novamente mais tarde.</S.Description>
              </S.WrapperInfo>
              <S.WrapperFooter>
                <ButtonDefault
                  title="Entendi"
                  variant="success"
                  sizeWidth={34}
                  icon={<Feather name="check-circle" size={16} color="white" />}
                  typeIcon="left"
                  onPress={() => setSolicitation("-")}
                />
              </S.WrapperFooter>
            </S.WrapperCard>
          )}
        </S.Wrapper>
      )}
    </S.Container>
  );
};
