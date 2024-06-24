import React from "react";

import { Checkbox } from "@shared/components";
import { UTMFilterProps } from "@shared/store/useSalesStore";

import { InputUTMFilters } from "../../InputsLocais/InputUTM";
import * as S from "./styles";

interface ItemUTMFilterProps {
  title: string;
  name: string;
  isBorder?: boolean;
  isDisabled: boolean;
  handleChangeUTM(): void;
}

export const ItemUTMFilter = ({
  title,
  name,
  isDisabled,
  isBorder = false,
  handleChangeUTM,
}: ItemUTMFilterProps) => {
  const utm_prop = name.split("V")[0] as UTMFilterProps;

  return (
    <S.Wrapper isBorder={isBorder}>
      <Checkbox
        active={isDisabled}
        title={title}
        onPress={handleChangeUTM}
        widthSize={30}
      />
      <InputUTMFilters
        name={utm_prop as UTMFilterProps}
        editable={isDisabled}
      />
    </S.Wrapper>
  );
};
