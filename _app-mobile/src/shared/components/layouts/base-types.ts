import { ReactNode, RefObject } from 'react';
import { ScrollView } from 'react-native';

export type TBaseScreenLayout = {
  left?: boolean;
  isFooter?: boolean;
  isScroll?: boolean;
  isFetching?: boolean;
  isShowAlert?: boolean;
  isModalScreen?: boolean;
  title?: string;
  quantity?: number;
  children: ReactNode;
  refresh?: boolean;
  refScroll?: RefObject<ScrollView>;
  headerCustom?: JSX.Element;
  startContent?: JSX.Element;
  endContent?: JSX.Element;
  handleNavigateLeft?(): void;
  handleNavigateRight?(): void;
  handleRefresh?(): void;
};
