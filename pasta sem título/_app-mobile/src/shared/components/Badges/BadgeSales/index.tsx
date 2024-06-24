import React from "react";

import { EnumStatusSales, TStatusSales } from "@shared/types";

import * as S from "./styles";

interface BadgeProps {
  title: TStatusSales;
}
export const BadgeSales = ({ title }: BadgeProps) => {
  return (
    <S.WrapperBadge status={title}>
      <S.TitleBadge status={title}>{EnumStatusSales[title]}</S.TitleBadge>
    </S.WrapperBadge>
  );
};
