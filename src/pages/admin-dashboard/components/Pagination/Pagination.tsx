import {
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon
} from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import { FC } from 'react';

import { PaginationContainer } from '../../styled-components';

interface Props {
  currentPage: number;
  maxPage: number;

  nextPage: () => void;
  prevPage: () => void;
}

export const Pagination: FC<Props> = ({ currentPage, maxPage, nextPage, prevPage }) => {
  return (
    <PaginationContainer>
      <Typography variant='body2'>
        {currentPage} / {maxPage}
      </Typography>

      <Box>
        <IconButton onClick={prevPage}>
          <KeyboardArrowLeftIcon />
        </IconButton>

        <IconButton onClick={nextPage}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </Box>
    </PaginationContainer>
  );
};
