export type IPurchasesResponse = {
  needCreatePassword: boolean;
  email: string;
  product: {
    uuid: string;
    product_name: string;
    price: number;
    photo?: string;
    brand: string;
    finished_at: string;
    code: string;
    format_slug: string;
    product_id: number;
    product_uuid: string;
  };
};
