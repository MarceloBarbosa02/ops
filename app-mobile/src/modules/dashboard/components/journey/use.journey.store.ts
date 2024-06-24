import { create } from 'zustand';
import { TJourneyContext } from './journey.types';

export const useJourneyStore = create<TJourneyContext>((set) => ({
  isShowAchievements: true,
  handleChangeIsVisible: (bool: boolean) =>
    set({
      isShowAchievements: bool,
    }),
}));
