import { Box, styled } from '@mui/material';

export const DashboardMain = styled(Box)(({ theme }) => ({
  display: 'grid',
  rowGap: '3rem',
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
      gridTemplateColumns: '1fr'
    }
  },
  [theme.breakpoints.between('md', 'lg')]: {
    columnGap: '1.8rem',
    gridColumn: '1 / 3',
    gridTemplateColumns: 'auto 20rem',

    '& .updates-table': {
      gridColumn: '1 / 3'
    }
  },
  [theme.breakpoints.down('md')]: {
    '& .info-section': {
      rowGap: '3rem',
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  }
})) as typeof Box;
