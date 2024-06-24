export type TNextStepsItemProps = {
  step: number;
  icon: JSX.Element;
  title: string;
  description: string;
  onNavigation: () => void;
  active: boolean;
  complete: boolean;
};

export type TNextStepsCardsProps = {
  item: TNextStepsItemProps;
};
