import { GroupOutlined as GroupOutlinedIcon } from '@mui/icons-material';
import { Box, useTheme } from '@mui/material';
import { FC } from 'react';

import { DashboardInfoCard, UpdateTable } from './components';
import { DashboardContainer, DashboardMain } from './styled-components';

export const DashboardPage: FC = () => {
  const { palette } = useTheme();

  return (
    <DashboardContainer className='page-container'>
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
