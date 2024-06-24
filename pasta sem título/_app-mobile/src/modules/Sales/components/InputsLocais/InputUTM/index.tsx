import React, { useCallback, useMemo, useState } from "react";
import { useTheme } from "styled-components/native";
import { TextInputProps } from "react-native";

import { UTMFilterProps, useSalesStore } from "@shared/store/useSalesStore";

import * as S from "./styles";

interface InputUTMFiltersProps extends TextInputProps {
  name: UTMFilterProps;
}

export const InputUTMFilters = ({ name, ...rest }: InputUTMFiltersProps) => {
  const theme = useTheme();
  const [isFocused, setIsFocused] = useState(false);
  const { params, handleSetChangeUTMFilter } = useSalesStore((store) => {
    return {
      params: store.params,
      handleSetChangeUTMFilter: store.handleSetChangeUTMFilter,
    };
  });

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, [isFocused]);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  const handleValidateItemUTM = (text: string) => {
    if (text === "") {
      handleSetChangeUTMFilter(name, "");
    } else {
      handleSetChangeUTMFilter(name, text);
    }
  };

  const isColor = useMemo(() => {
    return isFocused
      ? theme.colors.color_blue_40
      : theme.colors.color_neutral_20;
  }, [isFocused, theme]);

  return (
    <S.Wrapper>
      <S.WrapperInputUTM color={isColor}>
        <S.InputUTM
          value={params.utm[name]}
          onChangeText={handleValidateItemUTM}
          placeholder="Insira o valor para filtrar"
          placeholderTextColor={theme.colors.color_neutral_40}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          {...rest}
        />
      </S.WrapperInputUTM>
    </S.Wrapper>
  );
};
