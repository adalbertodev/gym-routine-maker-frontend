import { useCallback, useMemo, useState } from 'react';

interface Options {
  elements: number;
  perPage: number;
}

const defaultOptions: Options = {
  elements: 0,
  perPage: 10
};

export const usePagination = ({ perPage, elements }: Options = defaultOptions) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = useMemo(() => Math.ceil(elements / perPage), [elements]);

  const nextPage = useCallback(() => {
    setCurrentPage(currentPage => (currentPage >= maxPage ? currentPage : currentPage + 1));
  }, [maxPage]);

  const prevPage = useCallback(() => {
    setCurrentPage(currentPage => (currentPage <= 1 ? currentPage : currentPage - 1));
  }, []);

  return {
    currentPage,
    maxPage,
    perPage,

    nextPage,
    prevPage
  };
};
