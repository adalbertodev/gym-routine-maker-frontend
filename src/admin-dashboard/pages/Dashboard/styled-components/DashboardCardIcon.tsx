import { IconProps, styled, SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { DashboardIcon } from './DashboardIcon';

interface Props extends IconProps {
  ShowIcon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>>;

  backgroundColor?: string;
}

const Composition = ({ ShowIcon, backgroundColor, ...props }: Props) => (
  <DashboardIcon {...props}>
    <ShowIcon />
  </DashboardIcon>
);

export const DashboardCardIcon = styled(Composition)(({ backgroundColor, theme }) => ({
  backgroundColor: backgroundColor || theme.palette.primary.main,
  borderRadius: '50%',
  color: theme.palette.backgroundColor.light,
  fontSize: '3.5rem',
  justifyContent: 'center',
  marginBottom: '0.5rem'
}));
