import { Icon, IconProps } from '@mui/material';
import { FC } from 'react';

interface Props extends IconProps {
  children: JSX.Element | JSX.Element[];
}

export const DashboardIcon: FC<Props> = ({ children, sx }) => {
  return (
    <Icon
      sx={{
        alignItems: 'center',
        display: 'flex',
        ...sx
      }}
    >
      {children}
    </Icon>
  );
};
