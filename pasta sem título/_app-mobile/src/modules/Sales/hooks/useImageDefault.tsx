import { useTheme } from "styled-components/native";
import { useState } from "react";
import axios from "axios";

import EbookDark from "@shared/assets/images/svg/sales/ebook-default-dark.svg";
import EbookLight from "@shared/assets/images/svg/sales/ebook-default-light.svg";
import ServiceDark from "@shared/assets/images/svg/sales/service-default-dark.svg";
import ServiceLight from "@shared/assets/images/svg/sales/service-default-light.svg";
import VideoClassDark from "@shared/assets/images/svg/sales/videoclass-default-dark.svg";
import VideoClassLight from "@shared/assets/images/svg/sales/videoclass-default-light.svg";

import {
  IconDocumentPdf,
  IconDocumentService,
  IconDocumentVideo,
} from "../icons";
import * as S from "../components/Items/ItemProduct/styles";

export const useImageDefault = () => {
  const theme = useTheme();
  const [imgProduct, setImgProduct] = useState<string>("");

  const handleLoadImage = async (url: string) => {
    try {
      const response = await axios.get(url);

      if (response.status === 200) {
        setImgProduct(url);
      }
    } catch (error) {
      setImgProduct("");
    }
  };

  const defaultProduct = (format: string) => {
    switch (format) {
      case "videoclass":
      case "video-aula":
      case "Vídeo aula":
      case "community":
      case "comunidade":
      case "Comunidade":
      case "Curso":
        return theme.theme === "dark" ? (
          <VideoClassDark />
        ) : (
          <VideoClassLight />
        );

      case "service":
      case "servicos":
      case "Serviço":
      case "Serviços":
        return theme.theme === "dark" ? <ServiceDark /> : <ServiceLight />;

      default:
        return theme.theme === "dark" ? <EbookDark /> : <EbookLight />;
    }
  };

  const defaultTypeProduct = (format: string, filesAmount: number) => {
    // console.log()
    switch (format) {
      case "videoclass":
      case "video-aula":
      case "Vídeo aula":
      case "community":
      case "comunidade":
      case "Comunidade":
      case "Curso":
        return (
          <S.WrapperFormat>
            <IconDocumentVideo />
            <S.Description>Curso</S.Description>
          </S.WrapperFormat>
        );

      case "service":
      case "servicos":
      case "Serviço":
      case "Serviços":
        return (
          <S.WrapperFormat>
            <IconDocumentService />
            <S.Description>Serviço</S.Description>
          </S.WrapperFormat>
        );

      default:
        return (
          <S.WrapperFormat>
            <IconDocumentPdf />
            <S.Description>{filesAmount} arquivo</S.Description>
          </S.WrapperFormat>
        );
    }
  };

  return {
    imgProduct,
    defaultProduct,
    handleLoadImage,
    defaultTypeProduct,
  };
};
