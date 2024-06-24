import { ReactNode } from "react";
import { ImageSourcePropType } from "react-native";

export interface ItemProps {
  id: number;
  img: ReactNode;
  title: string;
  description: string;
}
