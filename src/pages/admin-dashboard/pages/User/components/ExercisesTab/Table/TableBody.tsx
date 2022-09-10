import { Box, BoxProps } from '@mui/material';
import { FC } from 'react';

interface Props extends BoxProps {
  children: JSX.Element | JSX.Element[];
}

export const TableBody: FC<Props> = ({ children, className, sx, ...props }) => {
  return (
    <Box
      className={`table-body ${className}`}
      sx={{
        overflow: 'auto',

        '::-webkit-scrollbar': {
          width: '10px'
        },

        '::-webkit-scrollbar-track': {
          backgroundColor: '#373a3f',
          borderRadius: '10px'
        },

        '::-webkit-scrollbar-thumb': {
          backgroundColor: '#70757e',
          borderRadius: '10px',

          ':hover': {
            backgroundColor: '#60636b'
          }
        },

        ...sx
      }}
      {...props}
    >
      <Box
        className={`table-body-container ${className}`}
        sx={{
          height: 'auto',
          overflow: 'hidden',
          position: 'relative',
          width: '100%',
          ...sx
        }}
        {...props}
      >
        <Box
          className={`table-body-content ${className}`}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '52px',
            ...sx
          }}
          {...props}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};
