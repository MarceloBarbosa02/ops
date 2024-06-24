export interface IStepsProps {
  step: TSteps;
  lead: TLeads;
}

export type TSteps = 'one' | 'two' | 'three' | 'four' | 'five' | 'six';
export type TLeads =
  | 'onlineSales'
  | 'digitalProductPlans'
  | 'monthlyBilling'
  | 'businessType'
  | 'accommodation'
  | 'howDidYouMeetKirvano'
  | 'physicalOrDigitalProduct'
  | 'typeOfProductYouSell';

export type TMonthlyBilling =
  | 'upTo10k'
  | 'between10kAnd100k'
  | 'between100kAnd500k'
  | 'between500kAnd1m'
  | 'above1m'
  | '';
export type TBusinessType = 'legalPerson' | 'physicalPerson' | '';
export type TAccommodation =
  | 'hotmart'
  | 'monetize'
  | 'eduzz'
  | 'kiwify'
  | 'perfectPay'
  | 'heroSpark'
  | 'doppus'
  | 'other';
export type THowDidYouMeetKirvano =
  | 'search'
  | 'recommendation'
  | 'announcement'
  | 'influencer'
  | 'other'
  | '';
export type TPhysicalOrDigitalProduct = 'digital' | 'physical' | '';
export type TTypeOfProductYouSell =
  | 'extraIncome'
  | 'bets'
  | 'weightLoss'
  | 'relationships'
  | 'sexuality'
  | 'business'
  | 'educational'
  | 'other';

export interface ILeadCaptureStoreContext {
  leads: typeof initialStateCapture;
  totalStepsYes: number;
  totalStepsNo: number;
  stepProgressYes: number;
  stepProgressNo: number;
  handleChangeOnlineSales(value: string): void;
  handleChangeDigitalProductPlans(value: string): void;
  handleChangeMonthlyBilling(value: TMonthlyBilling): void;
  handleChangeBusinessType(value: TBusinessType): void;
  handleChangeAccommodation(value: TAccommodation): void;
  handleChangeHowDidYouMeetKirvano(
    value: THowDidYouMeetKirvano,
    reason: string
  ): void;
  handleChangePhysicalOrDigitalProduct(value: TPhysicalOrDigitalProduct): void;
  handleChangeTypeOfProductYouSell(value: TTypeOfProductYouSell): void;
  handleResetState(): void;
  handleSetInitialParams(): void;
}

export const initialStateCapture = {
  onlineSales: '',
  digitalProductPlans: '',
  monthlyBilling: '',
  businessType: '',
  accommodation: {
    hotmart: false,
    monetize: false,
    eduzz: false,
    kiwify: false,
    perfectPay: false,
    heroSpark: false,
    doppus: false,
    other: false,
  },
  howDidYouMeetKirvano: {
    option: '',
    reason: '',
  },
  physicalOrDigitalProduct: '',
  typeOfProductYouSell: {
    extraIncome: false,
    bets: false,
    weightLoss: false,
    relationships: false,
    sexuality: false,
    business: false,
    educational: false,
    other: false,
  },
};
