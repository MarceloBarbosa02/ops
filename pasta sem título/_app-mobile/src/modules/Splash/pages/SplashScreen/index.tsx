import React, { useEffect } from "react";
import { RFPercentage } from "react-native-responsive-fontsize";
import { MotiView } from "moti";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { useTheme } from "styled-components/native";
import { MMKV } from "react-native-mmkv";

import LogoKirvanoLight from "@shared/assets/icons/svg/splash/logo_light.svg";
import LogoKirvanoDark from "@shared/assets/icons/svg/splash/logo_dark.svg";
import { useAuthStore } from "@shared/store/useAuthStore";
import { EnumStorageSignIn } from "@shared/types/enum";
import { useSignInData } from "@shared/hooks/useSignInData";

import * as S from "./styles";

const storage = new MMKV();

export const SplashScreen = () => {
  const theme = useTheme();
  const isFocused = useIsFocused();
  const { navigate } = useNavigation();
  const { loadDataOff } = useSignInData();
  const { token, isSPlashShow } = useAuthStore((store) => {
    return {
      token: store.token,
      isSPlashShow: store.isSPlashShow,
    };
  });

  useEffect(() => {
    const storeData = async () => {
      const _token = storage.getString(EnumStorageSignIn.ACCESS);
      const onboarding = storage.getString(EnumStorageSignIn.ONBOARDING);

      if (_token) {
        loadDataOff();
        return;
      }

      if (onboarding === "onboard") {
        navigate("SignIn");
      } else {
        navigate("OnboardingScreen");
      }
    };

    const timer = setTimeout(() => {
      if (isFocused) {
        if (!isSPlashShow) {
          storeData();
        }
      }
    }, 4000);

    return () => clearTimeout(timer);
  }, [isFocused]);

  return (
    <S.Wrapper>
      <StatusBar
        backgroundColor={theme.theme === "dark" ? "#181818" : "#FDFDFD"}
        barStyle={theme.theme === "dark" ? "light-content" : "dark-content"}
        translucent
      />
      <MotiView
        from={{
          scale: 1,
        }}
        animate={{
          scale: 1.7,
        }}
        transition={{
          type: "timing",
          duration: 2000,
          repeat: 2,
        }}
      >
        {theme.theme === "dark" ? (
          <LogoKirvanoLight
            width={RFPercentage(11)}
            height={RFPercentage(11)}
          />
        ) : (
          <LogoKirvanoDark width={RFPercentage(11)} height={RFPercentage(11)} />
        )}
      </MotiView>
    </S.Wrapper>
  );
};
