import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';

import * as S from './modal.styles';
import { useExtractFilter } from '@/shared/queries/extract/extract';
import { useReceipts } from '../../components/cards/receipts-extract/use-receipts';
import { ModalScreen, Typography } from '@/shared/components';
import { ScrollView } from 'react-native';
import { ItemLine } from '../../components/cards/receipts-extract/receipts-extract-item';
import { format } from '@/shared';
import { SKDetails } from '../../components/skeleton';
import { ProductsDetails } from '../../components/cards';
import { useFiltersExtract } from './use-filter-extract';

const ExtractDetailsScreenModal = () => {
  const theme = useTheme();
  const { useTransfersDetails } = useExtractFilter();
  const { handleClosed } = useFiltersExtract();
  const { data: itemDetail, isFetching } = useTransfersDetails();

  const { validCategory, isStatusWithdrawal, validType } = useReceipts(
    !itemDetail?.isCanceled,
    itemDetail?.isCanceled as boolean
  );

  return (
    <ModalScreen title="Detalhes" handleNavigateRight={handleClosed}>
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
                        label={`Código ${itemDetail?.category === 'WITHDRAWAL' ? 'do saque' : itemDetail?.category === 'COMISSION' ? 'da venda' : ''}`}
                        title={itemDetail?.code}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.description && (
                      <ItemLine
                        label="Descrição"
                        title={itemDetail?.description}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail.category === 'WITHDRAWAL' ? (
                      <ItemLine
                        label="Categoria"
                        title={isStatusWithdrawal(
                          itemDetail?.withdrawal?.status
                        )}
                        canceled={itemDetail?.isCanceled}
                      />
                    ) : (
                      <>
                        {itemDetail?.category ? (
                          <ItemLine
                            label="Categoria"
                            title={validCategory(itemDetail?.category)}
                            canceled={itemDetail?.isCanceled}
                          />
                        ) : null}
                      </>
                    )}
                    {itemDetail?.createdAt && (
                      <ItemLine
                        label="Data da Solicitação"
                        title={format.dateToString(
                          new Date(itemDetail?.createdAt) || new Date(),
                          " dd/MM/yyyy 'às' HH:mm"
                        )}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.withdrawal?.releasedAt && (
                      <ItemLine
                        label="Data"
                        title={format.dateToString(
                          new Date(itemDetail?.withdrawal?.releasedAt) ||
                            new Date(),
                          " dd/MM/yyyy 'às' HH:mm"
                        )}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.value && (
                      <ItemLine
                        label="Valor"
                        title={format.money(itemDetail?.value)}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.withdrawal?.tax && (
                      <ItemLine
                        label="Taxa de saque"
                        title={format.money(itemDetail?.withdrawal?.tax)}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.withdrawal?.transferred && (
                      <ItemLine
                        label="Valor a receber"
                        title={format.money(
                          itemDetail?.withdrawal?.transferred
                        )}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {!!(
                      itemDetail?.sale?.percentageTax! +
                        itemDetail?.sale?.transactionTax! >
                      0
                    ) ? (
                      <ItemLine
                        label={`Taxas (${
                          (itemDetail?.sale?.percentageTax! > 0
                            ? itemDetail?.sale?.percentageTaxLog + '% + '
                            : '') +
                          format.money(itemDetail?.sale?.transactionTax!)
                        })`}
                        title={format.money(
                          itemDetail?.sale?.percentageTax! +
                            itemDetail?.sale?.transactionTax!
                        )}
                        canceled={itemDetail?.isCanceled}
                      />
                    ) : null}
                    {itemDetail?.sale?.securityReserve! >= 0 ? (
                      <ItemLine
                        label="Reserva de segurança"
                        title={format.money(itemDetail?.sale?.securityReserve!)}
                        canceled={itemDetail?.isCanceled}
                      />
                    ) : null}
                    {itemDetail?.sale?.commission && (
                      <ItemLine
                        label="Comissão"
                        title={format.money(itemDetail?.sale?.commission)}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}

                    {itemDetail?.type && (
                      <ItemLine
                        label="Tipo"
                        title={validType[itemDetail?.type]}
                        out={itemDetail.type}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                  </S.WrapperItems>
                </>
              )}

              {itemDetail?.category === 'WITHDRAWAL' && (
                <S.WrapperCard>
                  <Typography title="Status" />
                  {itemDetail.withdrawal?.status === 'PENDING' && (
                    <S.DescriptionCard>
                      Solicitação de saque{' '}
                      <Typography
                        title="em análise"
                        colorValue="primary"
                        weight="bold"
                      />
                      .
                    </S.DescriptionCard>
                  )}
                  {itemDetail.withdrawal?.status === 'IN_REVIEW' && (
                    <S.DescriptionCard>
                      Solicitação de saque{' '}
                      <Typography
                        title="em revisão"
                        colorValue="primary"
                        weight="bold"
                      />
                      .
                    </S.DescriptionCard>
                  )}
                  {itemDetail.withdrawal?.status === 'LIQUIDATING' ||
                    (itemDetail.withdrawal?.status === 'TRANSFERRED' && (
                      <S.DescriptionCard>
                        Sua solicitação de saque foi concluída, o valor foi
                        debitado da sua conta.
                      </S.DescriptionCard>
                    ))}
                  {itemDetail.withdrawal?.status === 'REFUSED' && (
                    <>
                      <S.DescriptionCard>
                        Após a análise, sua solicitação de saque foi{' '}
                        <Typography title="recusada." weight="bold" />
                      </S.DescriptionCard>
                      <S.WrapperReason>
                        <Typography
                          title={`Motivo: ${
                            itemDetail?.withdrawal?.refusedReason
                              ? itemDetail?.withdrawal?.refusedReason
                              : 'Motivo não informado'
                          }`}
                        />
                      </S.WrapperReason>
                    </>
                  )}
                  {itemDetail.withdrawal?.status === 'RETURNED' && (
                    <>
                      <S.DescriptionCard>
                        Após a análise, sua solicitação de saque foi{' '}
                        <Typography title="recusada." />
                      </S.DescriptionCard>
                      <Typography
                        title={
                          itemDetail?.withdrawal?.refusedReason
                            ? itemDetail?.withdrawal?.refusedReason
                            : 'Motivo não informado'
                        }
                      />
                    </>
                  )}
                </S.WrapperCard>
              )}
            </>
          )}
        </S.Container>
      </ScrollView>
    </ModalScreen>
  );
};

export default ExtractDetailsScreenModal;
