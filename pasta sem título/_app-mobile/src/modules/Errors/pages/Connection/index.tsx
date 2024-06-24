import React from "react";

import * as S from "./styles";

interface ConnectionProps {
  title: string;
}

export const ConnectionScreen = ({ title }: ConnectionProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
