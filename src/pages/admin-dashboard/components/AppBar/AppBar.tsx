import { Menu as MenuIcon } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { FC, useContext } from 'react';

import { useMenu } from '@/hooks';
import { UiContext } from '../../contexts';
import {
  AppBarContainer,
  AppBarProfileButton,
  AppBarProfileContainer,
  AppBarProfileData
} from '../../styled-components';
import { DrawerButton } from '../../styled-components/inputs';
import { ProfileAvatar } from '../ProfileAvatar';
import { AppBarMenu } from './AppBarMenu';

export const AppBar: FC = () => {
  const { toogleSidebarOpen } = useContext(UiContext);
  const { anchorEl, handleCloseMenu, handleOpenMenu } = useMenu();

  return (
    <AppBarContainer>
      <DrawerButton onClick={toogleSidebarOpen}>
        <MenuIcon />
      </DrawerButton>

      <AppBarProfileContainer>
        <AppBarProfileButton onClick={handleOpenMenu}>
          <AppBarProfileData>
            <Typography component='h3' variant='h3'>
              Adalberto
            </Typography>

            <Typography variant='subtitle2'>Admin</Typography>
          </AppBarProfileData>

          <ProfileAvatar>AP</ProfileAvatar>
        </AppBarProfileButton>

        <AppBarMenu open={Boolean(anchorEl)} anchorEl={anchorEl} handleClosePopMenu={handleCloseMenu} />
      </AppBarProfileContainer>
    </AppBarContainer>
  );
};
