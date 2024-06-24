import React from "react";

import * as S from "./styles";

interface ButtonSelectProps {
  title: string;
}

export const ButtonSelect = ({ title }: ButtonSelectProps) => {
  return (
    <S.Wrapper active>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
