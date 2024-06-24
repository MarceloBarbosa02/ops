import { useFetchMe } from '@/shared/queries';
import { FormItemList } from './item.form';
import { Typography } from '@/shared/components';
import { useBusinessStore } from '@/modules/business/store/use-business-store';
import { formatPhoneDDI } from '@/shared';

import * as S from './formData.styles';

export const IdentifyCard = () => {
  const { data: userData } = useFetchMe();
  const { person, companyData } = useBusinessStore();

  if (person === 'PHYSICAL_PERSON') {
    return (
      <S.Wrapper>
        <Typography title="Identificação" weight="bold" size="large" />
        {userData && (
          <>
            <FormItemList title="Nome" description={userData.name} />
            <FormItemList title="Nacionalidade" description="Brasil" />
            <FormItemList title="Idioma" description="Português" />
            <FormItemList title="CPF" description={userData.document} />
            <FormItemList title="Nascimento" description={userData.birthDate} />
            <FormItemList
              title="Telefone"
              description={formatPhoneDDI(userData.phoneNumber)}
            />
            <FormItemList title="E-mail" description={userData.email} />
          </>
        )}
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <Typography title="Identificação" />
      {companyData && (
        <>
          <FormItemList title="Razão social" description={companyData.name} />
          <FormItemList
            title="Nome fantasia"
            description={companyData.fantasyName}
          />
          <FormItemList title="CNPJ" description={companyData.document} />
          <FormItemList
            title="País"
            description={companyData.address.country}
          />
          <FormItemList title="Situação cadastral" description="Ativa" />
        </>
      )}
    </S.Wrapper>
  );
};
