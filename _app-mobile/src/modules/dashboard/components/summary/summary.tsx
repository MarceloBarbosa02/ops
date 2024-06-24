import { useTheme } from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

import { Button, Typography } from '@/shared/components';

import SummaryItem from './summary.item';
import { useSummary } from './use-summary';
import SummarySkeleton from './summary.skeleton';

import * as S from './summary.styles';

const SummaryCard = () => {
  const theme = useTheme();
  const { balances, toggle, isLoadingBalances, handleChangeVisible } =
    useSummary();

  if (isLoadingBalances) {
    return <SummarySkeleton />;
  }

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <Typography
          title="RESUMO"
          variant="subtitle"
          weight="medium"
          size="medium"
        />
        <Button
          variant="link"
          sizeWidth="auto"
          onPress={handleChangeVisible}
          startContent={
            toggle ? (
              <Feather name="eye" size={16} color={theme.gray[700]} />
            ) : (
              <Feather name="eye-off" size={16} color={theme.gray[700]} />
            )
          }
        />
      </S.WrapperHeader>
      <SummaryItem
        widthSize={100}
        type="today"
        balance={balances?.currentDayBalance}
        previousDayBalance={balances?.previousDayBalance}
      />
      <S.WrapperItem>
        <SummaryItem
          widthSize={49}
          type="pending"
          balance={balances?.pendingBalance}
        />
        <SummaryItem
          widthSize={49}
          type="balance"
          balance={balances?.availableBalance}
        />
      </S.WrapperItem>
    </S.Wrapper>
  );
};

export default SummaryCard;
