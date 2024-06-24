import { useRef, useState } from 'react';
import { ScrollView } from 'react-native';

export const useCategory = () => {
  const refScrollVertical = useRef<ScrollView>(null);
  const [changeScrollY, setChangeScrollY] = useState<number>(0);

  return {
    refScrollVertical,
    changeScrollY,
    setChangeScrollY,
  };
};
