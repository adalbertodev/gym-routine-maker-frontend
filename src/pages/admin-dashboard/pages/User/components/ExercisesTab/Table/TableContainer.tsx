import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
  children: React.ReactNode;
}

export const TableContainer: FC<Props> = ({ children, className, sx, ...props }) => {
  return (
    <Box
      className={`container ${className}`}
      sx={{
        borderRadius: '4px',
        boxSizing: 'border-box',
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        letterSpacing: '0.01071em',
        lineHeight: '1.43',
        outline: 'none',
        position: 'relative',
        ...sx
      }}
      {...props}
    >
      {children}
    </Box>
  );
};
