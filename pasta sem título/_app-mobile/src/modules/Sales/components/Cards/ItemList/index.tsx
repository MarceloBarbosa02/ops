import React from "react";

import Id from "@shared/assets/icons/svg/sales/icon_id.svg";
import Product from "@shared/assets/icons/svg/sales/product.svg";
import CLient from "@shared/assets/icons/svg/sales/user_client.svg";
import Status from "@shared/assets/icons/svg/sales/circle_status.svg";

import * as S from "./styles";

type ItemListProps = {
  title: string;
  type: "id" | "product" | "client" | "status";
};

export const ItemList = ({ title, type }: ItemListProps) => {
  const type_label = {
    id: (
      <S.WrapperLabel>
        <Id />
        <S.Label>ID</S.Label>
      </S.WrapperLabel>
    ),
    product: (
      <S.WrapperLabel>
        <Product />
        <S.Label>Produto</S.Label>
      </S.WrapperLabel>
    ),
    client: (
      <S.WrapperLabel>
        <CLient />
        <S.Label>Cliente</S.Label>
      </S.WrapperLabel>
    ),
    status: (
      <S.WrapperLabel>
        <Status />
        <S.Label>Status</S.Label>
      </S.WrapperLabel>
    ),
  };
  return (
    <S.Wrapper>
      <S.WrapperLine>
        {type_label[type]}
        <S.Title>{title}</S.Title>
      </S.WrapperLine>
    </S.Wrapper>
  );
};
