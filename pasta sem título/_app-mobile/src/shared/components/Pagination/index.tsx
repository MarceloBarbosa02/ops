import React, { useEffect, useState } from "react";

import ArroBack from "@shared/assets/icons/svg/arrow_back.svg";
import ArroForward from "@shared/assets/icons/svg/arrow_forward.svg";

import * as S from "./styles";
import { useTheme } from "styled-components/native";

interface PaginationProps {
  pageNumber: number;
  totalItems: number;
  setPageNumber: (key: number) => void;
  handleSearch: (key: number) => void;
}

export const Pagination = ({
  pageNumber,
  totalItems,
  setPageNumber,
  handleSearch,
}: PaginationProps) => {
  const theme = useTheme();
  const [pagesButtons, setPagesButtons] = useState<number[]>([]);

  const MAX_ITEMS = 10;
  const MAX_BUTTONS = 3;

  const total = totalItems;
  const totalPages = Math.ceil(total / MAX_ITEMS);

  useEffect(() => {
    let MAX_LEFT = pageNumber - Math.floor(MAX_BUTTONS / 2);
    let MAX_RIGHT = pageNumber + Math.floor(MAX_BUTTONS / 2);

    if (MAX_LEFT < 1) {
      MAX_LEFT = 1;
      MAX_RIGHT = MAX_BUTTONS;
    }

    if (MAX_RIGHT > totalPages) {
      MAX_LEFT = totalPages - (MAX_BUTTONS - 1);
      MAX_RIGHT = totalPages;

      if (MAX_LEFT < 1) MAX_LEFT = 1;
    }

    setPagesButtons([]);
    for (let page = MAX_LEFT; page <= MAX_RIGHT; page += 1) {
      setPagesButtons((prevState) => [...prevState, page]);
    }
  }, [pageNumber, totalPages]);

  return (
    <S.Container>
      <S.PageItem
        onPress={() => {
          setPageNumber(pageNumber - 1);
          handleSearch(pageNumber - 1);
        }}
        disabled={pageNumber === 1}
        isDisabled={pageNumber === 1}
      >
        <ArroBack
          fill={
            pageNumber === 1
              ? theme.colors.color_neutral_40
              : theme.colors.color_neutral_70
          }
        />
      </S.PageItem>
      {(pageNumber !== pageNumber || pageNumber > 3) && (
        <S.PageItem
          onPress={() => {
            setPageNumber(1);
            handleSearch(1);
          }}
        >
          <S.PageText>{1}</S.PageText>
        </S.PageItem>
      )}
      {(pageNumber !== pageNumber || pageNumber > 3) && (
        <S.PageItem disabled={pageNumber === totalPages} active>
          <S.PageText>{"..."}</S.PageText>
        </S.PageItem>
      )}

      {pageNumber < 4 || pageNumber > totalPages - 3 ? (
        <>
          {pagesButtons.map((item, index) => (
            <S.PageItem
              key={String(index)}
              onPress={() => {
                setPageNumber(item);
                handleSearch(item);
              }}
              page={item === pageNumber}
            >
              <S.PageText page={item === pageNumber}>{item}</S.PageText>
            </S.PageItem>
          ))}
        </>
      ) : (
        <S.PageItem page={true}>
          <S.PageText page={true}>{pageNumber}</S.PageText>
        </S.PageItem>
      )}
      {pageNumber < totalPages - 2 && (
        <S.PageItem disabled={pageNumber === totalPages} active>
          <S.PageText>{"..."}</S.PageText>
        </S.PageItem>
      )}
      {pageNumber !== totalPages && pageNumber < totalPages - 2 ? (
        <S.PageItem
          onPress={() => {
            setPageNumber(totalPages);
            handleSearch(totalPages);
          }}
          disabled={pageNumber === totalPages}
        >
          <S.PageText>{totalPages}</S.PageText>
        </S.PageItem>
      ) : null}
      <S.PageItem
        onPress={() => {
          setPageNumber(pageNumber + 1);
          handleSearch(pageNumber + 1);
        }}
        disabled={pageNumber === totalPages}
      >
        <ArroForward
          fill={
            pageNumber === totalPages
              ? theme.colors.color_neutral_40
              : theme.colors.color_neutral_70
          }
        />
      </S.PageItem>
    </S.Container>
  );
};
