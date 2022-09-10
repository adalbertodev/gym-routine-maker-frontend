import { BoxProps } from '@mui/material';
import { FC } from 'react';
import { TableCell, TableCellProps } from './TableCell';

interface Props extends TableCellProps {
  children: React.ReactNode;
}

export const TableBodyCell: FC<Props> = ({ children, className, sx, flex, ...props }) => {
  return (
    <TableCell
      flex={flex}
      className={`table-body-content-cell ${className}`}
      sx={{
        alignItems: 'center',
        borderBottom: '1px solid',
        borderBottomColor: 'backgroundColor.main',
        boxSizing: 'border-box',
        color: 'text.secondary',
        display: 'flex',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        padding: '0 10px',
        whiteSpace: 'nowrap',
        ...sx
      }}
      {...props}
    >
      {children}
    </TableCell>
  );
};
