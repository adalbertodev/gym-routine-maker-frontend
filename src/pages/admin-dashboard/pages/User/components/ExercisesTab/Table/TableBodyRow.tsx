import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
  children: JSX.Element | JSX.Element[];
}

export const TableBodyRow: FC<Props> = ({ children, className, sx, ...props }) => {
  return (
    <Box
      className={`table-body-content-row ${className}`}
      sx={{
        breakInside: 'avoid',
        display: 'flex',
        minHeight: '52px',
        width: '100%',

        ':hover': {
          backdropFilter: 'brightness(1.05)'
        },
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
