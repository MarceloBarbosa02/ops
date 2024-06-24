import React from "react";
import { FormProvider } from "react-hook-form";
import { ScrollView } from "react-native";

import { IdentificationCard } from "@modules/Settings/components/Cards/Identification";
import { AddressCard } from "@modules/Settings/components/Cards/Address";
import { ChangePasswordCard } from "@modules/Settings/components/Cards/ChangePassword";
import { LayoutSettings } from "@modules/Settings/components/LayoutSettings";
import { BiometricCard } from "@modules/Settings/components/Cards/Biometric";

import { useEditProfile } from "./hook/useEditProfile";
import * as S from "./styles";

export function EditProfileScreen() {
  const {
    methods,
    userData,
    refScroll,
    isBiometrics,
    isValuesBalance,
    isLoadingProfile,
    circleTextAvatar,
    goBack,
    handleSubmit,
  } = useEditProfile();

  return (
    <LayoutSettings
      title="Editar perfil"
      submit={handleSubmit}
      handleNavigateBack={goBack}
      isLoading={isLoadingProfile}
    >
      <ScrollView
        ref={refScroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={{
          flexGrow: 1,
        }}
      >
        {isLoadingProfile && <S.WrapperLoading />}

        <FormProvider {...methods}>
          <S.Wrapper>
            <S.PhotoProfileArea>
              <S.WrapperAvatar>
                {userData?.photo ? (
                  <S.PhotoProfile source={{ uri: userData?.photo }} />
                ) : (
                  <S.TitleAvatar>{circleTextAvatar}</S.TitleAvatar>
                )}
              </S.WrapperAvatar>
            </S.PhotoProfileArea>

            {(isValuesBalance || isBiometrics) && <BiometricCard />}

            <IdentificationCard isLoading={isLoadingProfile} />

            <S.WrapperLine>
              <S.Line />
            </S.WrapperLine>

            <AddressCard />

            <ChangePasswordCard />
          </S.Wrapper>
        </FormProvider>
      </ScrollView>
    </LayoutSettings>
  );
}
