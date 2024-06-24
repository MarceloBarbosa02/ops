import { format } from 'date-fns';
import { IParamsExtractProps } from '../store/use-finances-store.types';

export const clearFilterExtract = (params: IParamsExtractProps) => {
  const filtersUpdated = [];

  if (params.dateFilter) {
    if (format(params.dateFilter[0], 'dd/MM/yyyy') !== '01/01/2024') {
      filtersUpdated.push({
        label:
          format(params.dateFilter[0], 'dd/MM/yyyy') +
          ' - ' +
          format(params.dateFilter[1], 'dd/MM/yyyy'),
        reference: 'dateFilter',
      });
    }
  }

  if (params.mainSearchFilter) {
    filtersUpdated.push({
      label: params.mainSearchFilter,
      reference: 'main',
    });
  }

  if (params.adjust) {
    filtersUpdated.push({
      label: 'Ajuste',
      reference: 'adjust',
    });
  }

  if (params.chargeback) {
    filtersUpdated.push({
      label: 'Chargeback',
      reference: 'chargeback',
    });
  }

  if (params.comission) {
    filtersUpdated.push({
      label: 'Comissão',
      reference: 'comission',
    });
  }

  if (params.in) {
    filtersUpdated.push({
      label: 'Entrada',
      reference: 'in',
    });
  }

  if (params.out) {
    filtersUpdated.push({
      label: 'Saída',
      reference: 'out',
    });
  }

  if (params.refunded) {
    filtersUpdated.push({
      label: 'Estorno',
      reference: 'refunded',
    });
  }

  if (params.taxas) {
    filtersUpdated.push({
      label: 'Taxas',
      reference: 'taxas',
    });
  }

  if (params.withdrawal) {
    filtersUpdated.push({
      label: 'Saque',
      reference: 'withdrawal',
    });
  }

  return filtersUpdated;
};
