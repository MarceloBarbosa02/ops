import { api } from '@/shared/services/api';
import { useQuery } from '@tanstack/react-query';
import { FetchValuationResponseType } from './valuation.types';
import { COMPANIES_EVALUATION } from '@/shared/constants';
import { useAuthStore } from '@/shared/store';

async function fetchValuation(): Promise<FetchValuationResponseType> {
  const { data } = await api.get(COMPANIES_EVALUATION);
  console.log('data.valuations', { data });

  // const data = {
  //   data: {
  //     valuation: {
  //       userId: 2001212,
  //       companyId: 9102312,
  //       checkoutsCount: 1003,
  //       checkoutsSaleDataComplete: 123,
  //       checkoutsSaleDataFinalized: 13,
  //       salesCount: 100,
  //       salesApprovedCount: 123,
  //       salesPixCount: 63,
  //       salesPixApprovedCount: 13,
  //       salesBankSlipCount: 33,
  //       salesBankSlipApprovedCount: 3,
  //       salesCreditCardCount: 123,
  //       salesCreditCardApprovedCount: 13,
  //       salesChargebackCount: 123,
  //       salesRefundedCount: 103,
  //     },
  //     grade: {
  //       chargebackGrade: 13,
  //       refundedGrade: 12,
  //       finalGrade: 4.8,
  //     },
  //   },
  // };

  return data.data;
}

export function useFetchValuation() {
  const token = useAuthStore((store) => store.token);

  return useQuery({
    queryKey: ['/valuation'],
    queryFn: fetchValuation,
    enabled: !!token,
    refetchOnWindowFocus: true,
  });
}
