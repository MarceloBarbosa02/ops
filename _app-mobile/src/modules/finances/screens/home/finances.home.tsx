import { useTheme } from 'styled-components/native';
import { Entypo } from '@expo/vector-icons';

import { TabsScreen, Typography } from '@/shared/components';

import { EmptyCard, InfoCard, WithdrawalsCards } from '../../components/cards';

import { useFinancesHome } from './use-finances.home';

import * as S from './finances.home.styles';

const FinancesScreen = () => {
  const theme = useTheme();
  const { profile, isRefreshing, handleNavigation, handleRefresh } =
    useFinancesHome();

  return (
    <TabsScreen
      title="Finanças"
      handleRefresh={handleRefresh}
      isFetching={isRefreshing}>
      {!profile && <EmptyCard isEmptyRegister />}
      {profile && (
        <S.Wrapper>
          <InfoCard />
          <WithdrawalsCards />
          <S.WrapperButton onPress={handleNavigation}>
            <Typography title="Extrato" weight="bold" size="small" />
            <Entypo
              name="chevron-small-right"
              size={24}
              color={theme.gray[900]}
            />
          </S.WrapperButton>
        </S.Wrapper>
      )}
    </TabsScreen>
  );
};

export default FinancesScreen;
