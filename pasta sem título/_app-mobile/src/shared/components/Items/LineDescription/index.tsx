import React from "react";

import * as S from "./styles";

interface LineDescriptionProps {
  title: string;
}

export const LineDescription = ({ title }: LineDescriptionProps) => {
  return (
    <S.Wrapper>
      <S.Dot />
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
