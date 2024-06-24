import { useFetchMe } from '@/shared/queries';
import { FormItemList } from './item.form';
import { Typography } from '@/shared/components';
import { useBusinessStore } from '@/modules/business/store/use-business-store';

import * as S from './formData.styles';

export const AddressCard = () => {
  const { data: userData } = useFetchMe();
  const { person, companyData } = useBusinessStore();

  if (person === 'PHYSICAL_PERSON') {
    return (
      <S.Wrapper>
        <Typography title="Endereço" weight="bold" size="large" />
        {userData?.address && (
          <>
            <FormItemList
              title="CEP"
              description={userData?.address?.zipCode}
            />
            <FormItemList
              title="País"
              description={userData?.address?.country}
            />
            <FormItemList
              title="Endereço"
              description={userData?.address?.street}
            />
            <FormItemList
              title="Número"
              description={userData?.address?.number}
            />
            <FormItemList
              title="Estado"
              description={userData?.address?.state}
            />
            <FormItemList
              title="Cidade"
              description={userData?.address?.city}
            />
            <FormItemList
              title="Bairro"
              description={userData?.address?.district}
            />
            {userData?.address?.complement && (
              <FormItemList
                title="Complemento"
                description={userData?.address?.complement}
              />
            )}
          </>
        )}
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <Typography title="Endereço" />
      {companyData.address && (
        <>
          <FormItemList title="CEP" description={companyData.address.zipCode} />
          <FormItemList
            title="País"
            description={companyData.address.country}
          />
          <FormItemList
            title="Endereço"
            description={companyData.address.street}
          />
          <FormItemList
            title="Número"
            description={`${companyData.address.number}`}
          />
          <FormItemList
            title="Estado"
            description={companyData.address.state}
          />
          <FormItemList title="Cidade" description={companyData.address.city} />
          <FormItemList
            title="Bairro"
            description={companyData.address.district}
          />
          {companyData.address.complement && (
            <FormItemList
              title="Complemento"
              description={companyData.address.complement}
            />
          )}
        </>
      )}
    </S.Wrapper>
  );
};
