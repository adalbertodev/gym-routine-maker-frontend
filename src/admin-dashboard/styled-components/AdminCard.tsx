import { Card, styled } from '@mui/material';

export const AdminCard = styled(Card)({
  borderRadius: '2rem',
  boxShadow: '0 0.6rem 0.8rem -0.4rem rgba(0, 0, 0, 0.2), 0 1.25rem 2rem 0.2rem rgba(0, 0, 0, 0.14)',
  padding: '1.8rem',
  transition: 'box-shadow 300ms ease',

  ':hover': {
    boxShadow: 'none'
  }
}) as typeof Card;
