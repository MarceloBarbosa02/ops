import { useEffect, useMemo, useState } from 'react';
import { useTheme } from 'styled-components/native';

import { Typography } from '@/shared/components';
import { useFetchValuation } from '@/shared/queries/evaluation';

import { TRatingClassProp } from './account-evaluation.types';

import * as S from './account-evaluation.styles';

export const useAccountEvaluationInfo = () => {
  const theme = useTheme();
  const [ratingClass, setRatingClass] = useState<TRatingClassProp>('bad');
  const { data: valuations } = useFetchValuation();
  const noRating = valuations && valuations?.valuation.salesCount < 100;
  const { finalGrade, chargebackGrade, refundedGrade } =
    valuations?.grade || {};

  const colors = {
    bad: ratingClass === 'bad' ? theme.red[600] : theme.gray[200],
    regular: ratingClass === 'regular' ? theme.yellow[600] : theme.gray[200],
    good: ratingClass === 'good' ? theme.green[600] : theme.gray[200],
    excellent: ratingClass === 'excellent' ? theme.blue[600] : theme.gray[200],
  };

  const ratingColor =
    ratingClass == 'bad'
      ? theme.red[600]
      : ratingClass == 'regular'
        ? theme.orange[600]
        : ratingClass == 'good'
          ? theme.green[600]
          : theme.blue[600];

  useEffect(() => {
    if (!finalGrade) return;
    if (finalGrade <= 2.5) {
      setRatingClass('bad');
    } else if (finalGrade > 2.5 && finalGrade <= 5.0) {
      setRatingClass('regular');
    } else if (finalGrade > 5.0 && finalGrade <= 7.5) {
      setRatingClass('good');
    } else if (finalGrade > 7.5) {
      setRatingClass('excellent');
    }
  }, [finalGrade]);

  const excellentRating = useMemo(
    () => (
      <S.WrapperInfo>
        <S.Description>
          A saúde da sua conta está{' '}
          <S.DescriptionBold color={ratingColor}>excelente</S.DescriptionBold>
        </S.Description>
        <Typography
          title="Parabéns pela sua conquista..."
          colorValue="neutral-light"
          size="small"
        />
      </S.WrapperInfo>
    ),
    [ratingColor]
  );

  const goodRating = useMemo(
    () => (
      <S.WrapperInfo>
        <S.Description>
          A saúde da sua conta está{' '}
          <S.DescriptionBold color={ratingColor}>boa</S.DescriptionBold>
        </S.Description>
        <Typography
          title="Continue gerindo de forma responsável..."
          colorValue="neutral-light"
          size="small"
        />
      </S.WrapperInfo>
    ),
    [ratingColor]
  );

  const regularRating = useMemo(
    () => (
      <S.WrapperInfo>
        <S.Description>
          A saúde da sua conta está{' '}
          <S.DescriptionBold color={ratingColor}>regular</S.DescriptionBold>
        </S.Description>
        <S.WrapperLink align="flex-start">
          <Typography
            title="Acesse a"
            colorValue="neutral-light"
            size="small"
          />
          <S.ButtonLink activeOpacity={0.7}>
            <Typography
              title="Central de Ajuda"
              colorValue="neutral-light"
              size="small"
              underline
            />
          </S.ButtonLink>
        </S.WrapperLink>
      </S.WrapperInfo>
    ),
    [ratingColor]
  );

  const badRating = useMemo(
    () => (
      <S.WrapperInfo>
        <S.Description>
          A saúde da sua conta está{' '}
          <S.DescriptionBold color={ratingColor}>ruim</S.DescriptionBold>
        </S.Description>
        <S.WrapperLink align="flex-start">
          <Typography
            title="Acesse a"
            colorValue="neutral-light"
            size="small"
          />
          <S.ButtonLink activeOpacity={0.7}>
            <Typography
              title="Central de Ajuda"
              colorValue="neutral-light"
              size="small"
              underline
            />
          </S.ButtonLink>
        </S.WrapperLink>
      </S.WrapperInfo>
    ),
    [ratingColor]
  );

  const notRating = useMemo(
    () => (
      <S.WrapperEmpty>
        <S.Description>
          Para desbloquear essa funcionalidade, você precisa atingir a marca de{' '}
          <S.DescriptionBold color={theme.gray[400]}>100</S.DescriptionBold>{' '}
          vendas.
        </S.Description>
      </S.WrapperEmpty>
    ),
    [ratingColor]
  );

  const account = [
    {
      id: 1,
      active: false,
      complete: false,
      color: !noRating ? theme.gray[500] : theme.red[600],
      values: { min: 0, max: 2.5 },
      rating: badRating,
    },
    {
      id: 2,
      active: false,
      complete: false,
      color: !noRating ? theme.gray[400] : theme.orange[600],
      values: { min: 2.5, max: 5 },
      rating: regularRating,
    },
    {
      id: 3,
      active: false,
      complete: false,
      color: !noRating ? theme.gray[300] : theme.green[600],
      values: { min: 5, max: 7.5 },
      rating: goodRating,
    },
    {
      id: 4,
      active: false,
      complete: false,
      color: !noRating ? theme.gray[200] : theme.blue[600],
      values: { min: 7.5, max: 10 },
      rating: excellentRating,
    },
  ];

  const levelAccount = account.map((item) => {
    const isActive =
      Number(finalGrade) >= item.values.min &&
      Number(finalGrade) <= item.values.max;
    const isCompleted = Number(finalGrade) > item.values.max;

    return {
      ...item,
      active: isActive,
      complete: isCompleted,
      color: isCompleted || isActive ? item.color : theme.gray[200],
    };
  });

  return {
    colors,
    valuations,
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
  };
};
