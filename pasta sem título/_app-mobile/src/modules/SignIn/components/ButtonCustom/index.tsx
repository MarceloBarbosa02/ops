import React from "react";
import { TouchableOpacityProps } from "react-native";

import SMS from "@shared/assets/icons/svg/login/sms.svg";
import Whats from "@shared/assets/icons/svg/login/whatsapp.svg";
import Arrow from "@shared/assets/icons/svg/login/arrow_right.svg";

import * as S from "./styles";

type ButtonCustomProps = {
  type: "PHONE" | "WHATSAPP";
} & TouchableOpacityProps;

export const ButtonCustom = ({ type, ...rest }: ButtonCustomProps) => {
  return (
    <S.Wrapper activeOpacity={0.7} {...rest}>
      <S.Info>
        <S.InfoIcon>{type === "PHONE" ? <SMS /> : <Whats />}</S.InfoIcon>
        <S.Title>{type === "PHONE" ? "SMS" : "WhatsApp"}</S.Title>
      </S.Info>
      <Arrow />
    </S.Wrapper>
  );
};
