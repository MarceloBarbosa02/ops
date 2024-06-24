import { Typography } from '@/shared/components';

import * as S from './business-list.styles';
import { TBusinessListItem } from './business-list.types';

export const BusinessListItem = ({ title, description }: TBusinessListItem) => {
  return (
    <S.WrapperInfoItem>
      <Typography title={title} weight="bold" colorValue="neutral-regular" />
      {typeof description === 'string' ? (
        <Typography
          title={description}
          weight="medium"
          colorValue="neutral-black"
        />
      ) : (
        <>{description}</>
      )}
    </S.WrapperInfoItem>
  );
};
