import React, { ReactNode } from "react";

import * as S from "./styles";

interface ItemLineDetailsProps {
  title: string;
  description: ReactNode;
  type?: string;
}

export const ItemLineDetails = ({ type = "-", title, description }: ItemLineDetailsProps) => {
  return (
    <S.Wrapper type={type}>
      <S.Label type={type}>{title}</S.Label>
      {typeof description === "object" ? description : <S.Title>{description}</S.Title>}
    </S.Wrapper>
  );
};
