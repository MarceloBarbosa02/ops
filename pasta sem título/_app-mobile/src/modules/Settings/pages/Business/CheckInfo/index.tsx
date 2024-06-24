import React, { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { ScrollView, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { useFetchMe } from "@modules/SignIn/hooks/useSignIn";
import { useCreateCompany } from "@modules/Settings/hooks/useBusiness";
import { IdentifierItem } from "@modules/Settings/components/Items/Identifier";
import { useFetchCompanies } from "@shared/hooks/useCompany";
import { PersonTypes, useBusinessStore } from "@shared/store/useBusinessStore";
import { InputTextMaster } from "@shared/components/TextFields/InputText";
import { LayoutSettings } from "@modules/Settings/components/LayoutSettings";
import { AlertCard } from "@modules/Settings/components/Cards/Alert";
import { IFormNewBusinessSchema } from "@shared/types/validations/profile";
import { showToast } from "@shared/store/useToastStore";

import * as S from "./styles";

export const CheckInfoScreen = () => {
  const { goBack, navigate } = useNavigation();
  const { data: userData } = useFetchMe();
  const { refetch: refetchCompanies } = useFetchCompanies();
  const nicknamePFRef = useRef<TextInput>(null);
  const { companyData, person, document } = useBusinessStore((store) => {
    return {
      companyData: store.companyData,
      person: store.person,
      document: store.document,
    };
  });
  const { mutate, isLoading } = useCreateCompany();
  const { control, setValue, handleSubmit } = useForm<IFormNewBusinessSchema>();

  const handleCreateCompany = ({ nickname }: IFormNewBusinessSchema) => {
    const payload = {
      type: person as PersonTypes,
      document: document,
      nickname: nickname
        ? nickname
        : person === "PHYSICAL_PERSON"
        ? userData?.name
        : companyData?.fantasyName,
    };

    mutate(payload, {
      onSuccess() {
        refetchCompanies();
        showToast({
          type: "success",
          message: "Negócio registrado com sucesso!.",
        });
        navigate("SettingsScreen");
      },
      onError(error: any) {
        showToast({
          type: "error",
          message: error?.response?.data?.message ?? "Ops! Algo deu errado.",
        });
      },
    });
  };

  useEffect(() => {
    if (person === "PHYSICAL_PERSON") {
      setValue("nickname", "Pessoa Física", { shouldValidate: true });
      return;
    }
    nicknamePFRef.current?.focus();
  }, []);

  return (
    <LayoutSettings
      title="Novo negócio"
      submit={handleSubmit(handleCreateCompany)}
      handleNavigateBack={goBack}
      isLoading={isLoading}
    >
      <S.Wrapper>
        <ScrollView showsHorizontalScrollIndicator={false}>
          <S.Container>
            {person === "PHYSICAL_PERSON" && (
              <>
                <S.Content>
                  <S.Title>Apelido interno PF</S.Title>
                  <InputTextMaster
                    control={control}
                    name="nickname"
                    property="Higher"
                    placeholder="Digite um apelido para o negócio"
                    editable={!isLoading}
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Identificação</S.Label>
                  <IdentifierItem identifier="Nome" content={userData?.name ?? ''} />
                  <IdentifierItem identifier="Nacionalidade" content="Brasil" />
                  <IdentifierItem identifier="Idioma" content="Português" />
                  <IdentifierItem
                    identifier="CPF"
                    content={userData?.document ?? ''}
                  />
                  <IdentifierItem
                    identifier="Nascimento"
                    content={userData?.birthDate ?? ''}
                  />
                  <IdentifierItem
                    identifier="Telefone"
                    content={userData?.phoneNumber ?? ''}
                  />
                  <IdentifierItem
                    identifier="E-mail"
                    content={userData?.email ?? ''}
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Endereço</S.Label>
                  <IdentifierItem
                    identifier="CEP"
                    content={userData?.address.zipCode ?? ''}
                  />
                  <IdentifierItem
                    identifier="País"
                    content={userData?.address.country ?? ''}
                  />
                  <IdentifierItem
                    identifier="Endereço"
                    content={userData?.address.street ?? ''}
                  />
                  <IdentifierItem
                    identifier="Número"
                    content={userData?.address.number ?? ''}
                  />
                  <IdentifierItem
                    identifier="Estado"
                    content={userData?.address.state ?? ''}
                  />
                  <IdentifierItem
                    identifier="Cidade"
                    content={userData?.address.city ?? ''}
                  />
                  <IdentifierItem
                    identifier="Bairro"
                    content={userData?.address.district ?? ''}
                  />
                  <IdentifierItem
                    identifier="Complemento"
                    content={userData?.address.complement ?? ''}
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Pagamento</S.Label>
                  <AlertCard text="Seu recebimento via PIX está atrelado ao CPF informado" />
                </S.Content>
              </>
            )}

            {person === "LEGAL_PERSON" && (
              <>
                <S.Title>Apelido interno PJ</S.Title>
                <InputTextMaster
                  textRef={nicknamePFRef}
                  control={control}
                  name="nickname"
                  placeholder="Digite um apelido para o negócio"
                  editable={!isLoading}
                />
                <S.Content>
                  <S.Label>Identificação</S.Label>
                  <IdentifierItem
                    identifier="Razão social"
                    content={companyData?.name}
                  />
                  <IdentifierItem
                    identifier="Nome fantasia"
                    content={companyData?.fantasyName}
                  />
                  <IdentifierItem identifier="País" content="Brasil" />
                  <IdentifierItem
                    identifier="Situação cadastral"
                    content="Ativa"
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Endereço</S.Label>
                  <IdentifierItem
                    identifier="CEP"
                    content={companyData?.address?.zipCode}
                  />
                  <IdentifierItem
                    identifier="País"
                    content={companyData?.address?.country}
                  />
                  <IdentifierItem
                    identifier="Endereço"
                    content={companyData?.address?.street}
                  />
                  <IdentifierItem
                    identifier="Número"
                    content={companyData?.address?.number || ""}
                  />
                  <IdentifierItem
                    identifier="Estado"
                    content={companyData?.address?.state}
                  />
                  <IdentifierItem
                    identifier="Cidade"
                    content={companyData?.address?.city}
                  />
                  <IdentifierItem
                    identifier="Bairro"
                    content={companyData?.address?.district}
                  />
                  <IdentifierItem
                    identifier="Complemento"
                    content={companyData?.address?.complement || ""}
                  />
                </S.Content>
                <S.Content>
                  <S.Label>Pagamento</S.Label>
                  <AlertCard text="Seu recebimento via PIX está atrelado ao CNPJ informado" />
                </S.Content>
              </>
            )}
          </S.Container>
        </ScrollView>
      </S.Wrapper>
    </LayoutSettings>
  );
};
