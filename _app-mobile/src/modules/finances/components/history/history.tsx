import { Typography } from '@/shared/components';
import * as S from './history.styles';
import { ReceiptsExtract } from '../cards';
import { useHistory } from './use-history';

const HistoryCard = () => {
  const { dataFormatExtracts, isValidDone, isValidPending } = useHistory();

  return (
    <S.Wrapper>
      {dataFormatExtracts?.pending?.length ? (
        <S.WrapperSeparate>
          <Typography
            title="PRÓXIMOS LANÇAMENTOS"
            variant="subtitle"
            size="medium"
            weight="bold"
          />
        </S.WrapperSeparate>
      ) : null}
      {dataFormatExtracts.pending?.map((item) => (
        <ReceiptsExtract key={item.uuid} data={item} />
      ))}
      {isValidPending && isValidDone ? (
        <S.WrapperSeparate line>
          <S.LineSeparate />
        </S.WrapperSeparate>
      ) : null}
      {dataFormatExtracts.done?.map((item) => (
        <ReceiptsExtract key={item.uuid} data={item} />
      ))}
    </S.Wrapper>
  );
};

export default HistoryCard;
