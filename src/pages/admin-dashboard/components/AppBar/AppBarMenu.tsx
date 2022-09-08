import { Logout as LogoutIcon, Settings as SettingsIcon } from '@mui/icons-material';
import { Menu, MenuProps, Typography } from '@mui/material';
import { FC } from 'react';

import { CenteredIcon } from '@/styled-components';
import { AppBarMenuItem } from '../../styled-components';

interface Props extends MenuProps {
  anchorEl: HTMLElement | null;

  handleClosePopMenu: () => void;
}

export const AppBarMenu: FC<Props> = ({ anchorEl, handleClosePopMenu, ...props }) => {
  return (
    <Menu anchorEl={anchorEl} MenuListProps={{ onClick: handleClosePopMenu }} onClose={handleClosePopMenu} {...props}>
      <AppBarMenuItem>
        <CenteredIcon fontSize='small'>
          <SettingsIcon />
        </CenteredIcon>

        <Typography component='span'>Settings</Typography>
      </AppBarMenuItem>

      <AppBarMenuItem>
        <CenteredIcon fontSize='small'>
          <LogoutIcon />
        </CenteredIcon>

        <Typography component='span'>Logout</Typography>
      </AppBarMenuItem>
    </Menu>
  );
};
