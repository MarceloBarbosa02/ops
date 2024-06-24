import React from "react";
import { ActivityIndicator } from "react-native";

import ExportIcon from "@shared/assets/icons/svg/finance/export.svg";

import { TButtonExtractProps } from "./extract.type";
import * as S from "./styles";

export const ButtonExport = ({
  title,
  isLoading,
  ...rest
}: TButtonExtractProps) => {
  return (
    <S.WrapperExport activeOpacity={0.7} {...rest}>
      <S.TitleExport>{title}</S.TitleExport>
      {isLoading ? <ActivityIndicator size={"small"} /> : <ExportIcon />}
    </S.WrapperExport>
  );
};
