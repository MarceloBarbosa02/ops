import React, { useMemo } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { ButtonMaster, TypographyTextMaster } from "@shared/components";
import { useBiometricNavigation } from "@shared/store/useBiometricNavigation";
import { EnumBiometryStatus, TBiometryStatus } from "@shared/types";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { msg_status_biometric } from "@modules/Settings/mocks/status_biometric";

import * as S from "./styles";

export const BiometricCard = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { data: userData } = useFetchMe();
  const { handleChangeNavigation } = useBiometricNavigation((store) => {
    return {
      handleChangeNavigation: store.handleChangeNavigation,
    };
  });

  const handleNavigation = () => {
    handleChangeNavigation("profile");
    navigate("InfoUserScreen");
  };

  const colors_flag = {
    PENDING: theme.colors.orange_l600_d300,
    CAPTURE: theme.colors.blue_l600_d300,
    STORED_DOCUMENTS: theme.colors.blue_l600_d300,
    SENT_DOCUMENTS: theme.colors.blue_l600_d300,
    MEDIATION: theme.colors.blue_l600_d300,
    APPROVED: theme.color_buttons.success_default,
    REFUSED: theme.colors.red_l600_d300,
    ERROR: theme.colors.red_l600_d300,
  };

  const isDisabled = useMemo(() => {
    return (
      [
        EnumBiometryStatus.APPROVED,
        EnumBiometryStatus.MEDIATION,
        EnumBiometryStatus.SENT_DOCUMENTS,
        EnumBiometryStatus.CAPTURE,
        EnumBiometryStatus.STORED_DOCUMENTS,
      ].filter((item) => item === userData?.biometryStatus)?.length > 0
    );
  }, [userData?.biometryStatus]);

  return (
    <S.Container>
      {userData?.verificationStatus === "BIOMETRY_APPROVED" ? (
        <S.Wrapper>
          <S.WrapperHeader>
            <TypographyTextMaster
              variant="body"
              typeWeight="bold"
              fontSize={theme.fonts.sizes.mediumX}
              color={theme.colors.gray_l900_d50}
            >
              Biometria
            </TypographyTextMaster>
            <S.WrapperFlag color={theme.color_buttons.success_default}>
              <TypographyTextMaster
                variant="body"
                typeWeight="regular"
                fontSize={theme.fonts.sizes.smallX}
                color={theme.color_buttons.success_default}
              >
                Verificado
              </TypographyTextMaster>
            </S.WrapperFlag>
          </S.WrapperHeader>
        </S.Wrapper>
      ) : (
        <S.Wrapper>
          <S.WrapperHeader>
            <TypographyTextMaster
              variant="body"
              typeWeight="bold"
              fontSize={theme.fonts.sizes.mediumX}
              color={theme.colors.gray_l900_d50}
            >
              Biometria
            </TypographyTextMaster>
            <S.WrapperFlag
              color={colors_flag[userData?.biometryStatus as TBiometryStatus]}
            >
              <TypographyTextMaster
                variant="body"
                typeWeight="regular"
                fontSize={theme.fonts.sizes.smallX}
                color={colors_flag[userData?.biometryStatus as TBiometryStatus]}
              >
                {
                  msg_status_biometric[
                    userData?.biometryStatus as TBiometryStatus
                  ]
                }
              </TypographyTextMaster>
            </S.WrapperFlag>
          </S.WrapperHeader>
          <S.WrapperInfo>
            <TypographyTextMaster
              variant="body"
              typeWeight="regular"
              fontSize={theme.fonts.sizes.smallX}
              color={theme.colors.gray_l700_d200}
            >
              <TypographyTextMaster
                variant="body"
                typeWeight="bold"
                fontSize={theme.fonts.sizes.smallX}
                color={theme.colors.gray_l900_d50}
              >
                Aviso:{" "}
              </TypographyTextMaster>
              para solicitar um saque, é necessário verificar sua identidade
              aqui.
            </TypographyTextMaster>
          </S.WrapperInfo>
          <ButtonMaster
            title="Cadastrar Biometria"
            variant="primary"
            icon={
              <MaterialIcons
                name="keyboard-arrow-right"
                size={24}
                color={theme.color_buttons.bg_outlined}
              />
            }
            positionIcon="right"
            onPress={handleNavigation}
            disabled={isDisabled}
          />
        </S.Wrapper>
      )}
    </S.Container>
  );
};
