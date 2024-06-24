import { ReactNode } from 'react';

export interface ItemProps {
  id: number;
  img: ReactNode;
  title: string;
  description: string;
}

export type CardsDataProps = {
  item: ItemProps;
};
