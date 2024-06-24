import { TypeDocument } from "../context/BiometricContext";
import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/services/api";

export function useFetchDocumentBiometric() {
  return useMutation(async (data: TypeDocument) => {
    return await api.post("/biometry/save-document", data);
  });
}
