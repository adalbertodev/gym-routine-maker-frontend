import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

export interface TableCellProps extends BoxProps {
  children: React.ReactNode;

  flex?: number;
}

export const TableCell: FC<TableCellProps> = ({ children, className, sx, flex, ...props }) => {
  return (
    <Box
      className={`table-cell ${className}`}
      sx={{
        boxSizing: 'border-box',
        flex: flex || 1,
        padding: '0 10px',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
