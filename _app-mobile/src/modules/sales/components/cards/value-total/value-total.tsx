import { useHistory } from '../../history/use-history';

import { ValueTotalItem } from './value-total.items';
import * as S from './value-total.styles';

const ValueTotalCards = () => {
  const { dataTotalSales } = useHistory();

  return (
    <S.Wrapper>
      <ValueTotalItem
        title="COMISSÃO"
        value={Number(dataTotalSales?.commission)}
      />
      <ValueTotalItem title="TOTAL" value={Number(dataTotalSales?.total)} />
    </S.Wrapper>
  );
};

export default ValueTotalCards;
