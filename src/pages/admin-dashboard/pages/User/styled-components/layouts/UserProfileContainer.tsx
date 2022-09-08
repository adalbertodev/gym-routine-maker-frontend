import { Box, styled } from '@mui/material';

export const UserProfileContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateRows: 'calc(30% - 1rem) calc(60% - 2rem) calc(10% - 1rem)',
  height: '100%',
  rowGap: '2rem',

  '& .photo-section': {
    alignItems: 'center',
    columnGap: '2rem',
    display: 'flex',

    '& .photo': {
      backgroundColor: theme.palette.success.main,
      color: theme.palette.text.primary,
      fontSize: '8rem',
      height: '7.5rem',
      width: '7.5rem',
    },
  },

  '& .data-section': {
    display: 'grid',
    gap: '1.8rem',
    gridTemplateColumns: 'repeat(2, 1fr)',
    height: 'fit-content',
  },

  '& .save-section': {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'flex-end',
  },
})) as typeof Box;
