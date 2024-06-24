import React from "react";
import { useTheme } from "styled-components/native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";

import { format } from "@shared/utils";
import { useExtractFilter } from "@modules/Finances/hook/useExtractFilter";
import { ProductsDetails } from "@modules/Finances/components/Cards/ProductsDetails";
import { ItemLine } from "@modules/Finances/components/Cards/Items/ItemLine";
import { useReceipts } from "@modules/Finances/components/Cards/ReceiptsExtract/use-receipts";
import { SKDetails } from "@modules/Finances/components/Skeleton/SKDetails";
import { TCategoryExtract } from "@shared/types/entities/Finance/types";
import { TExtractDetailsProps } from "./extract-details.types";

import * as S from "./extract-details.styles";

export const DetailsTransactionModalScreen = ({
  refActionSheet,
}: TExtractDetailsProps) => {
  const theme = useTheme();
  const { goBack } = useNavigation();
  const { useTransfersDetails } = useExtractFilter();
  const { data: itemDetail, isFetching } = useTransfersDetails();

  const { validCategory, isStatusWithdrawal, validType } = useReceipts(
    !itemDetail?.isCanceled,
    itemDetail?.isCanceled as boolean
  );
  const isWithdrawal = itemDetail?.category === "WITHDRAWAL";

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
          backgroundColor: theme.colors.color_neutral_0,
        }}
        overlayStyle={{ overflow: "hidden" }}
        onClosed={() => {}}
      >
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
            <S.DescriptionCard>
              Visualize informações relacionadas ao extrato
            </S.DescriptionCard>
          </S.WrapperTitle>
          <ScrollView>
            <S.Container>
              {isFetching ? (
                <ScrollView>
                  <SKDetails
                    category={itemDetail?.category as TCategoryExtract}
                  />
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
                            <ProductsDetails
                              key={product.uuid}
                              data={product}
                            />
                          ))}
                        </S.WrapperProducts>
                      ) : null}
                      <S.WrapperItems>
                        {itemDetail?.code && (
                          <ItemLine
                            isCopy
                            label={`Código ${
                              isWithdrawal ? " do saque" : "da venda"
                            }`}
                            title={itemDetail?.code}
                            canceled={false}
                          />
                        )}
                        {itemDetail?.title && (
                          <ItemLine
                            label="Descrição"
                            title={itemDetail?.title}
                            description={itemDetail?.description}
                            canceled={false}
                          />
                        )}
                        {itemDetail.category === "WITHDRAWAL" ? (
                          <ItemLine
                            label="Categoria"
                            title={isStatusWithdrawal(
                              itemDetail?.withdrawal?.status
                            )}
                            canceled={false}
                          />
                        ) : (
                          <ItemLine
                            label="Categoria"
                            title={validCategory(itemDetail?.category)}
                            canceled={false}
                          />
                        )}
                        {itemDetail?.createdAt && (
                          <ItemLine
                            label={`Data ${
                              isWithdrawal ? "da solicitação" : ""
                            }`}
                            title={format.dateToString(
                              new Date(itemDetail?.createdAt) || new Date(),
                              " dd/MM/yyyy 'às' HH:mm:ss"
                            )}
                            canceled={false}
                          />
                        )}

                        {isWithdrawal &&
                          !!itemDetail?.withdrawal?.releasedAt && (
                            <ItemLine
                              label={"Transferência"}
                              title={format.dateToString(
                                new Date(itemDetail?.withdrawal?.releasedAt) ||
                                  new Date(),
                                " dd/MM/yyyy 'às' HH:mm:ss"
                              )}
                            />
                          )}

                        {isWithdrawal && (
                          <ItemLine
                            label="Total"
                            title={format.money(itemDetail?.value)}
                            canceled={false}
                          />
                        )}
                        {/* {itemDetail?.withdrawal?.releasedAt && (
                          <ItemLine
                            label={isWithdrawal ? "Transferência" : "Data"}
                            title={format.dateToString(
                              new Date(itemDetail?.withdrawal?.releasedAt) ||
                                new Date(),
                              " dd/MM/yyyy 'às' HH:mm:ss"
                            )}
                          />
                        )}
                        {itemDetail.value && (
                          <ItemLine
                            label="Valor"
                            title={format.money(itemDetail?.value)}
                            canceled={false}
                          />
                        )} */}

                        {itemDetail.withdrawal?.tax && (
                          <ItemLine
                            label="Taxa de saque"
                            title={`- ${format.money(
                              itemDetail.withdrawal?.tax
                            )}`}
                            canceled={false}
                          />
                        )}
                        {itemDetail.withdrawal?.transferred && (
                          <ItemLine
                            label="Valor a receber"
                            title={format.money(
                              Number(itemDetail.withdrawal?.transferred)
                            )}
                            canceled={false}
                          />
                        )}
                        {itemDetail.sale?.total && (
                          <ItemLine
                            label="Valor"
                            title={format.money(itemDetail.sale?.total)}
                            canceled={false}
                          />
                        )}

                        {itemDetail.sale?.percentageTax &&
                          !!itemDetail.sale?.transactionTax && (
                            <ItemLine
                              label={`Taxas (${
                                (itemDetail.sale &&
                                itemDetail.sale.percentageTax > 0
                                  ? itemDetail.sale.percentageTaxLog + "% + "
                                  : "") +
                                format.money(itemDetail.sale.transactionTax)
                              })`}
                              title={
                                "- " +
                                format.money(
                                  itemDetail.sale.percentageTax +
                                    itemDetail.sale.transactionTax
                                )
                              }
                              canceled={false}
                            />
                          )}

                        {!!itemDetail.sale?.installmentsFreeTax && (
                          <ItemLine
                            label={"Parcelamento sem juros"}
                            title={
                              "- " +
                              format.money(itemDetail.sale.installmentsFreeTax)
                            }
                            canceled={false}
                          />
                        )}
                        {!!itemDetail.sale?.securityReserve && (
                          <ItemLine
                            label="Reserva de segurança"
                            title={
                              "- " +
                              format.money(itemDetail.sale.securityReserve)
                            }
                            canceled={false}
                          />
                        )}

                        {!!itemDetail.sale?.affiliateCommission && (
                          <ItemLine
                            label={`Comissão do afiliado`}
                            title={
                              "- " +
                              format.money(itemDetail.sale.affiliateCommission)
                            }
                            canceled={false}
                          />
                        )}
                        {!!itemDetail.sale?.coproducerCommission && (
                          <ItemLine
                            label={`Comissão do coprodutor`}
                            title={
                              "- " +
                              format.money(itemDetail.sale.coproducerCommission)
                            }
                            canceled={false}
                          />
                        )}

                        {!isWithdrawal && (
                          <ItemLine
                            label={itemDetail.sale ? "Minha comissão" : "Valor"}
                            title={format.money(itemDetail.value)}
                            canceled={false}
                          />
                        )}

                        {itemDetail?.type && (
                          <ItemLine
                            label="Tipo"
                            title={validType[itemDetail?.type]}
                            out={itemDetail.type}
                            canceled={false}
                          />
                        )}
                      </S.WrapperItems>
                    </>
                  )}

                  {isWithdrawal && itemDetail.withdrawal && (
                    <S.WrapperCard>
                      <S.TitleCard>Status</S.TitleCard>
                      {itemDetail.withdrawal?.status === "TRANSFERRED" && (
                        <S.DescriptionCard>
                          Sua solicitação de saque foi concluída, o valor foi
                          debitado da sua conta.
                        </S.DescriptionCard>
                      )}

                      {(itemDetail.withdrawal?.status === "PENDING" ||
                        itemDetail.withdrawal?.status === "IN_REVIEW") && (
                        <S.DescriptionCard>
                          Sua solicitação de saque está{" "}
                          <S.DescriptionBoldCard>
                            em análise
                          </S.DescriptionBoldCard>
                          .
                        </S.DescriptionCard>
                      )}

                      {itemDetail.withdrawal?.status === "LIQUIDATING" && (
                        <S.DescriptionCard>
                          Sua solicitação de saque está sendo{" "}
                          <S.DescriptionBoldCard>
                            liquidada
                          </S.DescriptionBoldCard>
                          .
                        </S.DescriptionCard>
                      )}

                      {itemDetail.withdrawal?.status === "REFUSED" && (
                        <>
                          <S.DescriptionCard>
                            Após a análise, sua solicitação de saque foi{" "}
                            <S.DescriptionBoldCard>
                              recusada.
                            </S.DescriptionBoldCard>
                          </S.DescriptionCard>
                        </>
                      )}
                      {itemDetail.withdrawal?.status === "RETURNED" && (
                        <>
                          <S.DescriptionCard>
                            Após a análise, sua solicitação de saque foi{" "}
                            <S.DescriptionBoldCard>
                              devolvida.
                            </S.DescriptionBoldCard>
                          </S.DescriptionCard>
                        </>
                      )}
                      {itemDetail?.withdrawal?.refusedReason && (
                        <S.WrapperCardReason>
                          <S.DescriptionReasonCard>
                            Motivo:
                          </S.DescriptionReasonCard>
                          <S.DescriptionCard>
                            {itemDetail?.withdrawal?.refusedReason
                              ? itemDetail?.withdrawal?.refusedReason
                              : "Motivo não informado"}
                          </S.DescriptionCard>
                        </S.WrapperCardReason>
                      )}
                    </S.WrapperCard>
                  )}
                </>
              )}
            </S.Container>
          </ScrollView>
        </S.Wrapper>
      </Modalize>
    </Portal>
  );
};
