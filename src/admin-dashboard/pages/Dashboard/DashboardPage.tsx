import { FC } from 'react';
import { Box, Grid, useTheme } from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import { DashboardInfoCard, UpdateTable } from './components';
import { DashboardContainer, DashboardMain } from './styled-components';

export const DashboardPage: FC = () => {
  const { palette } = useTheme();

  return (
    <DashboardContainer>
      <DashboardMain>
        <Box className='info-section'>
          <DashboardInfoCard
            CardIcon={GroupOutlinedIcon}
            iconColor={palette.success.main}
            percentage={-5}
            title='Total Users'
            value={200}
          />
        </Box>

        <UpdateTable />
      </DashboardMain>
    </DashboardContainer>
  );
};
