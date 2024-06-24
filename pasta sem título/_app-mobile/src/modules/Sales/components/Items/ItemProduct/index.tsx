import React, { useEffect } from "react";
import { View } from "react-native";

import { IProductSales } from "@shared/types/entities/Sales";
import { useImageDefault } from "@modules/Sales/hooks/useImageDefault";
import { formatCurrencyMoneyPtBr } from "@shared/utils/formatters";
import { ValidateString } from "@shared/utils";
import { OrderBumpIcon } from "@shared/assets/components/sales/orderBump";

import * as S from "./styles";

interface ItemProductProps {
  data: IProductSales;
}

export const ItemProduct = ({ data }: ItemProductProps) => {
  const { imgProduct, defaultProduct, defaultTypeProduct, handleLoadImage } =
    useImageDefault();

  useEffect(() => {
    if (data?.photo) {
      handleLoadImage(data?.photo);
    }
  }, [data.photo]);

  return (
    <S.Wrapper>
      <S.WrapperImageInfo>
        {!imgProduct ? (
          <S.WrapperSizeImg>{defaultProduct(data.format)}</S.WrapperSizeImg>
        ) : (
          <S.WrapperSizeImg>
            <S.ImgProduct source={{ uri: imgProduct }} resizeMode="cover" />
          </S.WrapperSizeImg>
        )}
      </S.WrapperImageInfo>
      <S.WrapperInfo>
        <S.WrapperInfoText isSpacing={!ValidateString(data.description)}>
          {data?.isOrderBump && (
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 4 }}
            >
              <OrderBumpIcon />
              <S.DescriptionOrder>Orderbump</S.DescriptionOrder>
            </View>
          )}
          <S.TitleProduct>{data.name}</S.TitleProduct>
          <S.WrapperValueProduct>
            {!ValidateString(data.description) ? (
              <S.DescriptionLine>{`${data.description.slice(
                0,
                60
              )}`}</S.DescriptionLine>
            ) : (
              <S.Description>{data.description}</S.Description>
            )}
            <S.WrapperValue>
              <S.TitleValueProduct>
                {formatCurrencyMoneyPtBr(data.price)}
              </S.TitleValueProduct>
            </S.WrapperValue>
          </S.WrapperValueProduct>
          {defaultTypeProduct(data.format, data.filesAmount)}
        </S.WrapperInfoText>
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
