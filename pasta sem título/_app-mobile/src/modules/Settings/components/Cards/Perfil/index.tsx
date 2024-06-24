import React from "react";
import Tooltip from "rn-tooltip";
import { useTheme } from "styled-components/native";

import Info from "@shared/assets/icons/svg/editionProfile/info.svg";
import { formatPhoneDDI } from "@shared/utils/formatters";
import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { getProfileStatus } from "@modules/Settings/utils/profile_status";
import { TVerificationStatus } from "@shared/types";

import { InfoLineItem } from "../../Items/InfoLine";
import * as S from "./styles";
import { TooltipCustom } from "@shared/components/tooltip";

export const PerfilCard = () => {
  const theme = useTheme();
  const { data: userData } = useFetchMe();

  const colors_flag = {
    success: theme.color_buttons.success_default,
    warning: theme.colors.orange_l600_d300,
    info: theme.colors.blue_l600_d300,
    danger: theme.colors.red_l600_d300,
  };

  return (
    <S.Wrapper>
      <InfoLineItem title="Nome" description={userData?.name || ""} />
      <InfoLineItem title="E-mail" description={userData?.email || ""} />
      <InfoLineItem title="Documento" description={userData?.document || ""} />
      {userData?.verificationStatus && (
        <InfoLineItem
          title="Verificação"
          description=""
          tooltip={
            <S.WrapperIcon>
              <S.Title
                color={
                  colors_flag[
                    getProfileStatus(
                      userData?.verificationStatus as TVerificationStatus
                    ).variant
                  ]
                }
              >
                {
                  getProfileStatus(
                    userData?.verificationStatus as TVerificationStatus
                  ).label
                }
              </S.Title>
              <TooltipCustom
                description={
                  getProfileStatus(
                    userData?.verificationStatus as TVerificationStatus
                  ).tooltip
                }
                title=""
                endContent
                typeWeight="medium"
              />
              {/* actionType="press"
                backgroundColor={theme.colors.blue_l600_d300}
                overlayColor={theme.colors.opacity_d600}
                popover={
                  <S.TitleTooltip>
                    {
                      getProfileStatus(
                        userData?.verificationStatus as TVerificationStatus
                      ).tooltip
                    }
                  </S.TitleTooltip>
                }
                height="auto"
              >
                <S.WrapperTooltipIcon>
                  <Info />
                </S.WrapperTooltipIcon>
              </Tooltip> */}
            </S.WrapperIcon>
          }
        />
      )}
      <InfoLineItem
        title="Telefone"
        description={formatPhoneDDI(userData?.phoneNumber || "")}
      />
      <InfoLineItem title="Idioma" description="Português" />
    </S.Wrapper>
  );
};
