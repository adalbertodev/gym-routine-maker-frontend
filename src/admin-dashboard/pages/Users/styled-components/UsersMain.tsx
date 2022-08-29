import { Box, styled } from '@mui/material';

export const UsersMain = styled(Box)(({ theme }) => ({
  marginTop: 'var(--appbar-height)',
  paddingTop: '2rem',
  height: 'calc(100% - var(--appbar-height))'
})) as typeof Box;
