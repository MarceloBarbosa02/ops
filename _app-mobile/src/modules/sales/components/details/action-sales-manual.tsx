import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Button, Typography } from '@/shared/components';

import { useActionSalse } from './use-action-salse';
import { IActionSalesManualProps } from './details.types';

import * as S from './details.styles';

export const ActionSalesManualCard = ({
  uuid,
  code,
  canRefundSale,
  canApproveSale,
  subscriptionChargeUuid,
  onCloseModal,
}: IActionSalesManualProps) => {
  const {
    solicitation,
    isLoadingRefundSale,
    isLoadingApproveSale,
    setSolicitation,
    handleManuallyApprove,
    handleManuallyRefund,
  } = useActionSalse();

  return (
    <S.Container>
      {canApproveSale && (
        <S.WrapperAction>
          <Typography title="Aprovar manualmente" weight="bold" size="large" />
          <Button
            title="Aprovar"
            colorValue="warning"
            sizeWidth={34}
            startContent={<Feather name="check" size={16} color="white" />}
            onPress={() =>
              handleManuallyApprove(
                { uuid, subscriptionChargeUuid },
                onCloseModal
              )
            }
            size="medium"
            isLoading={isLoadingApproveSale}
          />
        </S.WrapperAction>
      )}

      {canRefundSale && (
        <S.WrapperAction>
          {solicitation === '-' && (
            <>
              <Typography
                title="Solicitação de estorno"
                weight="bold"
                size="large"
              />
              <Button
                title="Estornar"
                colorValue="danger"
                sizeWidth={34}
                startContent={
                  <Feather name="refresh-ccw" size={16} color="white" />
                }
                onPress={() => setSolicitation('confirm')}
                size="small"
                isLoading={isLoadingRefundSale}
              />
            </>
          )}

          {solicitation === 'confirm' && (
            <S.WrapperCard>
              <S.WrapperInfoCard>
                <Typography
                  title="Confirmação de solicitação de estorno"
                  weight="bold"
                  size="large"
                />
                <Typography
                  title={`Ao clicar em ${'"Confirmar"'} você concorda em estornar a venda #${code}, não sendo possível reverter a ação.`}
                  size="small"
                />
              </S.WrapperInfoCard>
              <S.WrapperFooter>
                <S.WrapperButtons>
                  <Button
                    onPress={() => setSolicitation('-')}
                    colorValue="secondary"
                    variant="link"
                    title="Cancelar"
                    size="small"
                  />
                  <Button
                    title="Confirmar"
                    colorValue="success"
                    sizeWidth={34}
                    startContent={
                      <Feather name="check-circle" size={16} color="white" />
                    }
                    onPress={() =>
                      handleManuallyRefund(
                        { uuid, subscriptionChargeUuid },
                        onCloseModal
                      )
                    }
                    size="small"
                    isLoading={isLoadingRefundSale}
                  />
                </S.WrapperButtons>
              </S.WrapperFooter>
            </S.WrapperCard>
          )}

          {solicitation === 'error' && (
            <S.WrapperCard>
              <S.WrapperInfoCard>
                <Typography title="Houve um problema" />
                <Typography title="Tente novamente mais tarde." />
              </S.WrapperInfoCard>
              <S.WrapperFooter>
                <Button
                  title="Entendi"
                  colorValue="success"
                  sizeWidth={34}
                  startContent={
                    <Feather name="check-circle" size={16} color="white" />
                  }
                  size="small"
                  onPress={() => setSolicitation('-')}
                />
              </S.WrapperFooter>
            </S.WrapperCard>
          )}
        </S.WrapperAction>
      )}
    </S.Container>
  );
};
