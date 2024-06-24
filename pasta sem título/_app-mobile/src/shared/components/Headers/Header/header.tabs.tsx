import { useMemo } from "react";
import * as S from "./styles";

export type TBaseScreenLayout = {
  title?: string;
  quantity?: number;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  handleNavigateLeft?(): void;
  handleNavigateRight?(): void;
};

export const HeaderTabs = ({
  title,
  quantity,
  endContent,
  startContent,
  handleNavigateLeft,
  handleNavigateRight,
}: Omit<TBaseScreenLayout, "children">) => {
  const handleNavigationBack = () => {
    if (typeof handleNavigateLeft === "function") {
      handleNavigateLeft();
    } else {
      () => {};
    }
  };

  const handleNavigationRight = () => {
    if (typeof handleNavigateRight === "function") {
      handleNavigateRight();
    } else {
      () => {};
    }
  };

  const avatar_quantity = useMemo(() => {
    const sizeof = String(quantity).length * 13;

    if (!quantity) {
      return <S.HelpBtn />;
    }

    if (String(quantity).length <= 2) {
      return (
        <S.WrapperQuantity size={36}>
          <S.TitleQuantity>{quantity}</S.TitleQuantity>
        </S.WrapperQuantity>
      );
    }

    if (String(quantity).length > 2) {
      return (
        <S.WrapperQuantity size={sizeof}>
          <S.TitleQuantity>{quantity}</S.TitleQuantity>
        </S.WrapperQuantity>
      );
    }

    return <S.HelpBtn />;
  }, [quantity]);

  return (
    <S.WrapperHeader>
      <S.HeaderButtonLeft>{startContent}</S.HeaderButtonLeft>
      <S.TitleHeader>{title}</S.TitleHeader>
      <S.HeaderButtonRight>{avatar_quantity}</S.HeaderButtonRight>
    </S.WrapperHeader>
  );
};
