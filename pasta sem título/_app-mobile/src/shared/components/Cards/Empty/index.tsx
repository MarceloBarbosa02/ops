import React, { ReactNode } from "react";

import * as S from "./styles";

type EmptyCardsProps = {
  image: ReactNode;
  title: string;
  description: string;
};

export const EmptyCards = ({ image, title, description }: EmptyCardsProps) => {
  return (
    <S.Wrapper>
      {image}
      <S.FooterTitle>{title}</S.FooterTitle>
      <S.FooterDescription>{description}</S.FooterDescription>
    </S.Wrapper>
  );
};
