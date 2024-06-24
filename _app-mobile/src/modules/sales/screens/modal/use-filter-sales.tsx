import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { router } from 'expo-router';
import { zodResolver } from '@hookform/resolvers/zod';

import { useSalesStore } from '../../store';
import {
  FormFilterSalesSchema,
  TFormFilterSalesSchema,
} from '../../validator/params';

export const useFilterSales = () => {
  const {
    params,
    modalCalendar,
    handleSelectDate,
    handleShowModalCalendar,
    handleSelectProducts,
    handleSetInitialParams,
    handleSetParams,
  } = useSalesStore((store) => {
    return {
      params: store.params,
      modalCalendar: store.modalCalendar,
      handleSetParams: store.handleSetParams,
      handleSelectDate: store.handleSelectDate,
      handleSetInitialParams: store.handleSetInitialParams,
      handleShowModalCalendar: store.handleShowModalCalendar,
      handleSelectProducts: store.handleSelectProducts,
    };
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const methods = useForm<TFormFilterSalesSchema>({
    resolver: zodResolver(FormFilterSalesSchema),
    defaultValues: {
      affiliation: params.affiliation,
      approved: params.approved,
      autoral: params.autoral,
      coproduction: params.coproduction,
      bankSlip: params.bankSlip,
      chargeback: params.chargeback,
      creditCard: params.creditCard,
      dateFilter: params.dateFilter,
      emailAffiliate: params.emailAffiliate,
      expired: params.expired,
      free: params.free,
      mainSearchFilter: params.mainSearchFilter,
      offerFilter: params.offerFilter,
      oneTime: params.oneTime,
      page: params.page,
      pending: params.pending,
      pix: params.pix,
      productFilter: params.productFilter,
      recurring: params.recurring,
      refresh: params.refresh,
      refunded: params.refunded,
      refused: params.refused,
      isCheckUtmCampaign: false,
      isCheckUtmContent: false,
      isCheckUtmMedium: false,
      isCheckUtmSource: false,
      isCheckUtmSrc: false,
      isCheckUtmTerm: false,
      utmCampaign: params.utmCampaign,
      utmContent: params.utmContent,
      utmMedium: params.utmMedium,
      utmSource: params.utmSource,
      utmSrc: params.utmSrc,
      utmTerm: params.utmTerm,
    },
  });

  const handleSetApplyFilters = (data: TFormFilterSalesSchema) => {
    setIsLoading(true);

    handleSetParams(data);

    setTimeout(() => {
      setIsLoading(false);
      router.dismiss();
    }, 1000);
  };

  const handleNavigationBack = () => {
    router.dismiss();
  };

  return {
    params,
    methods,
    isLoading,
    modalCalendar,
    handleSelectDate,
    handleSelectProducts,
    handleNavigationBack,
    handleSetInitialParams,
    handleShowModalCalendar,
    handleApplyFilters: methods.handleSubmit(handleSetApplyFilters),
  };
};
