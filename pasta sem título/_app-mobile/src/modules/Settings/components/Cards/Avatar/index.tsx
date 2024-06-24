import React, { useEffect, useMemo, useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { ActivityIndicator } from "react-native";

import Pen from "@shared/assets/icons/svg/editionProfile/pen_update.svg";
import { useCompanyStore } from "@shared/store";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";

import { useAvatar } from "./hooks/useAvatar";
import * as S from "./styles";

export const AvatarCard = () => {
  const theme = useTheme();
  const [isLoadingImg, setIsLoadingImg] = useState<boolean>(true);
  const { data: userData } = useFetchMe();
  const { image, isLoading, handlePickImage, handleChangeImage } = useAvatar();
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const avatar_title = userData?.name || currentCompany?.name;

  useEffect(() => {
    if (userData?.photo) {
      handleChangeImage(userData?.photo);
    }
    setIsLoadingImg(false);
  }, [userData?.photo]);

  const circleTextAvatar = useMemo(() => {
    if (avatar_title) {
      const _title = avatar_title?.split(" ");
      const text_avatar = `${_title[0].substring(0, 1).toLocaleUpperCase()}${
        _title[_title?.length - 1]
          ? _title[_title?.length - 1].substring(0, 1).toLocaleUpperCase()
          : ""
      }`;
      return text_avatar;
    } else {
      return "K";
    }
  }, [avatar_title]);

  return (
    <S.Wrapper>
      <S.Content>
        <S.Container>
          {isLoadingImg ? (
            <ActivityIndicator
              color={theme.colors.color_neutral_0}
              size="large"
            />
          ) : (
            <>
              {image !== "" ? (
                <S.ImgAvatar source={{ uri: image }} />
              ) : (
                <S.Title>{circleTextAvatar}</S.Title>
              )}
            </>
          )}
        </S.Container>
        {userData?.photo ? (
          <S.BtnAvatar onPress={handlePickImage} activeOpacity={0.7}>
            {isLoading ? <ActivityIndicator /> : <Pen width={20} height={20} />}
          </S.BtnAvatar>
        ) : (
          <S.BtnAvatar onPress={handlePickImage} activeOpacity={0.7}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <Feather
                name="plus"
                size={16}
                color={theme.colors.color_blue_40}
              />
            )}
          </S.BtnAvatar>
        )}
      </S.Content>
    </S.Wrapper>
  );
};
