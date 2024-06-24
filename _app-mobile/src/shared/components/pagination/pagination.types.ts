export type TPaginationProps = {
  pageNumber: number;
  totalItems: number;
  setPageNumber: (key: number) => void;
  handleSearch: (key: number) => void;
};
