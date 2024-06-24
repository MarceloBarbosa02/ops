import React, { ReactNode } from "react";

import { Header } from "@shared/components/Headers/Header";

import { ConfirmationArea } from "../Cards";
import * as S from "./styles";

interface LayoutSettingsProps {
  title: string;
  titleSave?: string;
  nameIcon?: string;
  children: ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  submit(): void;
  handleNavigateBack(): void;
}

export const LayoutSettings = ({
  title,
  titleSave = "Salvar Dados",
  nameIcon = "check-circle",
  children,
  isLoading = false,
  isDisabled = false,
  submit,
  handleNavigateBack,
}: LayoutSettingsProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        <Header
          title={title}
          handleNavigation={handleNavigateBack}
          leftBtn={true}
        />
        {children}
        <ConfirmationArea
          nameIcon={nameIcon}
          titleSave={titleSave}
          onPress={submit}
          handleNavigateBack={handleNavigateBack}
          isLoading={isLoading}
          disabled={isLoading || isDisabled}
        />
      </S.Container>
    </S.Wrapper>
  );
};
