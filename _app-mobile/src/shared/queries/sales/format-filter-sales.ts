import { format } from 'date-fns';
import { IDataProps, IParamsProps } from './sales.interfaces';
import { TFormFilterSalesSchema } from '@/modules/sales/validator/params';

export const formatFilterSales = (params: TFormFilterSalesSchema) => {
  const dateFilter =
    params.dateFilter &&
    format(params.dateFilter[0], 'yyyy-MM-dd') +
      ',' +
      format(params.dateFilter[1], 'yyyy-MM-dd');

  let queryString = `?page=${params.page}&dateRange=${dateFilter}`;
  if (params.mainSearchFilter) {
    queryString += `&search=${params.mainSearchFilter
      .replaceAll('#', '')
      .replaceAll(/ +/g, ' ')
      .trim()}`;
  }
  if (params.productFilter) {
    queryString += `&productUuid=${params.productFilter}`;
  }
  queryString += `&offerUuid=${params.offerFilter || 'all'}`;
  if (params.emailAffiliate) {
    queryString += `&affiliateEmail=${params.emailAffiliate}`;
  }
  if (params.oneTime || params.recurring) {
    let offersFilter = '';
    if (params.oneTime) {
      offersFilter += 'ONE_TIME';
    }
    if (params.recurring) {
      offersFilter += ',RECURRING';
    }
    queryString += `&type=${offersFilter}`;
  }
  if (params.autoral || params.affiliation || params.coproduction) {
    let originFilter = '';
    if (params.autoral) {
      originFilter += 'PRODUCER';
    }
    if (params.affiliation) {
      originFilter += ',AFFILIATE';
    }
    if (params.coproduction) {
      originFilter += ',COPRODUCER';
    }
    queryString += `&origin=${originFilter}`;
  }
  if (
    params.approved ||
    params.pending ||
    params.expired ||
    params.refused ||
    params.refunded ||
    params.chargeback
  ) {
    let statusFilter = '';
    if (params.approved) {
      statusFilter += 'APPROVED';
    }
    if (params.pending) {
      statusFilter += ',PENDING';
    }
    if (params.expired) {
      statusFilter += ',CANCELED';
    }
    if (params.refused) {
      statusFilter += ',REFUSED';
    }
    if (params.refunded) {
      statusFilter += ',REFUNDED';
    }
    if (params.chargeback) {
      statusFilter += ',CHARGEBACK';
    }
    queryString += `&status=${statusFilter}`;
  }
  if (params.creditCard || params.bankSlip || params.pix || params.free) {
    let paymentMethodFilter = '';
    if (params.creditCard) {
      paymentMethodFilter += 'CREDIT_CARD';
    }
    if (params.bankSlip) {
      paymentMethodFilter += ',BANK_SLIP';
    }
    if (params.pix) {
      paymentMethodFilter += ',PIX';
    }
    if (params.free) {
      paymentMethodFilter += ',FREE';
    }
    queryString += `&paymentMethod=${paymentMethodFilter}`;
  }
  if (params.utmSrc) {
    queryString += `&src=${params.utmSrc}`;
  }

  if (params.utmSource) {
    queryString += `&utmSource=${params.utmSource}`;
  }

  if (params.utmMedium) {
    queryString += `&utmMedium=${params.utmMedium}`;
  }

  if (params.utmCampaign) {
    queryString += `&utmCampaign=${params.utmCampaign}`;
  }

  if (params.utmTerm) {
    queryString += `&utmTerm=${params.utmTerm}`;
  }

  if (params.utmContent) {
    queryString += `&utmContent=${params.utmContent}`;
  }
  return queryString;
};

export const clearFilterSales = (
  params: TFormFilterSalesSchema,
  productsFilters: IDataProps[],
  offersFilters: IDataProps[]
) => {
  const filtersUpdated = [];

  if (params.dateFilter) {
    if (format(params.dateFilter[0], 'dd/MM/yyyy') !== '01/01/2023') {
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

  if (params.productFilter) {
    if (params.productFilter !== 'all') {
      filtersUpdated.push({
        label:
          productsFilters &&
          productsFilters.find((prod) => prod.value === params.productFilter)
            ?.label,
        reference: 'product',
      });
    }
  }

  if (params.offerFilter) {
    if (params.offerFilter !== 'all') {
      filtersUpdated.push({
        label:
          offersFilters &&
          offersFilters.find((off) => off.value === params.offerFilter)?.label,
        reference: 'offer',
      });
    }
  }

  if (params.emailAffiliate) {
    filtersUpdated.push({
      label: params.emailAffiliate,
      reference: 'affiliateEmail',
    });
  }

  if (params.autoral) {
    filtersUpdated.push({
      label: 'Autoral',
      reference: 'autoral',
    });
  }

  if (params.affiliation) {
    filtersUpdated.push({
      label: 'Afiliação',
      reference: 'affiliation',
    });
  }
  if (params.coproduction) {
    filtersUpdated.push({
      label: 'Coprodução',
      reference: 'coproduction',
    });
  }

  if (params.oneTime) {
    filtersUpdated.push({
      label: 'Preço único',
      reference: 'oneTime',
    });
  }

  if (params.recurring) {
    filtersUpdated.push({
      label: 'Assinatura',
      reference: 'recurring',
    });
  }

  if (params.approved) {
    filtersUpdated.push({
      label: 'Aprovado',
      reference: 'approved',
    });
  }

  if (params.pending) {
    filtersUpdated.push({
      label: 'Pendente',
      reference: 'pending',
    });
  }

  if (params.expired) {
    filtersUpdated.push({
      label: 'Cancelado',
      reference: 'expired',
    });
  }

  if (params.refused) {
    filtersUpdated.push({
      label: 'Recusado',
      reference: 'refused',
    });
  }

  if (params.refunded) {
    filtersUpdated.push({
      label: 'Estornado',
      reference: 'refunded',
    });
  }

  if (params.chargeback) {
    filtersUpdated.push({
      label: 'Chargeback',
      reference: 'chargeback',
    });
  }

  if (params.creditCard) {
    filtersUpdated.push({
      label: 'Cartão de crédito',
      reference: 'creditCard',
    });
  }

  if (params.bankSlip) {
    filtersUpdated.push({
      label: 'Boleto',
      reference: 'bankSlip',
    });
  }

  if (params.pix) {
    filtersUpdated.push({
      label: 'PIX',
      reference: 'pix',
    });
  }

  if (params.free) {
    filtersUpdated.push({
      label: 'Gratuito',
      reference: 'free',
    });
  }

  if (params.utmCampaign) {
    filtersUpdated.push({
      label: `UTM Campaign: ${params.utmCampaign.trim()}`,
      reference: 'utmCampaign',
    });
  }

  if (params.utmContent) {
    filtersUpdated.push({
      label: `UTM Content: ${params.utmContent.trim()}`,
      reference: 'utmContent',
    });
  }

  if (params.utmMedium) {
    filtersUpdated.push({
      label: `UTM Medium: ${params.utmMedium.trim()}`,
      reference: 'utmMedium',
    });
  }

  if (params.utmSource) {
    filtersUpdated.push({
      label: `UTM Source: ${params.utmSource.trim()}`,
      reference: 'utmSource',
    });
  }

  if (params.utmSrc) {
    filtersUpdated.push({
      label: `UTM SRC: ${params.utmSrc.trim()}`,
      reference: 'utmSrc',
    });
  }

  if (params.utmTerm) {
    filtersUpdated.push({
      label: `UTM Term: ${params.utmTerm.trim()}`,
      reference: 'utmTerm',
    });
  }

  return filtersUpdated;
};
