import React from "react";

import CheckFalse from "@shared/assets/icons/svg/login/check_false.svg";
import CheckTrue from "@shared/assets/icons/svg/login/check_true.svg";

import * as S from "./styles";

interface CheckPasswordProps {
  title: string;
  active: boolean;
}

export const CheckPasswordItem = ({
  title,
  active = false,
}: CheckPasswordProps) => {
  return (
    <S.Wrapper>
      {active ? <CheckTrue /> : <CheckFalse />}
      <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
};
