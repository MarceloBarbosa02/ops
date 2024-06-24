import React from "react";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";

import { format } from "@shared/utils";
import { useExtractFilter } from "@modules/Finances/hook/useExtractFilter";
import { ProductsDetails } from "@modules/Finances/components/Cards/ProductsDetails";
import { ItemLine } from "@modules/Finances/components/Cards/Items/ItemLine";
import { useReceipts } from "@modules/Finances/components/Cards/ReceiptsExtract/use-receipts";
import { SKDetails } from "@modules/Finances/components/Skeleton/SKDetails";
import { TCategoryExtract } from "@shared/types/entities/Finance/types";

import * as S from "./styles";

export const DetailsTransactionScreen = () => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { useTransfersDetails } = useExtractFilter();
  const { data: itemDetail, isFetching } = useTransfersDetails();

  const { validCategory, isStatusWithdrawal, validType } = useReceipts(
    !itemDetail?.isCanceled,
    itemDetail?.isCanceled as boolean
  );

  const handleClose = () => {
    goBack();
  };

  return (
    <S.Wrapper>
      <S.WrapperTitle>
        <S.WrapperHeaderIcon>
          <S.Title>Detalhes</S.Title>
          <S.WrapperBtnClose onPress={handleClose}>
            <AntDesign
              name="close"
              size={18}
              color={theme.colors.color_neutral_100}
            />
          </S.WrapperBtnClose>
        </S.WrapperHeaderIcon>
      </S.WrapperTitle>
      <ScrollView>
        <S.Container>
          {isFetching ? (
            <ScrollView>
              <SKDetails category={itemDetail?.category as TCategoryExtract} />
            </ScrollView>
          ) : (
            <>
              {itemDetail && (
                <>
                  {itemDetail?.products.length > 0 ? (
                    <S.WrapperProducts>
                      <S.WrapperProductsHeader>
                        <S.ProductsText>Produtos</S.ProductsText>
                        <S.ProductsQuantityText>
                          ({itemDetail?.products.length})
                        </S.ProductsQuantityText>
                      </S.WrapperProductsHeader>
                      {itemDetail?.products.map((product) => (
                        <ProductsDetails key={product.uuid} data={product} />
                      ))}
                    </S.WrapperProducts>
                  ) : null}
                  <S.WrapperItems>
                    {itemDetail?.code && (
                      <ItemLine
                        label="Código"
                        title={itemDetail?.code}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.description && (
                      <ItemLine
                        label="Descrição"
                        title={itemDetail?.title}
                        description={itemDetail?.description}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail.category === "WITHDRAWAL" ? (
                      <ItemLine
                        label="Categoria"
                        title={isStatusWithdrawal(
                          itemDetail?.withdrawal?.status
                        )}
                        canceled={itemDetail?.isCanceled}
                      />
                    ) : (
                      <ItemLine
                        label="Categoria"
                        title={validCategory(itemDetail?.category)}
                        canceled={itemDetail?.isCanceled}
                      />
                    )}
                    {itemDetail?.createdAt && (
                      <ItemLine
                        label="Data da solicitação"
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
                            ? itemDetail?.sale?.percentageTaxLog + "% + "
                            : "") +
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

              {itemDetail?.category === "WITHDRAWAL" && (
                <S.WrapperCard>
                  <S.TitleCard>Status</S.TitleCard>
                  {itemDetail.withdrawal?.status === "PENDING" && (
                    <S.DescriptionCard>
                      Solicitação de saque{" "}
                      <S.DescriptionBoldCard>em análise</S.DescriptionBoldCard>.
                    </S.DescriptionCard>
                  )}
                  {itemDetail.withdrawal?.status === "IN_REVIEW" && (
                    <S.DescriptionCard>
                      Solicitação de saque{" "}
                      <S.DescriptionBoldCard>em revisão</S.DescriptionBoldCard>.
                    </S.DescriptionCard>
                  )}
                  {itemDetail.withdrawal?.status === "LIQUIDATING" ||
                    (itemDetail.withdrawal?.status === "TRANSFERRED" && (
                      <S.DescriptionCard>
                        Sua solicitação de saque foi concluída, o valor foi
                        debitado da sua conta.
                      </S.DescriptionCard>
                    ))}
                  {itemDetail.withdrawal?.status === "REFUSED" && (
                    <>
                      <S.DescriptionCard>
                        Após a análise, sua solicitação de saque foi{" "}
                        <S.DescriptionBoldCard>recusada.</S.DescriptionBoldCard>
                      </S.DescriptionCard>
                      <S.DescriptionCard>
                        {itemDetail?.withdrawal?.refusedReason
                          ? itemDetail?.withdrawal?.refusedReason
                          : "Motivo não informado"}
                      </S.DescriptionCard>
                    </>
                  )}
                  {itemDetail.withdrawal?.status === "RETURNED" && (
                    <>
                      <S.DescriptionCard>
                        Após a análise, sua solicitação de saque foi{" "}
                        <S.DescriptionBoldCard>recusada.</S.DescriptionBoldCard>
                      </S.DescriptionCard>
                      <S.DescriptionCard>
                        {itemDetail?.withdrawal?.refusedReason
                          ? itemDetail?.withdrawal?.refusedReason
                          : "Motivo não informado"}
                      </S.DescriptionCard>
                    </>
                  )}
                </S.WrapperCard>
              )}
            </>
          )}
        </S.Container>
      </ScrollView>
    </S.Wrapper>
  );
};
