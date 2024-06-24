import React from "react";
import { View, useWindowDimensions } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import * as Clipboard from "expo-clipboard";

import { EnumPaymentMethod } from "@shared/types/enum/EnumPaymentMethod";
import { showToast } from "@shared/store/useToastStore";
import { BadgeSales } from "@shared/components/Badges/BadgeSales";
import {
  IAffiliate,
  IProducer,
  ISaleDetailsPromotor,
  ITransaction,
  TStatusSales,
} from "@shared/types";
import { format } from "@shared/utils";
import {
  SvgCard,
  SvgDiamond,
  SvgPixBold,
  SvgTicket1,
} from "@modules/Sales/icons";

import { ItemLineDetails } from "../../Items/ItemLineDetails";
import * as S from "./styles";

interface TransactionsProps {
  transaction: ITransaction;
  affiliate?: IAffiliate;
  producer?: IProducer;
  coProducers?: ISaleDetailsPromotor[] | null;
  coproductionCommission?: number | null;
}

export const TransactionCard = ({
  transaction,
  affiliate,
  producer,
  coProducers,
  coproductionCommission,
}: TransactionsProps) => {
  const theme = useTheme();
  const isAffiliate = !!producer;
  const { width } = useWindowDimensions();

  console.log({ transaction, affiliate, producer });

  const copyToClipboard = async (text: string, msg: string) => {
    await Clipboard.setStringAsync(text);
    showToast({
      type: "success",
      message: msg,
    });
  };

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Transação</S.Title>
        <BadgeSales title={transaction.status as TStatusSales} />
      </S.WrapperHeader>
      <View style={{ paddingVertical: 8 }}>
        <ItemLineDetails
          type="-"
          title="Método"
          description={
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                width: "50%",
              }}
            >
              <View>
                {transaction?.paymentMethod === "CREDIT_CARD" && <SvgCard />}
                {transaction?.paymentMethod === "BANK_SLIP" && <SvgTicket1 />}
                {transaction?.paymentMethod === "PIX" && <SvgPixBold />}
                {transaction?.paymentMethod === "FREE" && <SvgDiamond />}
              </View>
              <S.Label>
                {" "}
                {EnumPaymentMethod[transaction?.paymentMethod]}
                {transaction?.paymentMethod === "CREDIT_CARD" && (
                  <> em {transaction?.installmentsAmount}x </>
                )}
              </S.Label>
            </View>
          }
        />
        <ItemLineDetails
          type="-"
          title="Início"
          description={format.dateToString(
            new Date(transaction.startedAt),
            "dd MMM yyyy ' às ' H'h'mm"
          )}
        />
        {transaction?.finishedAt && (
          <ItemLineDetails
            type="-"
            title="Pagamento"
            description={format.dateToString(
              new Date(transaction.finishedAt),
              "dd MMM yyyy ' às ' H'h'mm"
            )}
          />
        )}
        {transaction?.status === "REFUNDED" && (
          <ItemLineDetails
            type="-"
            title="Estorno"
            description={
              transaction.refundedAt &&
              format.dateToString(
                new Date(transaction.refundedAt),
                "dd MMM yyyy ' às ' H'h'mm"
              )
            }
          />
        )}
        {!isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Subtotal"
            description={format.money(transaction.subTotal)}
          />
        )}
        {transaction?.automaticDiscount > 0 && !isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Desconto automático"
            description={`- ${format.money(transaction.automaticDiscount)}`}
          />
        )}
        {transaction?.discountCoupon > 0 && !isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Cupom de desconto"
            description={`- ${format.money(transaction.discountCoupon)}`}
          />
        )}

        {["APPROVED", "PENDING"].includes(transaction?.status) && (
          <>
            {!!(transaction?.percentageTax + transaction?.transactionTax > 0) &&
              !isAffiliate && (
                <ItemLineDetails
                  type="-"
                  title={`Taxas (${
                    (transaction?.percentageTax > 0
                      ? transaction?.percentageTaxLog + "% + "
                      : "") + format.money(transaction?.transactionTax)
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
            description={`- ${format.money(affiliate.comission || 0)}`}
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
          title="Minha comissão"
          description={`${format.money(transaction?.comission || 0)}`}
        />

        {transaction?.paymentMethod === "BANK_SLIP" && isAffiliate && (
          <>
            <ItemLineDetails
              type="-"
              title="Linha digitável do boleto"
              description={
                <S.WrapperLink>
                  <S.LabelLink>{`${(
                    transaction?.bankSlipDigitableLine ?? ""
                  ).slice(0, 19)}...`}</S.LabelLink>
                  <S.WrapperBtnCopy
                    onPress={() =>
                      copyToClipboard(
                        transaction?.bankSlipDigitableLine as string,
                        "Linha editável copiada com sucesso"
                      )
                    }
                  >
                    <Feather
                      name="copy"
                      size={16}
                      color={theme.colors.color_blue_40}
                    />
                  </S.WrapperBtnCopy>
                </S.WrapperLink>
              }
            />
            <ItemLineDetails
              type="-"
              title="Link do boleto"
              description={
                <S.WrapperLink>
                  <S.LabelLink>{`${(transaction?.bankSlipLink ?? "").slice(
                    0,
                    30
                  )}...`}</S.LabelLink>
                  <S.WrapperBtnCopy
                    onPress={() =>
                      copyToClipboard(
                        transaction?.bankSlipLink as string,
                        "Link do boleto copiado com sucesso"
                      )
                    }
                  >
                    <Feather
                      name="copy"
                      size={16}
                      color={theme.colors.color_blue_40}
                    />
                  </S.WrapperBtnCopy>
                </S.WrapperLink>
              }
            />
          </>
        )}

        {transaction.thanksPageLink && !isAffiliate && (
          <ItemLineDetails
            type="-"
            title="Página de obrigado"
            description={
              <S.WrapperLink>
                <S.LabelLink>
                  {format.limitarTamanhoString(
                    transaction.thanksPageLink,
                    width + 120
                  )}
                </S.LabelLink>
                <S.WrapperBtnCopy
                  onPress={() =>
                    copyToClipboard(
                      transaction.thanksPageLink,
                      "Link da pagina copiada com sucesso"
                    )
                  }
                >
                  <Feather
                    name="copy"
                    size={16}
                    color={theme.colors.color_blue_40}
                  />
                </S.WrapperBtnCopy>
              </S.WrapperLink>
            }
          />
        )}
      </View>
    </S.Wrapper>
  );
};
