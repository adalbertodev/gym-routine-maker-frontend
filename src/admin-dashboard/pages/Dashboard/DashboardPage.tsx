import { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

import { DashboardInfoCard } from './components/DashboardInfoCard';
import { DashboardMain } from './styled-components';
import { UpdateTable } from './components/UpdateTable';

export const DashboardPage: FC = () => {
  const { palette } = useTheme();

  return (
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
  );
};
