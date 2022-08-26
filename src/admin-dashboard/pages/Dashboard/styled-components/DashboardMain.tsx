import { FC } from 'react';
import { Box, useTheme } from '@mui/material';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const DashboardMain: FC<Props> = ({ children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: 'grid',
        gap: '3rem',
        gridTemplateRows: '12rem auto',
        marginTop: '4.5rem',
        paddingTop: '2rem',

        '& .info-section': {
          display: 'grid',
          gap: '1.6rem',
          gridTemplateColumns: 'repeat(3, 1fr)'
        },

        [theme.breakpoints.down('xl')]: {
          '& .info-section': {
            gridTemplateColumns: 'repeat(2, 1fr)'
          }
        },
        [theme.breakpoints.down('lg')]: {
          '& .info-section': {
            gap: '0',
            gridTemplateColumns: '1fr'
          }
        },
        [theme.breakpoints.between('md', 'lg')]: {
          gridColumn: '2 / 4',
          gridTemplateColumns: 'auto 20rem',

          '& .updates-table': {
            gridColumn: '1 / 3'
          }
        }
      }}
    >
      {children}
    </Box>
  );
};
