import { IconButton, styled } from '@mui/material';

export const DrawerButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  fontSize: '2rem',

  [theme.breakpoints.down('md')]: {
    display: 'inline-flex'
  }
})) as typeof IconButton;
