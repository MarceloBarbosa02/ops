import { TooltipCustom, Typography } from '@/shared/components';
import { TProfileCardsItem } from '../../../screens/profile.types';
import { useMemo } from 'react';
import { formatPhoneDDI } from '@/shared/utils';
import { getProfileStatus } from '../../../utils/profile_status';
import { useFetchMe } from '@/shared/queries/user';
import { TVerificationStatus } from '@/shared/queries/user/sign-in.types';

import * as S from './profile.cards.styles';

const ProfileCardsItem = ({ description, title }: TProfileCardsItem) => {
  const { data: dataUser } = useFetchMe();

  const formatDescription = useMemo(() => {
    if (title === 'Telefone') {
      return formatPhoneDDI(description).slice(0, -4) + '****';
    }
    return description;
  }, [description]);

  return (
    <S.WrapperItem>
      <Typography title={title} size="small" />
      {title !== 'Verificação' ? (
        <Typography title={formatDescription} weight="medium" size="small" />
      ) : (
        <TooltipCustom
          startContent
          color={
            getProfileStatus(
              dataUser?.verificationStatus as TVerificationStatus
            ).variant
          }
          title={
            getProfileStatus(
              dataUser?.verificationStatus as TVerificationStatus
            ).label
          }
          description={
            getProfileStatus(
              dataUser?.verificationStatus as TVerificationStatus
            ).tooltip
          }
        />
      )}
    </S.WrapperItem>
  );
};

export default ProfileCardsItem;
