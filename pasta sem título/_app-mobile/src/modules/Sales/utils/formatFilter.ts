import { IDataProps, IParamsProps } from "@shared/types";
import { format } from "date-fns";

export const formatFilter = (params: IParamsProps) => {
  const dateFilter =
    format(params.dateFilter[0], "yyyy-MM-dd") +
    "," +
    format(params.dateFilter[1], "yyyy-MM-dd");

  let queryString = `?page=${params.page}&dateRange=${dateFilter}`;
  if (params.mainSearchFilter) {
    queryString += `&search=${params.mainSearchFilter
      .replaceAll("#", "")
      .replaceAll(/ +/g, " ")
      .trim()}`;
  }
  if (params.productFilter) {
    queryString += `&productUuid=${params.productFilter}`;
  }
  queryString += `&offerUuid=${params.offerFilter || "all"}`;
  if (params.emailAffiliate) {
    queryString += `&affiliateEmail=${params.emailAffiliate}`;
  }
  if (params.typeOffers?.oneTime || params.typeOffers?.recurring) {
    let offersFilter = "";
    if (params.typeOffers.oneTime) {
      offersFilter += "ONE_TIME";
    }
    if (params.typeOffers.recurring) {
      offersFilter += ",RECURRING";
    }
    queryString += `&type=${offersFilter}`;
  }
  if (
    params.origin?.autoral ||
    params.origin?.affiliation ||
    params.origin?.coproduction
  ) {
    let originFilter = "";
    if (params.origin.autoral) {
      originFilter += "PRODUCER";
    }
    if (params.origin.affiliation) {
      originFilter += ",AFFILIATE";
    }
    if (params.origin.coproduction) {
      originFilter += ",COPRODUCER";
    }
    queryString += `&origin=${originFilter}`;
  }
  if (
    params.statusFilter?.approved ||
    params.statusFilter?.pending ||
    params.statusFilter?.expired ||
    params.statusFilter?.refused ||
    params.statusFilter?.refunded ||
    params.statusFilter?.chargeback
  ) {
    let statusFilter = "";
    if (params.statusFilter.approved) {
      statusFilter += "APPROVED";
    }
    if (params.statusFilter.pending) {
      statusFilter += ",PENDING";
    }
    if (params.statusFilter.expired) {
      statusFilter += ",CANCELED";
    }
    if (params.statusFilter.refused) {
      statusFilter += ",REFUSED";
    }
    if (params.statusFilter.refunded) {
      statusFilter += ",REFUNDED";
    }
    if (params.statusFilter.chargeback) {
      statusFilter += ",CHARGEBACK";
    }
    queryString += `&status=${statusFilter}`;
  }
  if (
    params.paymentMethodFilter?.creditCard ||
    params.paymentMethodFilter?.bankSlip ||
    params.paymentMethodFilter?.pix ||
    params.paymentMethodFilter?.free
  ) {
    let paymentMethodFilter = "";
    if (params.paymentMethodFilter.creditCard) {
      paymentMethodFilter += "CREDIT_CARD";
    }
    if (params.paymentMethodFilter.bankSlip) {
      paymentMethodFilter += ",BANK_SLIP";
    }
    if (params.paymentMethodFilter.pix) {
      paymentMethodFilter += ",PIX";
    }
    if (params.paymentMethodFilter.free) {
      paymentMethodFilter += ",FREE";
    }
    queryString += `&paymentMethod=${paymentMethodFilter}`;
  }
  if (params.utm.utmSrc) {
    queryString += `&src=${params.utm.utmSrc}`;
  }

  if (params.utm.utmSource) {
    queryString += `&utmSource=${params.utm.utmSource}`;
  }

  if (params.utm.utmMedium) {
    queryString += `&utmMedium=${params.utm.utmMedium}`;
  }

  if (params.utm.utmCampaign) {
    queryString += `&utmCampaign=${params.utm.utmCampaign}`;
  }

  if (params.utm.utmTerm) {
    queryString += `&utmTerm=${params.utm.utmTerm}`;
  }

  if (params.utm.utmContent) {
    queryString += `&utmContent=${params.utm.utmContent}`;
  }
  return queryString;
};

