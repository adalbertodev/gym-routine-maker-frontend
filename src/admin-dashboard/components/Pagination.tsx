import { FC } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Props {
  currentPage: number;
  maxPage: number;

  nextPage: () => void;
  prevPage: () => void;
}

export const Pagination: FC<Props> = ({ currentPage, maxPage, nextPage, prevPage }) => {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: 'auto',
        width: '100%'
      }}
    >
      <Typography variant='body2' sx={{ letterSpacing: '2px', paddingRight: '0.5rem' }}>
        {currentPage} / {maxPage}
      </Typography>

      <IconButton onClick={prevPage}>
        <KeyboardArrowLeftIcon />
      </IconButton>

      <IconButton onClick={nextPage}>
        <KeyboardArrowRightIcon />
      </IconButton>
    </Box>
  );
};
