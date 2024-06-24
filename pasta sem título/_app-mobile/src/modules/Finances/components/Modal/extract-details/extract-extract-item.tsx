import { ArrowInIcon, ArrowOutIcon } from "@shared/assets/components/finances";
import React from "react";
import { TItemLineProps } from "./extract-details.types";

import * as S from "./extract-details.styles";

export const ItemLine = ({
  label,
  title,
  out = "",
  canceled = false,
}: TItemLineProps) => {
  return (
    <S.WrapperItem>
      <S.LabelItem>{label}</S.LabelItem>
      <S.WrapperInfo>
        {out === "IN" && <ArrowInIcon />}
        {out === "OUT" && <ArrowOutIcon />}
        {typeof title === "string" ? <S.TitleItem>{title}</S.TitleItem> : title}
      </S.WrapperInfo>
    </S.WrapperItem>
  );
};
