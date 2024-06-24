import React from "react";

import Commission from "@shared/assets/icons/svg/sales/filter_commission.svg";
import Total from "@shared/assets/icons/svg/sales/filter_total.svg";
import { format } from "@shared/utils/formatters";

import * as S from "./styles";

type TopValueProps = {
  title: string;
  value: number;
};

export const TopValueCards = ({ title, value }: TopValueProps) => {
  return (
    <S.Wrapper>
      <S.WrapperTop>
        {title === "TOTAL" ? <Total /> : <Commission />}
        <S.Title>{title}</S.Title>
      </S.WrapperTop>
      <S.Value>{value ? format.money(value) : "..."}</S.Value>
    </S.Wrapper>
  );
};
