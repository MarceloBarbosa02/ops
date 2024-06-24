import { TabsScreen } from '@/shared/components';

import { HistoryCard } from '../../components/history';
import { useHomeSales } from './use-home-sales';
import { useHistory } from '../../components/history/use-history';

const HomeSalesScreen = () => {
  const { isRefreshing, quantitySales, handleRefresh } = useHomeSales();
  const { refScroll, headerSales, isFetchingListSales } = useHistory();

  return (
    <TabsScreen
      title="Vendas"
      isScroll={false}
      refScroll={refScroll}
      headerCustom={headerSales}
      refresh={isRefreshing}
      handleRefresh={handleRefresh}
      isFetching={isFetchingListSales}
      endContent={quantitySales}>
      <HistoryCard />
    </TabsScreen>
  );
};

export default HomeSalesScreen;
