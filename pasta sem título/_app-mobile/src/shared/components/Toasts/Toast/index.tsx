import React, { useCallback, useEffect, useRef } from "react";
import { useTheme } from "styled-components";
import { Animated, Linking } from "react-native";

import { IMessageProps } from "@shared/types";
import { useToastStore } from "@shared/store/useToastStore";
import { ButtonMaster } from "@shared/components/Buttons";

import IconError from "../../../assets/icons/svg/toast/error.svg";
import IconInfo from "../../../assets/icons/svg/toast/info.svg";
import IconSuccess from "../../../assets/icons/svg/toast/success.svg";
import IconWarning from "../../../assets/icons/svg/toast/warning.svg";
import * as S from "./styles";

export const Toast = ({
  message,
  id,
  type,
  delay = 3000,
  isSettings,
}: IMessageProps) => {
  const opacity = useRef(new Animated.Value(0)).current;
  const theme = useTheme();
  const { hideToast } = useToastStore((store) => {
    return {
      hideToast: store.hideToast,
    };
  });

  const getTypeIcon = () => {
    switch (type) {
      case "success":
        return <IconSuccess width={24} height={24} />;
      case "error":
        return <IconError width={24} height={24} />;
      case "warning":
        return <IconWarning width={24} height={24} />;
      case "info":
        return <IconInfo width={24} height={24} />;

      default:
        return <IconInfo width={24} height={24} />;
    }
  };

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.delay(delay),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start(() => {
      hideToast(id);
    });
  }, [id]);

  const handlePress = useCallback(async () => {
    hideToast(id);
    await Linking.openSettings();
  }, []);

  return (
    <Animated.View
      style={{
        opacity,
        transform: [
          {
            translateY: opacity.interpolate({
              inputRange: [0, 1],
              outputRange: [-20, -10],
            }),
          },
        ],
        margin: 10,
        marginBottom: 5,
        backgroundColor: theme.colors.color_neutral_0,
        borderRadius: 8,
      }}
    >
      <S.Wrapper>
        <S.Container>
          {getTypeIcon()}
          <S.WrapperInfo>
            <S.Description>{message}</S.Description>
          </S.WrapperInfo>
        </S.Container>
        {isSettings && (
          <S.WrapperButton>
            <ButtonMaster
              title="Acessar configurações"
              variant="primary"
              type="outlined"
              onPress={handlePress}
            />
          </S.WrapperButton>
        )}
      </S.Wrapper>
    </Animated.View>
  );
};
