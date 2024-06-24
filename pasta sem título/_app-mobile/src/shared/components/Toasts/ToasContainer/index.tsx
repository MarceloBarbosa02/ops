import React from "react";

import { IMessageProps } from "@shared/types";

import { Toast } from "../Toast";
import * as S from "./styles";

type ToasContainerProps = {
  messages: IMessageProps[];
};

export const ToasContainer = ({ messages }: ToasContainerProps) => {
  return (
    <S.Wrapper>
      <S.Container>
        {messages.map((item, index) => (
          <Toast
            key={index.toString()}
            message={item.message}
            id={item.id}
            type={item.type}
            delay={item.delay}
            isSettings={item.isSettings}
          />
        ))}
      </S.Container>
    </S.Wrapper>
  );
};
