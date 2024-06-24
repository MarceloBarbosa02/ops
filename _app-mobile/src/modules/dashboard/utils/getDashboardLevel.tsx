import {
  BoxIcon,
  CashIcon,
  CompleteIcon,
  GoldIcon,
  LockedIcon,
} from '@/shared/assets/components/journey';

import { TJourneyInfo } from '../components/journey/journey.types';
import { formatNumber } from '@/shared/utils';
import { View } from 'react-native';

export type LevelType = {
  level: number;
  label: {
    min: string;
    max: string;
  };
  progress: number;
  newArrLevels: TJourneyInfo[];
};

import * as S from '../components/journey/journey.styles';

export function getDashboardLevel(value: number): LevelType {
  const levels = [
    {
      level: 1,
      values: { min: 1, max: 1000000 },
      label: { min: '0k', max: '10k' },
      info: {
        title: 'Empreendedor inicial',
        description: 'Kit boas-vindas com surpresas',
      },
      image: (
        <S.WrapperIcon>
          <BoxIcon active />
        </S.WrapperIcon>
      ),
      imageDisable: (
        <S.WrapperIcon>
          <BoxIcon active={false} />
        </S.WrapperIcon>
      ),
    },
    {
      level: 2,
      values: { min: 1000000, max: 10000000 },
      label: { min: '10k', max: '100k' },
      info: {
        title: 'Milionário em ascensão',
        description: 'Recursos exclusivos',
      },
      image: (
        <S.WrapperIcon>
          <CashIcon active />
        </S.WrapperIcon>
      ),
      imageDisable: (
        <S.WrapperIcon>
          <CashIcon active={false} />
        </S.WrapperIcon>
      ),
    },
    {
      level: 3,
      values: { min: 10000000, max: 100000000 },
      label: { min: '100k', max: '1m' },
      info: {
        title: 'Milionário em ascensão',
        description: 'Recursos exclusivos',
      },
      image: (
        <S.WrapperIcon>
          <GoldIcon active />
        </S.WrapperIcon>
      ),
      imageDisable: (
        <S.WrapperIcon>
          <GoldIcon active={false} />
        </S.WrapperIcon>
      ),
    },
    {
      level: 4,
      values: { min: 100000000, max: 1000000000 },
      label: { min: '1m', max: '10m' },
      info: {
        title: 'Em breve',
        description: 'Recursos exclusivos',
      },
      image: (
        <S.WrapperIcon>
          <LockedIcon active />
        </S.WrapperIcon>
      ),
      imageDisable: (
        <S.WrapperIcon>
          <LockedIcon active={false} />
        </S.WrapperIcon>
      ),
    },
    {
      level: 5,
      values: { min: 1000000000, max: 5000000000 },
      label: { min: '10m', max: '50m' },
      info: {
        title: 'Em breve',
        description: 'Recursos exclusivos',
      },
      image: (
        <S.WrapperIcon>
          <LockedIcon active />
        </S.WrapperIcon>
      ),
      imageDisable: (
        <S.WrapperIcon>
          <LockedIcon active={false} />
        </S.WrapperIcon>
      ),
    },
    {
      level: 6,
      values: { min: 5000000000, max: 10000000000 },
      label: { min: '50m', max: '100m' },
      info: {
        title: 'Em breve',
        description: 'Recursos exclusivos',
      },
      image: (
        <S.WrapperIcon>
          <LockedIcon active />
        </S.WrapperIcon>
      ),
      imageDisable: (
        <S.WrapperIcon>
          <LockedIcon active={false} />
        </S.WrapperIcon>
      ),
    },
  ];

  const newArrLevels = levels.map((level) => {
    const isActive = value >= level.values.min && value <= level.values.max;
    const isCompleted = value > level.values.max;

    return {
      ...level,
      progressInfo: isCompleted
        ? 100
        : isActive
        ? Math.round((value / level.values.max) * 100)
        : 0,
      active: isActive,
      completed: isCompleted,
      titleValue: isCompleted
        ? 'Concluído!'
        : isActive
        ? `R$${formatNumber(value)}`
        : 'R$00',
      img: isCompleted ? (
        <S.WrapperIconComplete>
          <CompleteIcon />
        </S.WrapperIconComplete>
      ) : isActive || isCompleted ? (
        level.image
      ) : (
        level.imageDisable
      ),
      opacity: isCompleted || isActive ? 1 : 0.4,
    };
  });

  const search = levels.find(
    (level) => value >= level.values.min && value <= level.values.max
  );

  const first = levels[0];
  const last = levels[levels.length - 1];

  const level = search?.level ?? (value > 0 ? last.level : first.level);

  const label = {
    min: search?.label.min ?? (value > 0 ? last.label.min : first.label.min),
    max: search?.label.max ?? (value > 0 ? last.label.max : first.label.max),
  };

  const progress = search
    ? Math.round((value / search.values.max) * 100)
    : value > 0
    ? 100
    : 0;

  return { level, label, progress, newArrLevels };
}
