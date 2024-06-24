import { z } from 'zod';

export const MarketplaceSchema = z.object({
  uuid: z.string(),
  name: z.string(),
  productUuid: z.string(),
  description: z.string(),
  // language: z.enum([AvailableLanguages["pt-BR"], AvailableLanguages["en-US"]]),
  categoryUuid: z.string(),
  category: z
    .object({
      uuid: z.string(),
      name: z.string().optional(),
    })
    .optional(),

  formatUuid: z.string(),
  format: z
    .object({
      uuid: z.string(),
      name: z.string().optional(),
    })
    .optional(),

  // offers: z.array(
  //   z.object({
  //     name: z.string(),
  //     price: z.number(),
  //     promotionalPrice: z.number().optional(),
  //     commission: z.number(),
  //     chargeFrequency: z.nativeEnum(OfferConstants.ChargeFrequency).optional(),
  //     isFree: z.boolean(),
  //     link: z.string().nullable(),
  //   })
  // ),
  producer: z.object({
    uuid: z.string(),
    name: z.string(),
  }),
  // currency: z.nativeEnum(AvailableCurrencies),
  maxCommission: z.number(),
  // scoreLevel: z.nativeEnum(MarketplaceEnums.ScoreLevel),
  score: z.number(),
  isOwner: z.boolean(),
  isAffiliated: z.boolean(),
  // affiliationStatus: z.nativeEnum(AffiliateConstants.Status).nullable(),
  photo: z.string().nullable(),

  affiliateUuid: z.string().nullable(),
  // affiliate: AffiliateSchema,

  isCompanyOwner: z.boolean(),
  isCoproducer: z.boolean(),
});
