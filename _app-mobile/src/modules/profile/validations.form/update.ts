import {
  EnumAdditionalDocumentType,
  EnumDocumentType,
  format,
  regexAlphanumeric,
} from '@/shared';
import {
  ValidateCPF,
  ValidateDocumentIssueDate,
} from '@/shared/utils/validations';
import { cleanMask } from 'masks-br';
import { z } from 'zod';
import { validYearDate } from '../utils/validYearDate';

export const UpdateProfileSchema = z
  .object({
    name: z
      .string({ required_error: 'Digite seu nome.' })
      .trim()
      .min(1, 'Digite seu nome.'),

    nationality: z
      .string({ required_error: 'Selecione sua nacionalidade.' })
      .min(1, 'Selecione sua nacionalidade.'),

    language: z
      .string({ required_error: 'Selecione um idioma.' })
      .min(1, 'Selecione um idioma.'),

    documentType: z.nativeEnum(EnumDocumentType),

    document: z.string({
      required_error: 'Digite um documento.',
    }),

    additionalDocumentType: z.nativeEnum(EnumAdditionalDocumentType),

    additionalDocument: z
      .string({
        required_error: 'Digite um documento extra.',
        invalid_type_error: 'Digite um documento extra válido.',
      })
      .regex(regexAlphanumeric, 'Digite apenas números.')
      .min(5, 'Digite um documento extra válido.'),

    additionalDocumentIssueDate: z.string({
      required_error: 'Digite a data de emissão do documento.',
    }),

    birthDate: z.string({ required_error: 'Digite sua data de nascimento.' }),

    phoneNumber: z
      .string({ required_error: 'Digite um número de celular.' })
      .min(11, 'Digite um número de celular válido.'),

    email: z
      .string({
        required_error: 'Digite um e-mail.',
        invalid_type_error: 'Digite um e-mail válido.',
      })
      .email({ message: 'Digite um e-mail válido.' })
      .min(5, 'Digite um e-mail.'),

    country: z
      .string({ required_error: 'Selecione um país.' })
      .min(1, 'Selecione um país.'),

    zipCode: z
      .string({ required_error: 'Digite um CEP.' })
      .min(8, 'Digite um CEP válido.'),

    street: z
      .string({ required_error: 'Digite um endereço.' })
      .min(3, 'Digite um endereço válido.'),

    number: z
      .string({ required_error: 'Digite um número.' })
      .min(1, 'Digite um número.'),

    complement: z.string().optional(),

    district: z
      .string({ required_error: 'Digite um bairro.' })
      .min(3, 'Digite um bairro válido.'),

    city: z
      .string({ required_error: 'Digite uma cidade.' })
      .min(1, 'Digite uma cidade.'),

    state: z
      .string({ required_error: 'Selecione um estado.' })
      .min(1, 'Selecione um estado.'),

    acceptTerms: z.boolean(),
  })
  .refine((fields) => ValidateCPF(fields.document), {
    path: ['document'],
    message: 'Digite um documento válido.',
  })
  .refine(
    (fields) =>
      fields.additionalDocumentIssueDate &&
      !validYearDate(fields.additionalDocumentIssueDate, 10),
    {
      path: ['additionalDocumentIssueDate'],
      message: 'Verifique o ano de emissão do RG.',
    }
  )
  .refine(
    (fields) =>
      fields.birthDate &&
      ValidateDocumentIssueDate(
        format.formatDateToString(cleanMask(fields.birthDate))
      ),
    {
      path: ['birthDate'],
      message: 'Digite uma data de nascimento válida.',
    }
  )
  .refine((fields) => fields.acceptTerms, {
    path: ['acceptTerms'],
    message: 'Reconheça que as informações são verdadeiras.',
  });

export type TUpdateProfileSchema = z.infer<typeof UpdateProfileSchema>;
