export interface FetchValuationResponseType {
  valuation: {
    userId: number;
    companyId: number;
    checkoutsCount: number;
    checkoutsSaleDataComplete: number;
    checkoutsSaleDataFinalized: number;
    salesCount: number;
    salesApprovedCount: number;
    salesPixCount: number;
    salesPixApprovedCount: number;
    salesBankSlipCount: number;
    salesBankSlipApprovedCount: number;
    salesCreditCardCount: number;
    salesCreditCardApprovedCount: number;
    salesChargebackCount: number;
    salesRefundedCount: number;
  };
  grade: {
    chargebackGrade: number;
    refundedGrade: number;
    finalGrade: number;
  };
}
