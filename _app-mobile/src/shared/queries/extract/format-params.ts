import { format } from 'date-fns';
import { IParamsExtractProps } from './extract.interfaces';

export const formatParams = (params: IParamsExtractProps) => {
  const dateFilter =
    format(params.dateFilter[0], 'yyyy-MM-dd') +
    ',' +
    format(params.dateFilter[1], 'yyyy-MM-dd');

  let queryString = `?page=${params.page}&pageSize=10&dateRange=${dateFilter}`;

  if (params.mainSearchFilter) {
    queryString += `&search=${params.mainSearchFilter
      .replaceAll('#', '')
      .replaceAll(/ +/g, ' ')
      .trim()}`;
  }

  if (params?.in || params?.out) {
    let type = '';
    if (params.in) {
      type += 'IN';
    }
    if (params.out) {
      type += ',OUT';
    }
    queryString += `&type=${type}`;
  }

  if (
    params?.adjust ||
    params?.chargeback ||
    params?.comission ||
    params?.refunded ||
    params?.refunded ||
    params?.withdrawal
  ) {
    let categories = '';
    if (params.adjust) {
      categories += 'AD_HOC';
    }
    if (params.chargeback) {
      categories += ',CHARGEBACK';
    }
    if (params.comission) {
      categories += ',COMISSION';
    }
    if (params.refunded) {
      categories += ',REFUND';
    }
    if (params.taxas) {
      categories += ',TAX';
    }
    if (params.withdrawal) {
      categories += ',WITHDRAWAL';
    }
    queryString += `&category=${categories}`;
  }
  return queryString;
};
