import { View } from 'react-native';

import {
  BoxIcon,
  CashIcon,
  GoldIcon,
  LockedIcon,
} from '@/shared/assets/components/journey';
import { formatNumber } from '@/shared/utils';

export function useJourney(value: number) {
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
        <View className="w-[67px] h-[67px] items-center justify-center">
          <BoxIcon isActive />
        </View>
      ),
      imageDisable: (
        <View className="w-[67px] h-[67px] items-center justify-center">
          <BoxIcon />
        </View>
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
        <View className="w-[67px] h-[67px] items-center justify-center">
          <CashIcon isActive />
        </View>
      ),
      imageDisable: (
        <View className="w-[67px] h-[67px] items-center justify-center">
          <CashIcon />
        </View>
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
        <View className="w-[67px] h-[67px] items-center justify-center">
          <GoldIcon isActive />
        </View>
      ),
      imageDisable: (
        <View className="w-[67px] h-[67px] items-center justify-center">
          <GoldIcon />
        </View>
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
        <View className="w-[67px] h-[67px] items-center justify-center">
          <LockedIcon isActive />
        </View>
      ),
      imageDisable: (
        <View className="w-[67px] h-[67px] items-center justify-center">
          <LockedIcon />
        </View>
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
        <View className="w-[67px] h-[67px] items-center justify-center">
          <LockedIcon isActive />
        </View>
      ),
      imageDisable: (
        <View className="w-[67px] h-[67px] items-center justify-center">
          <LockedIcon />
        </View>
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
        <View className="w-[67px] h-[67px] items-center justify-center">
          <LockedIcon isActive />
        </View>
      ),
      imageDisable: (
        <View className="w-[67px] h-[67px] items-center justify-center">
          <LockedIcon />
        </View>
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
      img: isActive || isCompleted ? level.image : level.imageDisable,
      opacity: isCompleted || isActive ? 1 : 0.4,
    };
  });

  return {
    newArrLevels,
  };
}
