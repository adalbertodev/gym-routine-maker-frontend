import { Box, MenuItem, styled } from '@mui/material';

export const AppBarMenuItem = styled(MenuItem)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  gap: '0.5rem',
  width: '130px'
})) as typeof MenuItem;
