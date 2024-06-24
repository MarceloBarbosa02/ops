import React, { useMemo } from "react";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface BarProps {
  pass: "Muito fraco" | "Fraco" | "Regular" | "Forte" | "Muito forte";
  active: boolean;
}

export const BarItem = ({ active, pass }: BarProps) => {
  const theme = useTheme();

  const bgColor = {
    "Muito fraco": theme.theme === "dark" ? "#DEE1E4" : "#636363",
    Fraco: "#FF0A18",
    Regular: "#FFB200",
    Forte: "#62C972",
    "Muito forte": "#23CC67",
  };

  const colors = useMemo(() => {
    return bgColor[pass];
  }, [bgColor, active]);

  return (
    <S.Wrapper>
      {active && (
        <S.Container
          style={{
            backgroundColor: colors,
          }}
        />
      )}
    </S.Wrapper>
  );
};
