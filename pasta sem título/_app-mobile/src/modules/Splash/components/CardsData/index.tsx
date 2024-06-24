import React from "react";
import { ItemProps } from "@modules/Splash/models/itemsOnboard";

import * as S from "./styles";

type CardsDataProps = {
  item: ItemProps;
};

export const CardsData = ({ item }: CardsDataProps) => {
  return (
    <S.Wrapper>
      {item.img}
      <S.Title>{item?.title}</S.Title>
      <S.Description>{item?.description}</S.Description>
    </S.Wrapper>
  );
};
