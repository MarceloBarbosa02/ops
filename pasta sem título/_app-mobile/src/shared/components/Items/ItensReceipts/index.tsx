import React, { useMemo } from "react";
import {
  Dimensions,
  Linking,
  Pressable,
  TouchableOpacity,
  View,
} from "react-native";

import { items_cards } from "@shared/mocks/ItemCardsMocks";
import { WhatsappIcon } from "@shared/assets/components/generics";
import { format } from "@shared/utils";

import { methodsPayment, saleStatusTitle } from "./items.mocks";

import * as S from "./styles";
import { OrderBumpIcon } from "@shared/assets/components/sales/orderBump";

const { width } = Dimensions.get("window");

interface ItemLineProps {
  title: any;
  hasOrderBump?: boolean;
  type:
    | "id"
    | "cod"
    | "product"
    | "client"
    | "contact"
    | "status"
    | "period"
    | "payment"
    | "value"
    | "createdAt"
    | "frequency"
    | "releasedAt";
}

export const ItensReceipts = ({ title, type, hasOrderBump }: ItemLineProps) => {
  const openLink = () =>
    Linking.openURL(`whatsapp://send?phone=${title.replace(/\s/g, "")}&text=`);

  const formatDescription = useMemo(() => {
    switch (type) {
      case "status":
        return saleStatusTitle(title);
      case "payment":
        return methodsPayment(title);
      case "contact":
        return (
          <TouchableOpacity onPress={openLink} activeOpacity={0.8}>
            <WhatsappIcon />
          </TouchableOpacity>
        );

      default:
        return (
          <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
            {hasOrderBump && <OrderBumpIcon />}
            <S.Title>{format.limitarTamanhoString(title, width - 60)}</S.Title>
          </View>
        );
    }
  }, [type, title]);

  return (
    <S.Wrapper>
      {items_cards[type]}
      {formatDescription}
    </S.Wrapper>
  );
};
