import { FormProvider } from 'react-hook-form';

import {
  FooterCard,
  Input,
  ModalScreen,
  Typography,
} from '@/shared/components';
import { SearchIcon } from '@/shared/assets/components';

import { useAddBusiness } from './use-add-business';
import { CNPJNotFoundCard } from '../components/cards';

import * as S from './business.modal.styles';

const SearchBusinessModalScreen = () => {
  const {
    step,
    isNotError,
    methodsSearch,
    isPendingSearchCompany,
    handleNavigationClose,
    handleSearchCNPJ,
  } = useAddBusiness();

  return (
    <ModalScreen
      title={step === 'profile' ? 'Adicionar negócio' : 'Pessoa Jurídica'}
      handleNavigateRight={handleNavigationClose}>
      <S.Wrapper>
        <S.Container>
          <FormProvider {...methodsSearch}>
            <Typography
              title="CNPJ"
              style={{ marginBottom: -16 }}
              variant="subtitle"
              size="large"
            />
            <Input
              control={methodsSearch.control}
              name="companyNumber"
              label=" "
              placeholder="Digite um CNPJ"
              mask
              type="custom"
              options={{ mask: '99.999.999/9999-99' }}
            />
          </FormProvider>
          {isNotError && <CNPJNotFoundCard />}
        </S.Container>
        <FooterCard
          handleOnPressLeft={handleNavigationClose}
          handleOnPressRight={handleSearchCNPJ}
          titleLeft="Cancelar"
          titleRight="Pesquisar"
          colorRight="success"
          isLoading={isPendingSearchCompany}
          startContent={<SearchIcon />}
        />
      </S.Wrapper>
    </ModalScreen>
  );
};

export default SearchBusinessModalScreen;
