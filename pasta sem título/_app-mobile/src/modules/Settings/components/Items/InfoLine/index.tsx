import React, { ReactNode } from "react";
import { useTheme } from "styled-components/native";

import IconSuccess from "@shared/assets/icons/svg/editionProfile/success.svg";
import IconWarning from "@shared/assets/icons/svg/editionProfile/warning.svg";

import * as S from "./styles";

interface InfoLineProps {
  title: string;
  description: string | boolean;
  tooltip?: ReactNode;
}

export const InfoLineItem = ({
  title,
  tooltip,
  description,
}: InfoLineProps) => {
  const theme = useTheme();

  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      {title === "Verificação" ? (
        tooltip
      ) : (
        <>
          <S.Description sizeWidth={68}>
            {description || "Não informado"}
          </S.Description>
        </>
      )}
      {typeof description === "boolean" && (
        <S.WrapperFlag isUpdate={description}>
          {description ? (
            <>
              <IconSuccess />
              <S.TextFlag isUpdate={true}>ATUALIZADO</S.TextFlag>
            </>
          ) : (
            <>
              <IconWarning />
              <S.TextFlag isUpdate={false}>PENDENTE</S.TextFlag>
            </>
          )}
        </S.WrapperFlag>
      )}
    </S.Wrapper>
  );
};
