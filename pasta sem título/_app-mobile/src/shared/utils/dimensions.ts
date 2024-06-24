import { Dimensions } from "react-native";

export const responsiveFontSize = (f: number) => {
  const temHeight = (16 / 12) * Dimensions.get("window").width;

  return (
    Math.sqrt(
      Math.pow(temHeight, 2) + Math.pow(Dimensions.get("window").width, 2)
    ) *
    (f / 100)
  );
};
