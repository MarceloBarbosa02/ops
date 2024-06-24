import React from "react";

import { ButtonMaster } from "@shared/components/Buttons";

import * as S from "./styles";

interface ButtonFooterProps {
  handleNavigation(): void;
  handleNavigationBack(): void;
}

export const ButtonFooter = ({
  handleNavigation,
  handleNavigationBack,
}: ButtonFooterProps) => {
  return (
    <S.Wrapper>
      <ButtonMaster
        title="Continuar"
        variant="primary"
        size="small"
        onPress={handleNavigation}
      />
      <ButtonMaster
        title="Cancelar"
        variant="tertiary"
        size="small"
        onPress={handleNavigationBack}
      />
    </S.Wrapper>
  );
};
