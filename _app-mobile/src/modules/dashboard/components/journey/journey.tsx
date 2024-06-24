import { Entypo } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import { useTheme } from 'styled-components/native';

import { Badge, BarProgress, Typography } from '@/shared/components';
import { useFetchBalances } from '@/shared/queries';

import { TJourneyCardsProps } from './journey.types';
import { JourneyInfo } from './journey.info';
import { JourneyItemIcon } from './journey.item';
import { useJourneyStore } from './use.journey.store';
import { getDashboardLevel } from '../../utils/getDashboardLevel';

import * as S from './journey.styles';
import JourneySkeleton from './journey.skeleton';
import { useEffect } from 'react';

const JourneyCards = ({ location }: TJourneyCardsProps) => {
  const theme = useTheme();
  const { data: balances, isFetching: isFetchingBalances } = useFetchBalances();
  const level = getDashboardLevel(Number(balances?.totalSales));
  const { isShowAchievements, handleChangeIsVisible } = useJourneyStore(
    (store) => {
      return {
        isShowAchievements: store.isShowAchievements,
        handleChangeIsVisible: store.handleChangeIsVisible,
      };
    }
  );

  useEffect(() => {
    if (balances?.totalSales === 0) {
      handleChangeIsVisible(false);
    } else {
      handleChangeIsVisible(true);
    }
  }, [balances?.totalSales]);

  if (location === 'card') {
    return (
      <>
        {isFetchingBalances ? (
          <JourneySkeleton />
        ) : (
          <S.Wrapper>
            <S.WrapperHeader>
              <Typography title="Jornada de conquistas" />
              <Badge
                label={`NÍVEL ${
                  Number(balances?.totalSales) === 0 ? '0' : level.level
                }`}
                variant="outlined"
                colorValue={'secondary'}
              />
            </S.WrapperHeader>
            <S.WrapperProgress>
              <S.WrapperProgressHeader>
                <Typography title={level.label.min} />
                <Typography
                  title={level.label.max}
                  style={{ color: theme.gray[400] }}
                />
              </S.WrapperProgressHeader>
              <BarProgress sizeWidth={level.progress} />
            </S.WrapperProgress>
            {isShowAchievements && (
              <S.WrapperCard>
                {level?.newArrLevels.map((item) => (
                  <JourneyItemIcon
                    key={item.level}
                    title={
                      item.completed
                        ? `Concluído:\nR$ ${item.label.max}\nem vendas`
                        : `R$ ${item.label.max}`
                    }
                    image={item.img}
                    location="card"
                    active={item.active}
                    completed={item.completed}
                  />
                ))}
              </S.WrapperCard>
            )}
            {isShowAchievements ? (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ alignItems: 'center' }}
                onPress={() => handleChangeIsVisible(false)}>
                <Entypo
                  name="chevron-small-up"
                  size={24}
                  color={theme.gray[400]}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ alignItems: 'center' }}
                onPress={() => handleChangeIsVisible(true)}>
                <Entypo
                  name="chevron-small-down"
                  size={24}
                  color={theme.gray[400]}
                />
              </TouchableOpacity>
            )}
          </S.Wrapper>
        )}
      </>
    );
  }

  return (
    <S.WrapperModal>
      {level?.newArrLevels.map((item) => (
        <S.WrapperModalItem key={item.level} opacity={item.opacity}>
          <JourneyItemIcon
            title={
              item.completed
                ? `Concluído:\nR$ ${item.label.max}\nem vendas`
                : ''
            }
            location="modal"
            image={item.img}
            active={item.active}
            completed={item.completed}
          />
          <JourneyInfo item={item} />
        </S.WrapperModalItem>
      ))}
    </S.WrapperModal>
  );
};

export default JourneyCards;
