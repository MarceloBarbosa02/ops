import { useState } from "react";
import { Keyboard } from "react-native";

export const useChangeFocused = () => {
  const [isFocused, setIsFocused] = useState({
    period: false,
    product: false,
    offer: false,
  });

  const handleClickFocused = (item: "period" | "product" | "offer") => {
    setIsFocused({
      ...isFocused,
      [item]: true,
    });
  };

  const handleDisabledFocused = () => {
    Keyboard.dismiss();
    setIsFocused({
      period: false,
      product: false,
      offer: false,
    });
  };

  return {
    isFocused,
    handleClickFocused,
    handleDisabledFocused,
  };
};
