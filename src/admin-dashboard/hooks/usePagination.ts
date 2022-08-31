import { useMemo, useState } from 'react';

interface options {
  elements: number;
  perPage: number;
}

export const usePagination = ({ perPage, elements }: options = { elements: 0, perPage: 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = useMemo(() => Math.ceil(elements / perPage), [elements]);

  const nextPage = () => {
    setCurrentPage(currentPage => {
      if (currentPage >= maxPage) return currentPage;
      return currentPage + 1;
    });
  };

  const prevPage = () => {
    setCurrentPage(currentPage => {
      if (currentPage <= 1) return currentPage;
      return currentPage - 1;
    });
  };

  return {
    currentPage,
    maxPage,
    perPage,

    nextPage,
    prevPage
  };
};
