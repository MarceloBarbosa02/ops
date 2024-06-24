import { Button, Typography } from '@/shared/components';

import { useAccountEvaluationInfo } from './use-account-evaluation';

import * as S from './account-evaluation.styles';
import { useTheme } from 'styled-components/native';
import {
  BlockedIcon,
  EmptyIcon,
  LockedIcon,
} from '@/shared/assets/components/journey';

const AccountEvaluationCard = () => {
  const theme = useTheme();
  const {
    colors,
    noRating,
    badRating,
    notRating,
    finalGrade,
    goodRating,
    ratingClass,
    ratingColor,
    levelAccount,
    regularRating,
    refundedGrade,
    excellentRating,
    chargebackGrade,
  } = useAccountEvaluationInfo();

  const rating = levelAccount.filter((item) => item.active)[0]?.rating;

  return (
    <S.Wrapper>
      <Typography title="Avaliação da conta" size="small" weight="medium" />

      <S.WrapperInfoValuation>
        {/* {noRating ? (
          <Typography
            title={`${finalGrade || 0}`}
            variant="head"
            size="large"
            weight="black"
            style={{ color: ratingColor }}
          />
        ) : (
          <S.WrapperEmptyIcon>
            <BlockedIcon />
          </S.WrapperEmptyIcon>
        )} */}
        {rating ?? notRating}
      </S.WrapperInfoValuation>
      <S.WrapperRating>
        {levelAccount.map((item) => (
          <S.WrapperRatingParts
            key={item.id}
            color={item.color}
            isActive={item.active}
            isComplete={item.complete}
            index={item.id}
          />
        ))}
      </S.WrapperRating>
      {noRating && (
        <S.WrapperButtons>
          <S.ButtonOption>
            {noRating && <EmptyIcon />}
            <Typography title="Estorno" />
            {!noRating && (
              <Typography title={`${refundedGrade || 0}%`} weight="bold" />
            )}
          </S.ButtonOption>
          <S.ButtonOption>
            {noRating && <EmptyIcon />}
            <Typography title="Chargeback" />
            {!noRating && (
              <Typography title={`${chargebackGrade || 0}%`} weight="bold" />
            )}
          </S.ButtonOption>
        </S.WrapperButtons>
      )}
    </S.Wrapper>
  );
};

export default AccountEvaluationCard;
