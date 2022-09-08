import { Button, styled } from '@mui/material';

export const AppBarProfileButton = styled(Button)({
  alignItems: 'center',
  display: 'flex',
  gap: '1rem',
  height: '100%',
  padding: 0,

  ':hover': {
    backgroundColor: 'transparent'
  },
  ':active': {
    filter: 'none'
  }
}) as typeof Button;
