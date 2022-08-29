import { Box, styled } from '@mui/material';

export const AdminDashboardContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gap: '1.8rem',
  gridTemplateColumns: 'var(--sidebar-width) auto',
  height: '100vh',
  margin: '0 auto',
  paddingBottom: '4rem',
  position: 'relative',
  width: 'var(--container-width)',

  [theme.breakpoints.down('lg')]: {
    gridTemplateColumns: '7rem auto'
  },
  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr'
  }
})) as typeof Box;
