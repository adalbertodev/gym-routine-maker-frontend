import { FC } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { DashboardIcon } from './DashboardIcon';

interface Props {
  ShowIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

  color?: string;
}

export const DashboardCardIcon: FC<Props> = ({ color, ShowIcon }) => {
  return (
    <DashboardIcon
      sx={{
        backgroundColor: color || 'primary.main',
        borderRadius: '50%',
        color: ({ palette }) => palette.backgroundColor.light,
        fontSize: '3.5rem',
        justifyContent: 'center',
        marginBottom: '0.5rem'
      }}
    >
      <ShowIcon sx={{ fontSize: '1.8rem' }} />
    </DashboardIcon>
  );
};
