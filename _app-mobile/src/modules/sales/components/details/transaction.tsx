import React from 'react';
import { Dimensions, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import * as Clipboard from 'expo-clipboard';

import { showToast } from '@/shared/components/toast/use-toast-store';
import { Button, Typography } from '@/shared/components';
import { EnumPaymentMethod } from '@/shared/enum';
import { format } from '@/shared/utils';
import {
  BankSlipIcon,
  DiamondIcon,
  GenericIcon,
  PIXIcon,
} from '@/shared/assets/components/sales';

import {
  IAffiliate,
  IProducer,
  ITransaction,
  ITransactionsProps,
} from './details.types';
import { saleStatusTitle } from '../cards/receipts-sales/receipts-sales.mock';
import { ItemLineDetails } from './item-line';

import * as S from './details.styles';

const width = Dimensions.get('screen').width;

export const TransactionCard = ({
  transaction,
  affiliate,
  producer,
  coProducers,
  coproductionCommission,
}: ITransactionsProps) => {
  const theme = useTheme();
  const isAffiliate = !!producer;

  const copyToClipboard = async (text: string, msg: string) => {
    await Clipboard.setStringAsync(text);
    showToast({
      type: 'success',
      message: msg,
    });
  };

  return (
    <S.WrapperCustomer>
      <S.WrapperHeaderTransaction>
        <Typography title="Transação" weight="bold" size="large" />
        {saleStatusTitle(transaction?.status)}
      </S.WrapperHeaderTransaction>
      <View style={{ paddingVertical: 8 }}>
        <ItemLineDetails
          type="-"
          title="Método"
          description={
            <View
              style={{
                alignItems: 'center',
                flexDirection: 'row',
                width: '50%',
                gap: 8,
              }}>
              <View>
                {transaction?.paymentMethod === 'CREDIT_CARD' && (
                  <GenericIcon />
                )}
                {transaction?.paymentMethod === 'BANK_SLIP' && <BankSlipIcon />}
                {transaction?.paymentMethod === 'PIX' && <PIXIcon />}
                {transaction?.paymentMethod === 'FREE' && <DiamondIcon />}
              </View>
              <S.Label>
                {EnumPaymentMethod[transaction?.paymentMethod]}
                {transaction?.paymentMethod === 'CREDIT_CARD' && (
                  <> em {transaction?.installmentsAmount}x </>
                )}
              </S.Label>
            </View>
          }
        />
        {transaction?.startedAt && (
          <ItemLineDetails
            type="-"
            title="Início"
            description={format.dateToString(
              new Date(transaction?.startedAt),
              "dd MMM yyyy ' às ' H'h'mm"
            )}
          />
        )}
        {transaction?.finishedAt && (
          <ItemLineDetails
            type="-"
            title="Pagamento"
            description={format.dateToString(
              new Date(transaction?.finishedAt),
              "dd MMM yyyy ' às ' H'h'mm"
            )}
          />
        )}
        {transaction?.status === 'REFUNDED' && (
          <ItemLineDetails
            type="-"
            title="Estorno"
            description={
              transaction?.refundedAt &&
              format.dateToString(
                new Date(transaction?.refundedAt),
                "dd MMM yyyy ' às ' H'h'mm"
              )
            }
          />
        )}
        {!isAffiliate && (
          <ItemLineDetails
            type="-"
            title="SubTotal"
            description={format.money(transaction?.subTotal)}
          />
        )}
        {transaction?.automaticDiscount > 0 && !isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Desconto automático"
            description={`- ${format.money(transaction?.automaticDiscount)}`}
          />
        )}
        {transaction?.discountCoupon > 0 && !isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Cupom de desconto"
            description={`- ${format.money(transaction?.discountCoupon)}`}
          />
        )}

        {['APPROVED', 'PENDING'].includes(transaction?.status) && (
          <>
            {!!(transaction?.percentageTax + transaction?.transactionTax > 0) &&
              !isAffiliate && (
                <ItemLineDetails
                  type="-"
                  title={`Taxas (${
                    (transaction?.percentageTax > 0
                      ? transaction?.percentageTaxLog + '% + '
                      : '') + format.money(transaction?.transactionTax)
                  })`}
                  description={`- ${format.money(
                    transaction?.percentageTax + transaction?.transactionTax
                  )}`}
                />
              )}
            {!!(transaction?.installmentsFreeTax > 0) && !isAffiliate && (
              <ItemLineDetails
                type="-"
                title="Parcelamento sem juros"
                description={`- ${format.money(
                  transaction?.installmentsFreeTax
                )}`}
              />
            )}
          </>
        )}

        {!!affiliate?.comission && (
          <ItemLineDetails
            type="-"
            title="Comissão afiliado"
            description={format.money(affiliate?.comission || 0)}
          />
        )}

        {!!coProducers && !!coproductionCommission && (
          <ItemLineDetails
            type="-"
            title="Comissão do coprodutor"
            description={`- ${format.money(coproductionCommission || 0)}`}
          />
        )}

        <ItemLineDetails
          type="-"
          title={'Minha Comissão'}
          description={format.money(transaction?.comission)}
        />

        {transaction?.paymentMethod === 'BANK_SLIP' && isAffiliate && (
          <>
            <ItemLineDetails
              type="-"
              title="Linha digitável do boleto"
              description={
                <S.WrapperLink>
                  <Typography
                    title={`${format.limitarTamanhoString(
                      transaction?.bankSlipDigitableLine as string,
                      width + 50
                    )}`}
                    colorValue="primary"
                  />
                  <Button
                    variant="outlined"
                    colorValue="primary"
                    onPress={() =>
                      copyToClipboard(
                        transaction?.bankSlipDigitableLine as string,
                        'Linha editável copiada com sucesso'
                      )
                    }
                    startContent={
                      <Feather name="copy" size={16} color={theme.blue[400]} />
                    }
                    style={{ padding: 4, borderWidth: 1 }}
                  />
                </S.WrapperLink>
              }
            />
            <ItemLineDetails
              type="-"
              title="Link do boleto"
              description={
                <S.WrapperLink>
                  <Typography
                    title={`${format.limitarTamanhoString(
                      transaction?.bankSlipLink as string,
                      width + 200
                    )}`}
                    colorValue="primary"
                  />
                  <Button
                    variant="outlined"
                    colorValue="primary"
                    onPress={() =>
                      copyToClipboard(
                        transaction?.bankSlipLink as string,
                        'Link do boleto copiado com sucesso'
                      )
                    }
                    startContent={
                      <Feather name="copy" size={16} color={theme.blue[400]} />
                    }
                    style={{ padding: 4, borderWidth: 1 }}
                  />
                </S.WrapperLink>
              }
            />
          </>
        )}

        {transaction?.thanksPageLink && !isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Página de obrigado"
            description={
              <S.WrapperLink>
                <Typography
                  title={`${format.limitarTamanhoString(
                    transaction?.thanksPageLink,
                    width + 200
                  )}`}
                  colorValue="primary"
                />
                <Button
                  variant="outlined"
                  colorValue="primary"
                  onPress={() =>
                    copyToClipboard(
                      transaction?.thanksPageLink,
                      'Link da pagina copiada com sucesso'
                    )
                  }
                  startContent={
                    <Feather name="copy" size={16} color={theme.blue[400]} />
                  }
                  style={{ padding: 4, borderWidth: 1 }}
                />
              </S.WrapperLink>
            }
          />
        )}
      </View>
    </S.WrapperCustomer>
  );
};
