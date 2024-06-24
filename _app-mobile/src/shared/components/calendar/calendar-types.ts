import { StyleProp, ViewStyle } from 'react-native';

export type TCalendarModalProps = {
  isShow: boolean;
  defaultDate: Date[];
  close: () => void;
  handleSelectDate(dates: Date[]): void;
};

export type TMarkedDateProps = {
  [date: string]: {
    startingDay?: boolean;
    endingDay?: boolean;
    color: string;
    textColor: string;
    disabled?: boolean;
    disableTouchEvent?: boolean;
    customContainerStyle?: StyleProp<ViewStyle>;
  };
};

export type THeaderProps = {
  date?: XDate;
  onPressArrowLeft(): void;
  onPressArrowRight(): void;
};

export interface TCalendarDayProps {
  id: number;
  date: Date[];
  label: string;
}
