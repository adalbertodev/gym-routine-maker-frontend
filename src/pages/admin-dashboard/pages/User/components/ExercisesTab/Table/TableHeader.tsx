import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

export const TableHeader: FC<Props> = ({ children, className, sx, ...props }) => {
  return (
    <Box
      className={`table-header ${className}`}
      sx={{
        borderBottom: '1px solid',
        borderBottomColor: 'backgroundColor.main',
        display: 'flex',
        minHeight: '56px',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
