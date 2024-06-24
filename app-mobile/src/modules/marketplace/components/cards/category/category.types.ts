import { TMarketplaceItemResponse } from '@/shared/queries/marketplace/marketplace.types';

export type TCategoryTypeProps = 'ALL' | 'NEWEST' | 'GROWING' | 'RENTABLE';

export type TItemListProps = {
  item: TMarketplaceItemResponse;
};

export type TItemsCategoryProps = {
  id: number;
  title: string;
  type: TCategoryTypeProps;
};
