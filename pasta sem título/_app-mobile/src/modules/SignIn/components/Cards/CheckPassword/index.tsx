import React, { useEffect, useState } from "react";

import { CheckPasswordItem } from "../../Items/CheckPassword";
import * as S from "./styles";

interface CheckPasswordSecureProps {
  numbers: boolean;
  combine: boolean;
  length: boolean;
  letters_uppercase: boolean;
  letters_lowercase: boolean;
  caracteres: boolean;
}

interface CheckPasswordProps {
  password: string;
  password_confirm: string;
}

const values_initial = {
  letters_uppercase: false,
  letters_lowercase: false,
  numbers: false,
  caracteres: false,
  length: false,
  combine: false,
};

export const CheckPasswordCard = ({
  password,
  password_confirm,
}: CheckPasswordProps) => {
  const [validateInput, setValidateInput] =
    useState<CheckPasswordSecureProps>(values_initial);

  useEffect(() => {
    if (!password) {
      setValidateInput(values_initial);
    }

    if (password) {
      setValidateInput({
        letters_uppercase: /[A-Z]/g.test(password),
        letters_lowercase: /[a-z]/g.test(password),
        numbers: /\d/g.test(password),
        caracteres: /^(?=.*[!@#$%^&*(),.?":{}|<>]).+$/.test(password),
        combine: password === password_confirm,
        length: password?.length > 8,
      });
    }
  }, [password, password_confirm]);

  return (
    <S.Wrapper>
      <S.Title>Sua senha deve conter:</S.Title>
      <CheckPasswordItem
        active={validateInput.length}
        title="Pelo menos 8 caracteres"
      />
      <CheckPasswordItem
        active={validateInput.caracteres}
        title="Pelo menos 1 caractere especial"
      />
      <CheckPasswordItem
        active={validateInput.numbers}
        title="Pelo menos 1 número"
      />
      <CheckPasswordItem
        active={validateInput.letters_uppercase}
        title="Pelo menos 1 letra maiúscula"
      />
      <CheckPasswordItem
        active={validateInput.letters_lowercase}
        title="Pelo menos 1 letra minúscula"
      />
      <CheckPasswordItem
        active={validateInput.combine}
        title="As senhas digitadas conferem"
      />
    </S.Wrapper>
  );
};
