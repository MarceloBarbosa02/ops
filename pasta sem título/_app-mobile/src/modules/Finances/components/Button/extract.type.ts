import { TouchableOpacityProps } from "react-native";

export type TButtonExtractProps = {
  title: string;
  isLoading?: boolean;
} & TouchableOpacityProps;
