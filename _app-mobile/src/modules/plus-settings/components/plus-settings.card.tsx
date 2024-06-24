import { Image } from 'expo-image';
import { Dimensions } from 'react-native';
import { useMemo, useRef } from 'react';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { useTheme } from 'styled-components/native';

import SyncIcon from '@/shared/assets/components/generics/sync';
import { EnumCAcronym, useCompanyStore } from '@/shared';
import { BLUR_HASH } from '@/shared/constants/generic';
import { Badge, Typography } from '@/shared/components';
import { useFetchMe } from '@/shared/queries/user';
import { format } from '@/shared/utils';

import { PlusSettingsModal } from './plus-settings.modal';
import { CardPlusSkeleton } from './plus-settings.skeleton';

import * as S from './plus-settings.styles';

const { width } = Dimensions.get('window');

const PlusSettingsCard = () => {
  const theme = useTheme();
  const refActionSheet = useRef<BottomSheetModal>(null);
  const { currentCompany } = useCompanyStore((store) => {
    return {
      currentCompany: store.currentCompany,
    };
  });
  const { data: dataUser, isFetching } = useFetchMe();

  const handleIsOpen = () => {
    refActionSheet.current?.present();
  };

  const userName = useMemo(() => {
    const nameUser = format.initialsName(
      `${
        currentCompany
          ? currentCompany?.nickname ?? currentCompany?.fantasyName
          : dataUser?.name ?? ''
      }`
    );

    return <Typography title={format.limitarTamanhoString(nameUser, width)} />;
  }, [currentCompany?.name, dataUser?.name, width]);

  return (
    <S.WrapperCard onPress={handleIsOpen}>
      {isFetching ? (
        <CardPlusSkeleton />
      ) : (
        <>
          {dataUser?.photo ? (
            <Image
              source={`${dataUser?.photo}`}
              placeholder={BLUR_HASH}
              contentFit="cover"
              transition={1000}
              style={{
                width: 40,
                height: 40,
                borderRadius: 40,
              }}
            />
          ) : (
            <S.Flag>
              <Typography
                title={format.initialsNameLatter(
                  String(dataUser?.name || currentCompany?.name)
                )}
                size="large"
                weight="bold"
                style={{ color: theme.gray[50] }}
              />
            </S.Flag>
          )}
          <S.WrapperCardInfo>
            <S.WrapperCardInfoFlag>
              <Badge
                label={EnumCAcronym[currentCompany?.type] ?? 'PF'}
                variant="solid"
                typeBorder="solid"
                colorValue="secondary"
              />
            </S.WrapperCardInfoFlag>
            {userName}
          </S.WrapperCardInfo>
        </>
      )}
      {currentCompany?.uuid && <SyncIcon />}
      <PlusSettingsModal refActionSheet={refActionSheet} />
    </S.WrapperCard>
  );
};

export default PlusSettingsCard;
