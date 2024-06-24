import { Typography } from '@/shared/components';
import {
  Image,
  ImageBackground,
  View,
  useWindowDimensions,
} from 'react-native';
import { TSliderProps } from './slider.types';

const Slider = ({ item }: TSliderProps) => {
  const { width } = useWindowDimensions();

  return (
    <View>
      <ImageBackground
        source={item.img}
        resizeMode="cover"
        style={{ width: width, height: '100%' }}
      />
      <View
        style={{ position: 'absolute', paddingHorizontal: 16, bottom: 112 }}
        // className="absolute bottom-28 px-4"
      >
        <Typography
          title={item.title}
          color="white"
          size="large"
          variant="head"
          weight="medium"
        />
      </View>
    </View>
  );
};

export default Slider;
