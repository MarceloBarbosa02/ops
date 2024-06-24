import React, { ReactNode, useMemo } from "react";
import { Dimensions, View } from "react-native";
import * as Clipboard from "expo-clipboard";

import Copy from "@shared/assets/icons/svg/sales/copy.svg";
import { showToast } from "@shared/store";
import IconOut from "@shared/assets/icons/svg/finance/out.svg";
import IconIn from "@shared/assets/icons/svg/finance/in.svg";
import { format } from "@shared/utils";

import * as S from "./styles";

type TItemLineProps = {
  label: string;
  description?: string;
  title: ReactNode | string;
  out?: "IN" | "OUT" | "";
  canceled?: boolean;
  isCopy?: boolean;
};

const { width } = Dimensions.get("window");

export const ItemLine = ({
  label,
  title,
  description = "",
  out = "",
  canceled = false,
  isCopy = false,
}: TItemLineProps) => {
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(title as string);
    showToast({
      type: "success",
      message: "Código copiado com sucesso",
    });
  };

  const descriptionExtract = useMemo(() => {
    if (label === "Descrição") {
      return (
        <S.WrapperDescription>
          <S.TitleLabel isCanceled={canceled}>
            {format.limitarTamanhoString(`${title}`, width - 30)}
          </S.TitleLabel>
          {description && (
            <S.TitleDescription isCanceled={canceled}>
              {format.limitarTamanhoString(description, width + 40)}
            </S.TitleDescription>
          )}
        </S.WrapperDescription>
      );
    }
    if (label === "Categoria") {
      return title;
    }
    if (label.includes("Código")) {
      return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
          <S.Title isCanceled={canceled}>{`#${title}`}</S.Title>
          {isCopy && (
            <S.WrapperBtnCopy onPress={copyToClipboard}>
              <Copy />
            </S.WrapperBtnCopy>
          )}
        </View>
      );
    }
    return (
      <S.Title isCanceled={canceled}>
        {format.limitarTamanhoString(`${title}`, width)}
      </S.Title>
    );
  }, [label, title, description, canceled]);

  return (
    <S.Wrapper>
      <S.Label>{label}</S.Label>
      <S.WrapperInfo>
        {out === "IN" && <IconIn />}
        {out === "OUT" && <IconOut />}
        {descriptionExtract}
      </S.WrapperInfo>
    </S.Wrapper>
  );
};
