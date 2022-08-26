import { FC, useContext } from 'react';
import { Box, IconButton, Typography, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import { AppBarBox } from '../styled-components';
import { UiContext } from '../contexts/ui';

interface Props {}

export const AppBar: FC<Props> = () => {
  const { toogleSidebarOpen } = useContext(UiContext);

  return (
    <AppBarBox>
      <IconButton className='open-sidebar-button' onClick={toogleSidebarOpen}>
        <MenuIcon />
      </IconButton>

      <Box className='appbar-profile'>
        <Button className='profile-button'>
          <Box className='profile-name'>
            <Typography component='h3' variant='h3'>
              Adalberto
            </Typography>

            <Typography variant='subtitle2'>Admin</Typography>
          </Box>

          <Box className='profile-photo-container'>
            <Box className='profile-photo' />
          </Box>
        </Button>
      </Box>
    </AppBarBox>
  );
};
