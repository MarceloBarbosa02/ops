import {
  Button,
  CalendarModal,
  FooterCard,
  ModalScreen,
  Typography,
} from '@/shared/components';
import { CategoryFilterCard } from '../../components/form/category-form';
import { TypeTransactionFilterCard } from '../../components/form/type-transaction-form';

import * as S from './modal.styles';
import { useFinancesStore } from '../../store/use-finances-store';
import { format } from 'date-fns';
import { useFiltersExtract } from './use-filter-extract';
import { useTheme } from 'styled-components/native';
import { CalendarIcon, CheckIcon, ClosedIcon } from '@/shared/assets';
import { View } from 'react-native';

const FiltersScreenModal = () => {
  const theme = useTheme();
  const {
    params,
    isOpenModal,
    modalCalendar,
    handleClosed,
    handleSelectDate,
    handleNavigationBack,
    handleShowModalCalendar,
  } = useFiltersExtract();

  return (
    <ModalScreen title="Filtrar" handleNavigateRight={handleClosed}>
      <S.Wrapper>
        <View>
          <S.WrapperButton>
            <S.WrapperButtonCalendar
              isActive={isOpenModal}
              activeOpacity={0.7}
              onPress={handleShowModalCalendar}>
              <CalendarIcon isActive />
              <Typography
                title={`${format(
                  params.dateFilter?.[0],
                  'dd/MM/yyyy'
                )}  |  ${format(params.dateFilter?.[1], 'dd/MM/yyyy')}`}
              />
              <ClosedIcon />
            </S.WrapperButtonCalendar>
          </S.WrapperButton>
          <CategoryFilterCard />
          <TypeTransactionFilterCard />
        </View>
        <FooterCard
          handleOnPressLeft={handleClosed}
          handleOnPressRight={handleNavigationBack}
          titleLeft="Cancelar"
          titleRight="Aplicar filtros"
          colorRight="success"
          isLoading={false}
          startContent={<CheckIcon />}
        />
      </S.Wrapper>
      <CalendarModal
        close={handleShowModalCalendar}
        isShow={modalCalendar}
        defaultDate={params.dateFilter}
        handleSelectDate={handleSelectDate}
      />
    </ModalScreen>
  );
};

export default FiltersScreenModal;
