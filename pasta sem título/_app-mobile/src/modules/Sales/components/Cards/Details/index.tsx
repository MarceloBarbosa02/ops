import React, { useState } from "react";

import { IProductSales } from "@shared/types";

import * as S from "./styles";
import { ItemProduct } from "../../Items/ItemProduct";

interface DetailsProps {
  details: IProductSales[];
}

export const DetailsCards = ({ details }: DetailsProps) => {
  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.Title>Detalhes da venda</S.Title>
        <S.Quantity>({details.length})</S.Quantity>
      </S.WrapperHeader>
      {details.map((item) => (
        <ItemProduct key={item.uuid} data={item} />
      ))}
    </S.Wrapper>
  );
};
