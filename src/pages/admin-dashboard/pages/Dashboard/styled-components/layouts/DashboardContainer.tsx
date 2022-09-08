import { Box, styled } from '@mui/material';

export const DashboardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  columnGap: '1.8rem',
  gridTemplateColumns: 'auto 20%',

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: 'auto 20rem', // 20%
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
})) as typeof Box;
