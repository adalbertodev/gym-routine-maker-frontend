import { Box, styled } from '@mui/material';

export const AppBarProfileData = styled(Box)(({ theme }) => ({
  alignItems: 'end',
  display: 'flex',
  flexDirection: 'column',
  rowGap: '0.2rem',

  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
})) as typeof Box;
