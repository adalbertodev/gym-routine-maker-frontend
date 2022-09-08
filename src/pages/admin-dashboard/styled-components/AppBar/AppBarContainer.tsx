import { Box, styled } from '@mui/material';

export const AppBarContainer = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: 'var(--appbar-height)',
  justifyContent: 'flex-end',
  padding: '0 calc((100% - var(--container-width)) / 2)',
  position: 'fixed',
  right: 0,
  top: 0,
  width: 'calc(100% - var(--sidebar-width))',

  [theme.breakpoints.down('md')]: {
    boxShadow: 20,
    left: 0,
    padding: '0 1rem',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000
  }
})) as typeof Box;
