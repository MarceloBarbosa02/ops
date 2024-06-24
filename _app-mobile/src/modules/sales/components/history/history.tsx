import { Pagination } from '@/shared/components';

import { EmptyCards, ReceiptsSalesCards, ValueTotalCards } from '../cards';
import { useHistory } from './use-history';
import SkeletonSalesScreen from '../skeleton/skeleton.sales';

import * as S from './history.styles';

const HistoryCard = () => {
  const { dataListSales, isFetchingListSales, handlePageChange } = useHistory();

  if (isFetchingListSales) {
    return <SkeletonSalesScreen />;
  }

  return (
    <S.Wrapper>
      {!dataListSales || dataListSales?.meta?.total === 0 ? (
        <EmptyCards />
      ) : (
        <>
          <ValueTotalCards />
          {dataListSales?.data.map((item) => (
            <ReceiptsSalesCards key={item.uuid} data={item} />
          ))}
        </>
      )}
      {dataListSales && dataListSales.meta.pages > 1 && (
        <S.WrapperFooter>
          <Pagination
            handleSearch={handlePageChange}
            pageNumber={dataListSales?.meta?.page}
            setPageNumber={() => handlePageChange(dataListSales.meta?.page + 1)}
            totalItems={dataListSales.meta.total}
          />
        </S.WrapperFooter>
      )}
    </S.Wrapper>
  );
};

export default HistoryCard;