export const clearFilter = (
  params: IParamsProps,
  productsFilters: IDataProps[],
  offersFilters: IDataProps[]
) => {
  const filtersUpdated = [];

  if (params.dateFilter) {
    if (format(params.dateFilter[0], "dd/MM/yyyy") !== "01/01/2023") {
      filtersUpdated.push({
        label:
          format(params.dateFilter[0], "dd/MM/yyyy") +
          " - " +
          format(params.dateFilter[1], "dd/MM/yyyy"),
        reference: "dateFilter",
      });
    }
  }

  if (params.mainSearchFilter) {
    filtersUpdated.push({
      label: params.mainSearchFilter,
      reference: "main",
    });
  }

  if (params.productFilter) {
    if (params.productFilter !== "all") {
      filtersUpdated.push({
        label:
          productsFilters &&
          productsFilters.find((prod) => prod.value === params.productFilter)
            ?.label,
        reference: "product",
      });
    }
  }

  if (params.offerFilter) {
    if (params.offerFilter !== "all") {
      filtersUpdated.push({
        label:
          offersFilters &&
          offersFilters.find((off) => off.value === params.offerFilter)?.label,
        reference: "offer",
      });
    }
  }

  if (params.emailAffiliate) {
    filtersUpdated.push({
      label: params.emailAffiliate,
      reference: "affiliateEmail",
    });
  }

  if (params.origin?.autoral) {
    filtersUpdated.push({
      label: "Autoral",
      reference: "autoral",
    });
  }

  if (params.origin?.affiliation) {
    filtersUpdated.push({
      label: "Afiliação",
      reference: "affiliation",
    });
  }

  if (params.origin?.coproduction) {
    filtersUpdated.push({
      label: "Coprodução",
      reference: "coproduction",
    });
  }

  if (params.typeOffers?.oneTime) {
    filtersUpdated.push({
      label: "Preço único",
      reference: "oneTime",
    });
  }

  if (params.typeOffers?.recurring) {
    filtersUpdated.push({
      label: "Assinatura",
      reference: "recurring",
    });
  }

  if (params.statusFilter?.approved) {
    filtersUpdated.push({
      label: "Aprovado",
      reference: "approved",
    });
  }

  if (params.statusFilter?.pending) {
    filtersUpdated.push({
      label: "Pendente",
      reference: "pending",
    });
  }

  if (params.statusFilter?.expired) {
    filtersUpdated.push({
      label: "Cancelado",
      reference: "expired",
    });
  }

  if (params.statusFilter?.refused) {
    filtersUpdated.push({
      label: "Recusado",
      reference: "refused",
    });
  }

  if (params.statusFilter?.refunded) {
    filtersUpdated.push({
      label: "Estornado",
      reference: "refunded",
    });
  }

  if (params.statusFilter?.chargeback) {
    filtersUpdated.push({
      label: "Chargeback",
      reference: "chargeback",
    });
  }

  if (params.paymentMethodFilter?.creditCard) {
    filtersUpdated.push({
      label: "Cartão de crédito",
      reference: "creditCard",
    });
  }

  if (params.paymentMethodFilter?.bankSlip) {
    filtersUpdated.push({
      label: "Boleto",
      reference: "bankSlip",
    });
  }

  if (params.paymentMethodFilter?.pix) {
    filtersUpdated.push({
      label: "PIX",
      reference: "pix",
    });
  }

  if (params.paymentMethodFilter?.free) {
    filtersUpdated.push({
      label: "Gratuito",
      reference: "free",
    });
  }

  if (params.utm.utmCampaign) {
    filtersUpdated.push({
      label: `UTM Campaign: ${params.utm.utmCampaign.trim()}`,
      reference: "utmCampaign",
    });
  }

  if (params.utm.utmContent) {
    filtersUpdated.push({
      label: `UTM Content: ${params.utm.utmContent.trim()}`,
      reference: "utmContent",
    });
  }

  if (params.utm.utmMedium) {
    filtersUpdated.push({
      label: `UTM Medium: ${params.utm.utmMedium.trim()}`,
      reference: "utmMedium",
    });
  }

  if (params.utm.utmSource) {
    filtersUpdated.push({
      label: `UTM Source: ${params.utm.utmSource.trim()}`,
      reference: "utmSource",
    });
  }

  if (params.utm.utmSrc) {
    filtersUpdated.push({
      label: `UTM SRC: ${params.utm.utmSrc.trim()}`,
      reference: "utmSrc",
    });
  }

  if (params.utm.utmTerm) {
    filtersUpdated.push({
      label: `UTM Term: ${params.utm.utmTerm.trim()}`,
      reference: "utmTerm",
    });
  }

  return filtersUpdated;
};
