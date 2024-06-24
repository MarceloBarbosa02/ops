import React from "react";

import * as S from "./styles";

interface MaintenanceProps {
  title: string;
}

export const Maintenance = ({ title }: MaintenanceProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
