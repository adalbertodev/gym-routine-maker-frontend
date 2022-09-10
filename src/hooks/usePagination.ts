import { useCallback, useMemo, useState } from 'react';

interface Options {
  elements: number;
  pageSize: number;
}

const defaultOptions: Options = {
  elements: 0,
  pageSize: 10
};

export const usePagination = ({ pageSize, elements }: Options = defaultOptions) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = useMemo(() => Math.ceil(elements / pageSize), [elements]);

  const nextPage = useCallback(() => {
    setCurrentPage(currentPage => (currentPage >= maxPage ? currentPage : currentPage + 1));
  }, [maxPage]);

  const prevPage = useCallback(() => {
    setCurrentPage(currentPage => (currentPage <= 1 ? currentPage : currentPage - 1));
  }, []);

  return {
    currentPage,
    maxPage,
    pageSize,

    nextPage,
    prevPage
  };
};
