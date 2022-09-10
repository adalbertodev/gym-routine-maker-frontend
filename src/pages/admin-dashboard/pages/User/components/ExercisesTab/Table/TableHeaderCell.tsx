import { Box } from '@mui/material';
import { FC } from 'react';
import { TableCell, TableCellProps } from './TableCell';

interface Props extends TableCellProps {
  children: React.ReactNode;
}

export const TableHeaderCell: FC<Props> = ({ children, className, sx, flex, ...props }) => {
  return (
    <TableCell
      flex={flex}
      className={`table-header-cell ${className}`}
      sx={{
        alignItems: 'center',
        display: 'flex',
        height: '56px',
        position: 'relative',
        ...sx
      }}
      {...props}
    >
      <Box
        className={`table-header-cell-container ${className}`}
        sx={{
          alignItems: 'center',
          display: 'flex',
          flex: 1,
          minWidth: 0,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          ...sx
        }}
        {...props}
      >
        <Box
          className={`table-header-cell-content ${className}`}
          sx={{
            alignItems: 'center',
            display: 'flex',
            overflow: 'hidden',
            ...sx
          }}
          {...props}
        >
          <Box
            className={`table-header-cell-content-render ${className}`}
            sx={{
              fontWeight: 500,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              ...sx
            }}
            {...props}
          >
            {children}
          </Box>
        </Box>
      </Box>
    </TableCell>
  );
};
