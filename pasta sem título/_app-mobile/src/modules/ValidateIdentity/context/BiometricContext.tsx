import { ReactNode, createContext, useContext, useMemo, useState } from "react";

export interface TypeDocument {
  type: TypeDocumentProps;
  imageBase64: string;
  jwt: string;
}

export type TypeDocumentProps =
  | "DRIVER_LICENSE_VERSE"
  | "IDENTITY_CARD_VERSE"
  | "DRIVER_LICENSE_FRONT"
  | "IDENTITY_CARD_FRONT"
  | "SELFIE";

export type DataPhoto = {
  base64: string;
  encrypted: string;
};

export interface IDocumentBiometricsContext {
  selfie: TypeDocument;
  typeDocumentBack: TypeDocumentProps;
  typeDocumentFront: TypeDocumentProps;
  handleSelfie(data: DataPhoto): void;
  handleSelectTypeDocument(type: "RG" | "CNH"): void;
}

export const DocumentBiometricsContext =
  createContext<IDocumentBiometricsContext>({} as IDocumentBiometricsContext);

interface IProps {
  children: ReactNode;
}

const DocumentBiometricsProvider = ({ children }: IProps) => {
  const [typeDocumentBack, setDocumentTypeBack] = useState<TypeDocumentProps>(
    "IDENTITY_CARD_VERSE"
  );
  const [typeDocumentFront, setDocumentTypeFront] = useState<TypeDocumentProps>(
    "IDENTITY_CARD_FRONT"
  );
  const [selfie, setSelfie] = useState<TypeDocument>({} as TypeDocument);

  const handleSelectTypeDocument = (type: "RG" | "CNH") => {
    if (type === "RG") {
      setDocumentTypeBack("IDENTITY_CARD_VERSE");
      setDocumentTypeFront("IDENTITY_CARD_FRONT");
    } else {
      setDocumentTypeBack("DRIVER_LICENSE_VERSE");
      setDocumentTypeFront("DRIVER_LICENSE_FRONT");
    }
  };

  const handleSelfie = (data: DataPhoto) => {
    setSelfie({
      type: "SELFIE",
      imageBase64: data.base64,
      jwt: data.encrypted,
    });
  };

  const values = useMemo(
    () => ({
      selfie,
      typeDocumentBack,
      typeDocumentFront,
      handleSelfie,
      handleSelectTypeDocument,
    }),
    [selfie, typeDocumentBack, typeDocumentFront]
  );

  return (
    <DocumentBiometricsContext.Provider value={values}>
      {children}
    </DocumentBiometricsContext.Provider>
  );
};

const useBiometric = () => {
  const context = useContext(DocumentBiometricsContext);

  if (!context) {
    throw new Error("useBiometric");
  }
  return context;
};

export { DocumentBiometricsProvider, useBiometric };
