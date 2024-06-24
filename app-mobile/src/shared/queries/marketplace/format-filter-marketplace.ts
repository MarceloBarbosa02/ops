import { format } from 'date-fns';
import { TMarketplaceRequest } from './marketplace.types';

export const formatFilterMarketplace = (params: TMarketplaceRequest) => {
  let queryString = `?page=${params.page}&pageSize=${params.pageSize}`;
  if (params.type) {
    queryString += `&type=${params.type}`;
  }

  return queryString;
};

// export const clearFilterSales = (
//   params: TFormFilterSalesSchema,
//   productsFilters: IDataProps[],
//   offersFilters: IDataProps[]
// ) => {
//   const filtersUpdated = [];

//   if (params.dateFilter) {
//     if (format(params.dateFilter[0], 'dd/MM/yyyy') !== '01/01/2023') {
//       filtersUpdated.push({
//         label:
//           format(params.dateFilter[0], 'dd/MM/yyyy') +
//           ' - ' +
//           format(params.dateFilter[1], 'dd/MM/yyyy'),
//         reference: 'dateFilter',
//       });
//     }
//   }

//   if (params.mainSearchFilter) {
//     filtersUpdated.push({
//       label: params.mainSearchFilter,
//       reference: 'main',
//     });
//   }

//   if (params.productFilter) {
//     if (params.productFilter !== 'all') {
//       filtersUpdated.push({
//         label:
//           productsFilters &&
//           productsFilters.find((prod) => prod.value === params.productFilter)
//             ?.label,
//         reference: 'product',
//       });
//     }
//   }

//   if (params.offerFilter) {
//     if (params.offerFilter !== 'all') {
//       filtersUpdated.push({
//         label:
//           offersFilters &&
//           offersFilters.find((off) => off.value === params.offerFilter)?.label,
//         reference: 'offer',
//       });
//     }
//   }

//   if (params.emailAffiliate) {
//     filtersUpdated.push({
//       label: params.emailAffiliate,
//       reference: 'affiliateEmail',
//     });
//   }

//   if (params.autoral) {
//     filtersUpdated.push({
//       label: 'Autoral',
//       reference: 'autoral',
//     });
//   }

//   if (params.affiliation) {
//     filtersUpdated.push({
//       label: 'Afiliação',
//       reference: 'affiliation',
//     });
//   }
//   if (params.coproduction) {
//     filtersUpdated.push({
//       label: 'Coprodução',
//       reference: 'coproduction',
//     });
//   }

//   if (params.oneTime) {
//     filtersUpdated.push({
//       label: 'Preço único',
//       reference: 'oneTime',
//     });
//   }

//   if (params.recurring) {
//     filtersUpdated.push({
//       label: 'Assinatura',
//       reference: 'recurring',
//     });
//   }

//   if (params.approved) {
//     filtersUpdated.push({
//       label: 'Aprovado',
//       reference: 'approved',
//     });
//   }

//   if (params.pending) {
//     filtersUpdated.push({
//       label: 'Pendente',
//       reference: 'pending',
//     });
//   }

//   if (params.expired) {
//     filtersUpdated.push({
//       label: 'Cancelado',
//       reference: 'expired',
//     });
//   }

//   if (params.refused) {
//     filtersUpdated.push({
//       label: 'Recusado',
//       reference: 'refused',
//     });
//   }

//   if (params.refunded) {
//     filtersUpdated.push({
//       label: 'Estornado',
//       reference: 'refunded',
//     });
//   }

//   if (params.chargeback) {
//     filtersUpdated.push({
//       label: 'Chargeback',
//       reference: 'chargeback',
//     });
//   }

//   if (params.creditCard) {
//     filtersUpdated.push({
//       label: 'Cartão de crédito',
//       reference: 'creditCard',
//     });
//   }

//   if (params.bankSlip) {
//     filtersUpdated.push({
//       label: 'Boleto',
//       reference: 'bankSlip',
//     });
//   }

//   if (params.pix) {
//     filtersUpdated.push({
//       label: 'PIX',
//       reference: 'pix',
//     });
//   }

//   if (params.free) {
//     filtersUpdated.push({
//       label: 'Gratuito',
//       reference: 'free',
//     });
//   }

//   if (params.utmCampaign) {
//     filtersUpdated.push({
//       label: `UTM Campaign: ${params.utmCampaign.trim()}`,
//       reference: 'utmCampaign',
//     });
//   }

//   if (params.utmContent) {
//     filtersUpdated.push({
//       label: `UTM Content: ${params.utmContent.trim()}`,
//       reference: 'utmContent',
//     });
//   }

//   if (params.utmMedium) {
//     filtersUpdated.push({
//       label: `UTM Medium: ${params.utmMedium.trim()}`,
//       reference: 'utmMedium',
//     });
//   }

//   if (params.utmSource) {
//     filtersUpdated.push({
//       label: `UTM Source: ${params.utmSource.trim()}`,
//       reference: 'utmSource',
//     });
//   }

//   if (params.utmSrc) {
//     filtersUpdated.push({
//       label: `UTM SRC: ${params.utmSrc.trim()}`,
//       reference: 'utmSrc',
//     });
//   }

//   if (params.utmTerm) {
//     filtersUpdated.push({
//       label: `UTM Term: ${params.utmTerm.trim()}`,
//       reference: 'utmTerm',
//     });
//   }

//   return filtersUpdated;
// };
