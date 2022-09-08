import { Box, styled } from '@mui/material';

export const PaginationContainer = styled(Box)({
  alignItems: 'center',
  columnGap: '0.5rem',
  display: 'flex',
  justifyContent: 'flex-end',
  letterSpacing: '2px',
  marginTop: 'auto',
  width: '100%'
}) as typeof Box;
