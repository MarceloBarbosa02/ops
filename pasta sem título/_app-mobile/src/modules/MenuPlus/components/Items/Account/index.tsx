import React, { useMemo } from "react";
import { TouchableOpacityProps } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Sync from "@shared/assets/icons/svg/menu/sync.svg";
import { CAcronym, TAcronym } from "@shared/types";

import * as S from "./styles";

interface AccountProps extends TouchableOpacityProps {
  title: string;
  avatar_title: string;
  type: "sync" | "toggle";
  type_acronym: TAcronym;
  active?: boolean;
  photo: string;
}

export const ItemAccount = ({
  title,
  avatar_title,
  type = "toggle",
  type_acronym,
  active = false,
  photo,
  ...rest
}: AccountProps) => {
  const title_avatar = useMemo(() => {
    const _title = avatar_title?.split(" ");
    const avatar = `${_title[0].substring(0, 1).toLocaleUpperCase()}${
      _title[1] ? _title[1].substring(0, 1).toLocaleUpperCase() : ""
    }`;
    return avatar;
  }, [title, avatar_title]);

  return (
    <S.Wrapper {...rest} activeOpacity={0.7}>
      <S.WrapperAvatar>
        {photo ? (
          <S.ImgProduct source={{ uri: photo }} resizeMode="contain" />
        ) : (
          <S.TitleAvatar>{title_avatar}</S.TitleAvatar>
        )}
      </S.WrapperAvatar>
      <S.WrapperInfo>
        {type_acronym && (
          <S.WrapperFlag>
            <S.TitleFlag>{CAcronym[type_acronym]}</S.TitleFlag>
          </S.WrapperFlag>
        )}
        <S.Title>
          {title?.length > 18 ? `${title?.substring(0, 18)}...` : title}
        </S.Title>
      </S.WrapperInfo>
      {type === "sync" ? (
        <Sync width={RFPercentage(3.3)} height={RFPercentage(3.3)} />
      ) : (
        <S.WrapperDot>{active && <S.Dot />}</S.WrapperDot>
      )}
    </S.Wrapper>
  );
};
