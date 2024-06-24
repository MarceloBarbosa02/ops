import React from "react";

import * as S from "./styles";

type PasswordProps = {
  title: string;
};

export const Password = ({ title }: PasswordProps) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
