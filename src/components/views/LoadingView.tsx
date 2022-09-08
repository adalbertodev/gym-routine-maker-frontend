import { CircularProgress } from '@mui/material';
import { FC } from 'react';

import { CenteredBox } from '@/styled-components';

export const LoadingView: FC = () => {
  return (
    <CenteredBox>
      <CircularProgress />
    </CenteredBox>
  );
};
