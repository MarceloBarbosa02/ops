export type THeaderProps = {
  title: string;
  icon?: React.ReactNode;
  onBack?: () => void;
};

export type THeaderIdentifyProps = {
  step?: 'step1' | 'step2';
};
