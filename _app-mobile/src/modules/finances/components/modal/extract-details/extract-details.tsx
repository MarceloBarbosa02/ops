import { ScrollView } from 'react-native';
import { useTheme } from 'styled-components/native';

import { useExtractFilter } from '@/shared/queries';
import { ActionSheet, Typography } from '@/shared/components';
import { format } from '@/shared/utils';

import { SKDetails } from '../../skeleton';
import { ItemLine } from '../../cards/receipts-extract/receipts-extract-item';
import { TExtractDetailsProps } from './extract-details.types';
import { ProductsDetails } from '../../cards/products-details';
import { useReceipts } from '../../cards/receipts-extract/use-receipts';

import * as S from './extract-details.styles';
import { Portal } from 'react-native-portalize';
import { Modalize } from 'react-native-modalize';
import { AntDesign } from '@expo/vector-icons';

const ExtractDetailsModal = ({ refActionSheet }: TExtractDetailsProps) => {
  const theme = useTheme();
  const { useTransfersDetails } = useExtractFilter();
  const { data: itemDetail, isFetching } = useTransfersDetails();
  const isWithdrawal = itemDetail?.category === 'WITHDRAWAL';

  const { validCategory, isStatusWithdrawal, validType } = useReceipts(
    !itemDetail?.isCanceled,
    itemDetail?.isCanceled as boolean,
    false
  );

  const handleClose = () => {
    refActionSheet.current?.close();
  };

  return (
    <Portal>
      <Modalize
        ref={refActionSheet}
        adjustToContentHeight
        modalStyle={{
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: theme.gray[50],
        }}
        overlayStyle={{ overflow: 'hidden' }}
        onClosed={() => {}}>
        <S.WrapperTitle>
          <S.WrapperHeaderIcon>
            <Typography title="Detalhes" weight="bold" />
            <S.WrapperBtnClose onPress={handleClose}>
              <AntDesign name="close" size={18} color={theme.gray[900]} />
            </S.WrapperBtnClose>
          </S.WrapperHeaderIcon>
          <S.DescriptionCard>
            Visualize informações relacionadas ao extrato
          </S.DescriptionCard>
        </S.WrapperTitle>
        <ScrollView>
          <S.Container>
            {isFetching ? (
              <SKDetails />
            ) : (
              <>
                {itemDetail && (
                  <>
                    {itemDetail?.products.length > 0 ? (
                      <S.WrapperProducts>
                        <S.WrapperProductsHeader>
                          <Typography title="Produtos" weight="bold" />
                          <Typography
                            title={`(${itemDetail?.products.length})`}
                          />
                        </S.WrapperProductsHeader>
                        {itemDetail?.products.map((product) => (
                          <ProductsDetails key={product.uuid} data={product} />
                        ))}
                      </S.WrapperProducts>
                    ) : null}
                    <S.WrapperItems>
                      {itemDetail?.code && (
                        <ItemLine
                          label={`Código ${
                            isWithdrawal ? ' do saque' : 'da venda'
                          }`}
                          title={itemDetail?.code}
                          isCopy
                        />
                      )}

                      {itemDetail?.title && (
                        <ItemLine
                          label="Descrição"
                          title={itemDetail?.title}
                          description={itemDetail?.description}
                        />
                      )}

                      {isWithdrawal ? (
                        <ItemLine
                          label="Categoria"
                          title={isStatusWithdrawal(
                            itemDetail?.withdrawal?.status
                          )}
                        />
                      ) : (
                        <ItemLine
                          label="Categoria"
                          title={validCategory(itemDetail?.category)}
                        />
                      )}

                      {itemDetail?.createdAt && (
                        <ItemLine
                          label={`Data ${isWithdrawal ? 'da solicitação' : ''}`}
                          title={format.dateToString(
                            new Date(itemDetail?.createdAt) || new Date(),
                            " dd/MM/yyyy 'às' HH:mm"
                          )}
                        />
                      )}

                      {isWithdrawal && !!itemDetail?.withdrawal?.releasedAt && (
                        <ItemLine
                          label="Transferência"
                          title={format.dateToString(
                            new Date(itemDetail?.withdrawal?.releasedAt) ||
                              new Date(),
                            " dd/MM/yyyy 'às' HH:mm"
                          )}
                        />
                      )}

                      {isWithdrawal && (
                        <ItemLine
                          label="Total"
                          title={format.money(itemDetail?.value)}
                        />
                      )}

                      {itemDetail?.withdrawal?.tax && (
                        <ItemLine
                          label="Taxa de saque"
                          title={`- ${format.money(itemDetail?.withdrawal?.tax)}`}
                        />
                      )}

                      {itemDetail?.withdrawal?.transferred && (
                        <ItemLine
                          label="Valor a receber"
                          title={format.money(
                            Number(itemDetail?.withdrawal?.transferred)
                          )}
                        />
                      )}

                      {itemDetail.sale?.total && (
                        <ItemLine
                          label="Valor"
                          title={format.money(itemDetail.sale?.total)}
                        />
                      )}

                      {itemDetail.sale?.percentageTax &&
                        !!itemDetail.sale?.transactionTax && (
                          <ItemLine
                            label={`Taxas (${
                              (itemDetail?.sale?.percentageTax > 0
                                ? itemDetail?.sale?.percentageTaxLog + '% + '
                                : '') +
                              format.money(itemDetail?.sale?.transactionTax)
                            })`}
                            title={
                              '- ' +
                              format.money(
                                itemDetail?.sale?.percentageTax +
                                  itemDetail?.sale?.transactionTax
                              )
                            }
                          />
                        )}

                      {!!itemDetail.sale?.installmentsFreeTax && (
                        <ItemLine
                          label={'Parcelamento sem juros'}
                          title={
                            '- ' +
                            format.money(itemDetail.sale.installmentsFreeTax)
                          }
                        />
                      )}

                      {!!itemDetail.sale?.securityReserve && (
                        <ItemLine
                          label="Reserva de segurança"
                          title={
                            '- ' +
                            format.money(itemDetail?.sale?.securityReserve!)
                          }
                        />
                      )}

                      {!!itemDetail.sale?.affiliateCommission && (
                        <ItemLine
                          label={`Comissão do afiliado`}
                          title={
                            '- ' +
                            format.money(itemDetail.sale.affiliateCommission)
                          }
                        />
                      )}

                      {!!itemDetail.sale?.coproducerCommission && (
                        <ItemLine
                          label={`Comissão do coprodutor`}
                          title={
                            '- ' +
                            format.money(itemDetail.sale.coproducerCommission)
                          }
                        />
                      )}

                      {!isWithdrawal && (
                        <ItemLine
                          label={itemDetail.sale ? 'Minha comissão' : 'Valor'}
                          title={format.money(itemDetail.value)}
                        />
                      )}

                      {itemDetail?.type && (
                        <ItemLine
                          label="Tipo"
                          title={validType[itemDetail?.type]}
                          out={itemDetail.type}
                        />
                      )}
                    </S.WrapperItems>
                  </>
                )}

                {isWithdrawal && itemDetail.withdrawal && (
                  <S.WrapperCard>
                    <Typography title="Status" />
                    {itemDetail.withdrawal?.status === 'TRANSFERRED' && (
                      <S.DescriptionCard>
                        Sua solicitação de saque foi concluída, o valor foi
                        debitado da sua conta.
                      </S.DescriptionCard>
                    )}

                    {(itemDetail.withdrawal?.status === 'PENDING' ||
                      itemDetail.withdrawal?.status === 'IN_REVIEW') && (
                      <S.DescriptionCard>
                        Sua solicitação de saque está{' '}
                        <Typography title="em análise" weight="bold" />.
                      </S.DescriptionCard>
                    )}

                    {itemDetail.withdrawal?.status === 'LIQUIDATING' && (
                      <S.DescriptionCard>
                        Sua solicitação de saque está sendo{' '}
                        <Typography title="em análise" weight="bold" />.
                      </S.DescriptionCard>
                    )}

                    {itemDetail.withdrawal?.status === 'REFUSED' && (
                      <>
                        <S.DescriptionCard>
                          Após a análise, sua solicitação de saque foi{' '}
                          <Typography title="recusada" weight="bold" />
                        </S.DescriptionCard>
                      </>
                    )}

                    {itemDetail.withdrawal?.status === 'RETURNED' && (
                      <>
                        <S.DescriptionCard>
                          Após a análise, sua solicitação de saque foi{' '}
                          <Typography title="devolvida" weight="bold" />
                        </S.DescriptionCard>
                      </>
                    )}

                    {itemDetail?.withdrawal?.refusedReason && (
                      <S.WrapperCardReason>
                        <Typography title="Motivo:" weight="bold" />
                        <S.DescriptionCard>
                          {itemDetail?.withdrawal?.refusedReason
                            ? itemDetail?.withdrawal?.refusedReason
                            : 'Motivo não informado'}
                        </S.DescriptionCard>
                      </S.WrapperCardReason>
                    )}
                  </S.WrapperCard>
                )}
              </>
            )}
          </S.Container>
        </ScrollView>
      </Modalize>
    </Portal>
  );
};

export default ExtractDetailsModal;
