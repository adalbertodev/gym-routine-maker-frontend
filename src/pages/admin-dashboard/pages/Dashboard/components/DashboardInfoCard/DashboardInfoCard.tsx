import { AdminCard } from '@/pages/admin-dashboard/styled-components';
import {
  KeyboardArrowDown as KeyboardArrowDownIcon,
  KeyboardArrowUp as KeyboardArrowUpIcon
} from '@mui/icons-material';
import { Box, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { FC } from 'react';

import { DashboardCardIcon, DashboardIcon, DashboardInfoCardBox } from '../../styled-components';

interface Props {
  CardIcon: OverridableComponent<SvgIconTypeMap>;
  percentage: number;
  title: string;
  value: number;

  iconColor?: string;
}

export const DashboardInfoCard: FC<Props> = ({ CardIcon, iconColor, percentage, title, value }) => {
  const isPositive = percentage > 0;
  const PercentageIcon = isPositive ? KeyboardArrowUpIcon : KeyboardArrowDownIcon;

  return (
    <AdminCard>
      <DashboardInfoCardBox>
        <Box className='info-card-content'>
          <Box>
            <Typography className='info-card-title' component='h3' variant='h3'>
              {title}
            </Typography>

            <Typography className='info-card-value' component='h2' variant='h2'>
              {value}
            </Typography>
          </Box>

          <Box className={`info-card-percentage-box ${isPositive ? 'positive' : 'negative'}`}>
            <DashboardIcon>
              <PercentageIcon />
            </DashboardIcon>

            <Typography className='percentage' component='h3' variant='h3'>
              {Math.abs(percentage)}%
            </Typography>

            <Typography variant='caption'>Since last month</Typography>
          </Box>
        </Box>

        <DashboardCardIcon backgroundColor={iconColor} ShowIcon={CardIcon} />
      </DashboardInfoCardBox>
    </AdminCard>
  );
};
