export type TJourneyCardsProps = {
  location: 'card' | 'modal';
};

export type TJourneyContext = {
  isShowAchievements: boolean;
  handleChangeIsVisible(bool: boolean): void;
};

export type TJourneyItem = {
  title: string;
  image?: JSX.Element;
  active?: boolean;
  completed?: boolean;
} & TJourneyCardsProps;

export type TJourneyInfo = {
  level: number;
  values: { min: number; max: number };
  label: { min: string; max: string };
  info: {
    title: string;
    description: string;
  };
  img: JSX.Element;
  titleValue: string;
  progressInfo: number;
  active: boolean;
  completed: boolean;
  opacity: number;
};

export type TJourneyCardInfo = {
  item: TJourneyInfo;
};
