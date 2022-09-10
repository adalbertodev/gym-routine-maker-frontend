import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
  children: JSX.Element | JSX.Element[];
}

export const TableMain: FC<Props> = ({ children, className, sx, ...props }) => {
  return (
    <Box
      className={`table ${className}`}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
        overflow: 'hidden',
        position: 'relative',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
