import { ValidateCPF, ValidateDocumentIssueDate, format } from "@shared/utils";
import { regexAlphanumeric } from "@shared/utils/regex";
import { isValid, parseISO } from "date-fns";
import { cleanMask } from "masks-br";
import { z } from "zod";

export enum EnumAdditionalDocumentType {
  IDENTITY_CARD = "IDENTITY_CARD",
  DRIVER_LICENSE = "DRIVER_LICENSE",
}

export enum EnumDocumentType {
  CPF = "CPF",
  CNH = "CNH",
}

export const UpdateProfileSchema = z
  .object({
    name: z
      .string({ required_error: "Digite seu nome completo." })
      .trim()
      .min(1, "Digite seu nome completo."),

    nationality: z
      .string({ required_error: "Selecione sua nacionalidade." })
      .min(1, "Selecione sua nacionalidade."),

    language: z
      .string({ required_error: "Selecione um idioma." })
      .min(1, "Selecione um idioma."),

    documentType: z.nativeEnum(EnumDocumentType),

    document: z
      .string({
        required_error: "Digite um documento.",
      })
      .transform((value) => cleanMask(value)),

    additionalDocumentType: z.nativeEnum(EnumAdditionalDocumentType),

    additionalDocument: z
      .string({
        required_error: "Digite um documento extra.",
        invalid_type_error: "Digite um documento extra válido.",
      })
      .regex(regexAlphanumeric, "Digite apenas números e letras.")
      .min(5, "Digite um documento extra válido."),

    additionalDocumentIssueDate: z.string({
      required_error: "Digite a data de emissão do documento.",
    }),

    birthDate: z.string({ required_error: "Digite sua data de nascimento." }),

    phoneNumber: z
      .string({ required_error: "Digite um número de celular." })
      .min(11, "Digite um número de celular válido."),

    email: z
      .string({
        required_error: "Digite um e-mail.",
        invalid_type_error: "Digite um e-mail válido.",
      })
      .email({ message: "Digite um e-mail válido." })
      .min(5, "Digite um e-mail."),

    country: z
      .string({ required_error: "Selecione um país." })
      .min(1, "Selecione um país."),

    zipCode: z
      .string({ required_error: "Digite um CEP." })
      .min(9, "Digite um CEP válido."),

    street: z
      .string({ required_error: "Digite um endereço." })
      .min(3, "Digite um endereço válido."),

    number: z
      .string({ required_error: "Digite um número." })
      .min(1, "Digite um número."),

    complement: z.string().optional(),

    district: z
      .string({ required_error: "Digite um bairro." })
      .min(3, "Digite um bairro válido."),

    city: z
      .string({ required_error: "Digite uma cidade." })
      .min(1, "Digite uma cidade."),

    state: z
      .string({ required_error: "Selecione um estado." })
      .min(1, "Selecione um estado."),
  })
  .superRefine((fields, ctx) => {
    if (fields.document && !ValidateCPF(fields.document)) {
      ctx.addIssue({
        path: ["document"],
        code: "custom",
        message: "Digite um documento válido.",
      });
    }

    if (
      fields.additionalDocumentIssueDate &&
      !ValidateDocumentIssueDate(
        format.formatDateToString(cleanMask(fields.additionalDocumentIssueDate))
      )
    ) {
      ctx.addIssue({
        path: ["additionalDocumentIssueDate"],
        code: "custom",
        message: "Digite uma data de emissão de documento válido.",
      });
    }

    if (
      fields.birthDate &&
      !ValidateDocumentIssueDate(
        format.formatDateToString(cleanMask(fields.birthDate))
      )
    ) {
      ctx.addIssue({
        path: ["birthDate"],
        code: "custom",
        message: "Digite uma data de nascimento válida.",
      });
    }

    if (!fields.documentType) {
      ctx.addIssue({
        path: ["documentType"],
        code: "custom",
        message: "Informe um tipo de documento.",
      });
    }

    if (!fields.additionalDocument) {
      ctx.addIssue({
        path: ["additionalDocument"],
        code: "custom",
        message: "Informe o número de documento.",
      });
    }

    if (!fields.country) {
      ctx.addIssue({
        path: ["country"],
        code: "custom",
        message: "Informe um país.",
      });
    }

    if (!fields.zipCode) {
      ctx.addIssue({
        path: ["zipCode"],
        code: "custom",
        message: "Informe um CEP.",
      });
    }
  })
  .transform((fields) => ({
    name: fields.name ?? null,
    nationality: fields.nationality ?? null,
    language: fields.language ?? null,
    documentType: fields.documentType ?? null,
    document: fields.document ?? null,
    additionalDocumentType: fields.additionalDocumentType ?? null,
    additionalDocument: fields.additionalDocument ?? null,
    additionalDocumentIssueDate: fields.additionalDocumentIssueDate ?? null,
    birthDate: fields.birthDate ?? null,
    phoneNumber: fields.phoneNumber,
    email: fields.email,
    country: fields.country,
    zipCode: fields.zipCode,
    street: fields.street,
    number: fields.number,
    complement: fields.complement,
    district: fields.district,
    city: fields.city,
    state: fields.state,
  }));

export type TUpdateProfileSchema = z.infer<typeof UpdateProfileSchema>;
