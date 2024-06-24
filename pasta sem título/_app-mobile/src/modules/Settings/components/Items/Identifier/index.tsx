import React from "react";

import * as S from "./styles";

interface IdentifierProps {
  content: string;
  identifier: string;
}

export const IdentifierItem = ({ content, identifier }: IdentifierProps) => {
  return (
    <S.Wrapper>
      <S.TextIdentifier>{identifier}</S.TextIdentifier>
      <S.Title>{content || ""}</S.Title>
    </S.Wrapper>
  );
};
