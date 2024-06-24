import React, { useMemo } from "react";
import { useTheme } from "styled-components/native";

import ArrowLeft from "@shared/assets/icons/svg/header/arrow_left.svg";
import { TypographyTextMaster } from "@shared/components/Typography";

import * as S from "./styles";

type HeaderProps = {
  title: string;
  quantity?: number;
  leftBtn?: boolean;
  handleNavigation?(): void;
};

export const Header = ({
  title,
  quantity,
  leftBtn = true,
  handleNavigation,
}: HeaderProps) => {
  const theme = useTheme();

  const avatar_quantity = useMemo(() => {
    const sizeof = String(quantity).length * 13;

    if (!quantity) {
      return <S.HelpBtn />;
    }

    if (String(quantity).length <= 2) {
      return (
        <S.WrapperQuantity size={36}>
          <TypographyTextMaster
            variant="body"
            typeWeight="bold"
            fontSize={theme.fonts.sizes.medium}
          >
            {quantity}
          </TypographyTextMaster>
        </S.WrapperQuantity>
      );
    }

    if (String(quantity).length > 2) {
      return (
        <S.WrapperQuantity size={sizeof}>
          <TypographyTextMaster
            variant="body"
            typeWeight="bold"
            fontSize={theme.fonts.sizes.medium}
          >
            {quantity}
          </TypographyTextMaster>
        </S.WrapperQuantity>
      );
    }

    return <S.HelpBtn />;
  }, [quantity]);

  return (
    <S.Wrapper>
      {leftBtn ? (
        <S.HelpBtn onPress={handleNavigation}>
          <ArrowLeft width={32} height={32} />
        </S.HelpBtn>
      ) : (
        <S.HelpBtn />
      )}
      <TypographyTextMaster
        variant="body"
        typeWeight="bold"
        fontSize={theme.fonts.sizes.mediumX}
        color={theme.colors.gray_l900_d50}
      >
        {title}
      </TypographyTextMaster>
      {avatar_quantity}
    </S.Wrapper>
  );
};
