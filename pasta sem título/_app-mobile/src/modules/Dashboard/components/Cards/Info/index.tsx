import React from "react";

import Checkout from "@shared/assets/icons/svg/checkout_card.svg";
import Status from "@shared/assets/icons/svg/loading.svg";

import * as S from "./styles";

interface InfoProps {
  title: string;
  description: string;
}

export const InfoCard = ({ title, description }: InfoProps) => {
  return (
    <S.Wrapper>
      <S.WrapperInfo>
        <S.WrapperIcon>
          {title.includes("STATUS") ? <Status /> : <Checkout />}
        </S.WrapperIcon>
        <S.Title>{title}</S.Title>
      </S.WrapperInfo>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  );
};
