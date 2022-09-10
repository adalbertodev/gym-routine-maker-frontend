import { usePagination } from '@/hooks';
import { Pagination } from '@/pages/admin-dashboard/components';

import { TableBody } from './TableBody';
import { TableBodyCell } from './TableBodyCell';
import { TableBodyRow } from './TableBodyRow';
import { TableContainer } from './TableContainer';
import { TableHeader } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableMain } from './TableMain';

type FieldValues = {
  [x: string]: any;
};

interface Props<T extends FieldValues> {
  rows: T[];
  columns: any[];
  pageSize?: number;
}

export const Table = <T extends FieldValues>({ columns, rows, pageSize }: Props<T>) => {
  const { currentPage, maxPage, nextPage, prevPage } = usePagination({
    pageSize: pageSize || 10,
    elements: rows.length
  });

  return (
    <TableContainer>
      <TableMain>
        <TableHeader>
          {columns.map(({ headerName, flex }, i) => (
            <TableHeaderCell key={headerName + i} flex={flex}>
              {headerName}
            </TableHeaderCell>
          ))}
        </TableHeader>

        <TableBody>
          {rows
            .filter((_row, index) =>
              pageSize ? index < pageSize * currentPage && index >= pageSize * (currentPage - 1) : true
            )
            .map((row, i) => (
              <TableBodyRow key={row.name + i}>
                {columns.map(({ field, flex }, j) => (
                  <TableBodyCell key={row[field] + i + j} flex={flex}>
                    {row[field]}
                  </TableBodyCell>
                ))}
              </TableBodyRow>
            ))}
        </TableBody>
      </TableMain>

      {pageSize && rows.length > pageSize && (
        <Pagination currentPage={currentPage} maxPage={maxPage} nextPage={nextPage} prevPage={prevPage} />
      )}
    </TableContainer>
  );
};
