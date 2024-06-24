import React, { useEffect, useMemo, useState } from "react";

import * as S from "./styles";
import { BarItem } from "../Items/Bar";

interface StrengthBarProps {
  password: string;
}

type BarTextProps =
  | "Muito fraco"
  | "Fraco"
  | "Regular"
  | "Forte"
  | "Muito forte";

const regexArr = [
  /.*\d.*/,
  /.*[!@#$%^&*(),.?":{}|<>].*/,
  /.*[A-Z].*/,
  /.*[a-z].*/,
];
const minLength = 3;
const labels = ["Muito fraco", "Fraco", "Regular", "Forte", "Muito forte"];

export const StrengthBar = ({ password = "" }: StrengthBarProps) => {
  const [score, setScore] = useState<number>(0);

  const passWorld = useMemo(() => {
    let passPoint = 0;
    if (password?.length === 0) {
      setScore(0);
      return;
    }
    if (password?.length < minLength) {
      setScore(1);
      return "Muito fraco";
    }
    if (password?.length > minLength) {
      regexArr.forEach((rgx) => (rgx.test(password) ? (passPoint += 1) : null));
      setScore(passPoint + 1);
      return labels[passPoint];
    }
    setScore(1);
    return "Muito fraco";
  }, [password]);

  return (
    <>
      <S.Wrapper>
        {Array(5)
          .fill("")
          .map((_, index) => (
            <BarItem
              key={index.toString()}
              pass={passWorld as BarTextProps}
              active={score >= index + 1}
            />
          ))}
        <S.Title>{password ? passWorld : "Força da senha"}</S.Title>
      </S.Wrapper>
    </>
  );
};
