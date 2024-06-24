import { ImageSourcePropType } from 'react-native';

export type TSlider = {
  img: ImageSourcePropType;
  title: string;
};

export type TSliderProps = {
  item: TSlider;
};
