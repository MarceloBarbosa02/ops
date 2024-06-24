import React, { useMemo } from "react";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

import { ButtonMaster } from "@shared/components/Buttons";
import { TypographyTextMaster } from "@shared/components/Typography";
import { useBiometricNavigation } from "@shared/store/useBiometricNavigation";
import { EnumBiometryStatus } from "@shared/types/enum";
import { TBiometryStatus } from "@shared/types/entities";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";

import * as S from "./styles";

export const VerifyIdentity = () => {
  const theme = useTheme();
  const { navigate } = useNavigation();
  const { data: userData } = useFetchMe();
  const { handleChangeNavigation } = useBiometricNavigation((store) => {
    return {
      handleChangeNavigation: store.handleChangeNavigation,
    };
  });

  const handleNavigation = () => {
    handleChangeNavigation("finance");
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

  const msg_biometric = {
    PENDING: "pendente",
    CAPTURE: "em análise",
    STORED_DOCUMENTS: "em análise",
    SENT_DOCUMENTS: "em análise",
    MEDIATION: "em análise",
    APPROVED: "aprovada",
    REFUSED: "reprovada",
    ERROR: "reprovada",
  };

  const isDisabled = useMemo(() => {
    return (
      [
        EnumBiometryStatus.APPROVED,
        EnumBiometryStatus.MEDIATION,
        EnumBiometryStatus.SENT_DOCUMENTS,
        EnumBiometryStatus.STORED_DOCUMENTS,
        EnumBiometryStatus.CAPTURE,
      ].filter((item) => item === userData?.biometryStatus)?.length > 0
    );
  }, [userData?.biometryStatus]);

  const refused = userData?.biometryStatus === EnumBiometryStatus.REFUSED;
  const pendent = userData?.biometryStatus === EnumBiometryStatus.PENDING;

  return (
    <S.Wrapper>
      {refused && (
        <TypographyTextMaster
          variant="body"
          typeWeight="regular"
          fontSize={theme.fonts.sizes.smallX}
          color={theme.colors.gray_l600_d300}
        >
          A verificação de identidade foi{" "}
          <TypographyTextMaster
            variant="body"
            typeWeight="bold"
            fontSize={theme.fonts.sizes.smallX}
            color={colors_flag[userData?.biometryStatus as TBiometryStatus]}
          >
            {msg_biometric[userData?.biometryStatus as TBiometryStatus]}
          </TypographyTextMaster>
          . Tente novamente para solicitar um saque.
        </TypographyTextMaster>
      )}

      {pendent && (
        <TypographyTextMaster
          variant="body"
          typeWeight="regular"
          fontSize={theme.fonts.sizes.smallX}
          color={theme.colors.gray_l600_d300}
        >
          A verificação de identidade está{" "}
          <TypographyTextMaster
            variant="body"
            typeWeight="bold"
            fontSize={theme.fonts.sizes.smallX}
            color={colors_flag[userData?.biometryStatus as TBiometryStatus]}
          >
            {msg_biometric[userData?.biometryStatus as TBiometryStatus]}
          </TypographyTextMaster>
          , realize a biometria e aguarde a aprovação para solicitar um saque.
        </TypographyTextMaster>
      )}

      {!refused && !pendent && (
        <TypographyTextMaster
          variant="body"
          typeWeight="regular"
          fontSize={theme.fonts.sizes.smallX}
          color={theme.colors.gray_l600_d300}
        >
          A verificação de identidade está{" "}
          <TypographyTextMaster
            variant="body"
            typeWeight="bold"
            fontSize={theme.fonts.sizes.smallX}
            color={colors_flag[userData?.biometryStatus as TBiometryStatus]}
          >
            {msg_biometric[userData?.biometryStatus as TBiometryStatus]}
          </TypographyTextMaster>
          , aguarde a aprovação para solicitar um saque.
        </TypographyTextMaster>
      )}

      <S.WrapperInput>
        <TypographyTextMaster
          variant="subtitle"
          fontSize={theme.fonts.sizes.small}
          color={theme.colors.gray_l400_d500}
        >
          Valor
        </TypographyTextMaster>
        <TypographyTextMaster
          variant="body"
          typeWeight="regular"
          fontSize={theme.fonts.sizes.medium}
          color={theme.colors.gray_l400_d500}
        >
          R$ 0,00
        </TypographyTextMaster>
      </S.WrapperInput>
      <ButtonMaster
        title="Verificar identidade"
        variant="primary"
        onPress={handleNavigation}
        disabled={isDisabled}
      />
    </S.Wrapper>
  );
};
