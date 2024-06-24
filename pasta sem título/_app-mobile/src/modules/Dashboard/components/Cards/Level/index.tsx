import React from "react";

import Conquest from "@shared/assets/icons/svg/conquest.svg";
import { format, getDashboardLevel } from "@shared/utils";
import { useToggleStore } from "@shared/store";

import * as S from "./styles";

type LevelProps = {
  amount: number;
};

export const LevelCard = ({ amount }: LevelProps) => {
  const toggle = useToggleStore((store) => store.toggle);
  const mask_value = "R$ ******";
  const level = getDashboardLevel(amount);

  return (
    <S.Wrapper>
      <S.WrapperTop>
        <S.WrapperFlag>
          <Conquest width={16} height={16} />
          <S.TitleFlag>Nível {level.level}</S.TitleFlag>
        </S.WrapperFlag>
        <S.Title>
          {toggle ? format.money(amount) : mask_value} em vendas
        </S.Title>
      </S.WrapperTop>
      <S.WrapperProgress>
        <S.WrapperProgressHeader>
          <S.ProgressText>{level.label.min}</S.ProgressText>
          <S.ProgressText>{level.label.max}</S.ProgressText>
        </S.WrapperProgressHeader>
        <S.WrapperProgressBack>
          {toggle && <S.WrapperProgressBar width={level.progress || 0} />}
        </S.WrapperProgressBack>
      </S.WrapperProgress>
    </S.Wrapper>
  );
};
