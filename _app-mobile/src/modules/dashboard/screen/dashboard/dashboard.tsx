import { TabsScreen } from '@/shared/components';

import { JourneyCards } from '../../components/journey';
import { NextStepsCards } from '../../components/next-steps';
import { AccountEvaluationCard } from '../../components/account-evaluation';
import { ConversionCard } from '../../components/sales-conversion';
import { CheckoutConversionCard } from '../../components/checkout-conversion';
import { BillingGraphsCards } from '../../components/billing-graphs';
import { SummaryCard } from '../../components';

import { useDashboard } from './use-dashboard';
import * as S from './dashboard.styles';

const DashboardScreen = () => {
  const { isRefreshing, handleRefresh } = useDashboard();

  return (
    <TabsScreen
      title="Dashboard"
      handleRefresh={handleRefresh}
      refresh={isRefreshing}>
      <SummaryCard />
      <S.Wrapper>
        <JourneyCards location="card" />
        <NextStepsCards />
        <BillingGraphsCards />
        {/* <AccountEvaluationCard /> */}
        <ConversionCard />
        {/* <CheckoutConversionCard /> */}
      </S.Wrapper>
    </TabsScreen>
  );
};

export default DashboardScreen;
