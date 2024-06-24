import { z } from 'zod';

export const FormFilterSalesSchema = z
  .object({
    emailAffiliate: z.string().optional(),
    dateFilter: z.array(z.date()).optional(),
    mainSearchFilter: z.string().optional(),
    page: z.number().optional(),
    productFilter: z.string().optional(),
    offerFilter: z.string().optional(),
    refresh: z.number().optional(),
    autoral: z.boolean().optional(),
    affiliation: z.boolean().optional(),
    coproduction: z.boolean().optional(),
    oneTime: z.boolean().optional(),
    recurring: z.boolean().optional(),
    bankSlip: z.boolean().optional(),
    creditCard: z.boolean().optional(),
    free: z.boolean().optional(),
    pix: z.boolean().optional(),
    approved: z.boolean().optional(),
    chargeback: z.boolean().optional(),
    expired: z.boolean().optional(),
    pending: z.boolean().optional(),
    refunded: z.boolean().optional(),
    refused: z.boolean().optional(),
    isCheckUtmCampaign: z.boolean().optional(),
    isCheckUtmContent: z.boolean().optional(),
    isCheckUtmMedium: z.boolean().optional(),
    isCheckUtmSource: z.boolean().optional(),
    isCheckUtmSrc: z.boolean().optional(),
    isCheckUtmTerm: z.boolean().optional(),
    utmCampaign: z.string().optional(),
    utmContent: z.string().optional(),
    utmMedium: z.string().optional(),
    utmSource: z.string().optional(),
    utmSrc: z.string().optional(),
    utmTerm: z.string().optional(),
  })
  .superRefine((fields, ctx) => {
    if (fields?.isCheckUtmCampaign && Number(fields.utmCampaign?.length) < 1) {
      ctx.addIssue({
        path: ['utmCampaign'],
        code: z.ZodIssueCode.custom,
        message: 'Campo Campaign é obrigatório.',
      });
    }
    if (fields?.isCheckUtmContent && Number(fields.utmContent?.length) < 1) {
      ctx.addIssue({
        path: ['utmContent'],
        code: z.ZodIssueCode.custom,
        message: 'Campo Content é obrigatório.',
      });
    }
    if (fields?.isCheckUtmMedium && Number(fields.utmMedium?.length) < 1) {
      ctx.addIssue({
        path: ['utmMedium'],
        code: z.ZodIssueCode.custom,
        message: 'Campo Medium é obrigatório.',
      });
    }
    if (fields?.isCheckUtmSource && Number(fields.utmSource?.length) < 1) {
      ctx.addIssue({
        path: ['utmSource'],
        code: z.ZodIssueCode.custom,
        message: 'Campo Source é obrigatório.',
      });
    }
    if (fields?.isCheckUtmSrc && Number(fields.utmSrc?.length) < 1) {
      ctx.addIssue({
        path: ['utmSrc'],
        code: z.ZodIssueCode.custom,
        message: 'Campo Src é obrigatório.',
      });
    }
    if (fields?.isCheckUtmTerm && Number(fields.utmTerm?.length) < 1) {
      ctx.addIssue({
        path: ['utmTerm'],
        code: z.ZodIssueCode.custom,
        message: 'Campo Term é obrigatório.',
      });
    }
  });

export type TFormFilterSalesSchema = z.infer<typeof FormFilterSalesSchema>;
