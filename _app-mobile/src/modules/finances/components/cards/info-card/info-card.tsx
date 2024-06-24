import { Feather } from '@expo/vector-icons';
import * as S from './info-card.styles';
import { useFetchBalances } from '@/shared/queries';
import { useTheme } from 'styled-components/native';
import { Button, Typography } from '@/shared/components';
import { useToggleVisibleStore } from '@/shared/store/toggle';
import InfoCardItem from './info-card-item';
import { useInfoCard } from './use-info-card';
import InfoCardSkeleton from './info-card.skeleton';

const InfoCard = () => {
  const theme = useTheme();
  const { balances, toggle, isLoadingBalances, handleChangeVisible } =
    useInfoCard();

  if (isLoadingBalances) {
    return <InfoCardSkeleton />;
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
      <S.WrapperCards>
        <InfoCardItem balance={balances?.totalBalance} type="total" />
        <InfoCardItem balance={balances?.availableBalance} type="balance" />
        <InfoCardItem balance={balances?.pendingBalance} type="pending" />
        <InfoCardItem
          balance={balances?.securityReserveBalance}
          type="reserved"
        />
      </S.WrapperCards>
    </S.Wrapper>
  );
};

export default InfoCard;
