import React, { useMemo, useState } from "react";

import { Checkbox } from "@shared/components/Selects";
import { SelectProps } from "@modules/Sales/model/SelectModel";

import * as S from "./styles";

interface ItemSelectProps {
  item: SelectProps;
  filtersSelects: SelectProps[];
  handleSelectFilters(item: SelectProps): void;
}

export const ItemSelect = ({
  item,
  filtersSelects,
  handleSelectFilters,
}: ItemSelectProps) => {
  const [reference, setReference] = useState("");

  const handleOnPress = () => {
    handleSelectFilters(item);
    setReference(item.reference);
  };

  const isActive = useMemo(() => {
    return item.reference === reference;
  }, [reference, item.reference]);

  return (
    <S.Wrapper>
      <Checkbox title={item.label} active={isActive} onPress={handleOnPress} />
    </S.Wrapper>
  );
};
