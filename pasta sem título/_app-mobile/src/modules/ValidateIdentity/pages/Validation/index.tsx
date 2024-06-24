import React from "react";
import { useTheme } from "styled-components/native";
import { useNavigation, useRoute } from "@react-navigation/native";

import Success from "@shared/assets/icons/svg/check_list.svg";
import Error from "@shared/assets/icons/svg/error.svg";
import Warning from "@shared/assets/icons/svg/warning_validation.svg";
import { BiometricLayout } from "@shared/components/Layouts/BiometricLayout";
import { ButtonMaster } from "@shared/components/Buttons/ButtonMaster";

import * as S from "./styles";

interface ValidationProps {
  type: "release" | "progress" | "error";
}

export const ValidationScreen = () => {
  const theme = useTheme();
  const routeParams = useRoute();
  const { navigate, goBack } = useNavigation();
  const { type } = routeParams?.params as ValidationProps;

  const handleNavigationBack = () => {
    navigate("InfoUserScreen");
  };

  const handleNavigation = () => {
    navigate("FinancesRoutes");
  };

  if (type === "progress") {
    return (
      <BiometricLayout routeParam={handleNavigation}>
        <S.Wrapper>
          <S.Container>
            <Warning />
            <S.Title>Validação em andamento</S.Title>
            <S.Description>
              Seus dados de verificação foram enviados com sucesso, em breve
              você terá um retorno. Estamos trabalhando para que sua validação
              seja atendida de forma ágil. 🚀
            </S.Description>
            <ButtonMaster
              title="Voltar"
              variant="secondary"
              size="small"
              onPress={handleNavigation}
            />
          </S.Container>
        </S.Wrapper>
      </BiometricLayout>
    );
  }

  if (type === "error") {
    return (
      <BiometricLayout routeParam={handleNavigation}>
        <S.Wrapper>
          <S.Container>
            <Error />
            <S.Title>Erro na validação</S.Title>
            <S.Description>
              Houve uma falha na validação da sua biometria. Tente novamente.
            </S.Description>
            <S.WrapperButtonError>
              <ButtonMaster
                title="Cancelar"
                variant="secondary"
                size="small"
                type="link"
                sizeWidth={48}
                onPress={handleNavigation}
              />
              <ButtonMaster
                title="Tente novamente"
                variant="primary"
                size="small"
                sizeWidth={48}
                onPress={handleNavigationBack}
              />
            </S.WrapperButtonError>
          </S.Container>
        </S.Wrapper>
      </BiometricLayout>
    );
  }

  return (
    <BiometricLayout routeParam={handleNavigation}>
      <S.Wrapper>
        <S.Container>
          <Success fill={theme.colors.color_green_40} width={48} height={48} />
          <S.Title>Validação realizada</S.Title>
          <S.Description>
            Seus dados de verificação foram enviados e aprovados com sucesso.
            Agora você já pode começar a faturar com a Kirvano. 🚀
          </S.Description>
          <ButtonMaster
            title="Voltar"
            variant="secondary"
            size="small"
            onPress={handleNavigation}
          />
        </S.Container>
      </S.Wrapper>
    </BiometricLayout>
  );
};
