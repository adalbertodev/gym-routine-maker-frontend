import {
  Close as CloseIcon,
  Dashboard as DashboardIcon,
  Group as GroupIcon,
  Update as UpdateIcon
} from '@mui/icons-material';
import { Box, IconButton } from '@mui/material';
import { FC, useContext } from 'react';

import { UiContext } from '../../contexts';
import { SideBarDrawer, SideBarList } from '../../styled-components';
import { SideMenuListItem } from './SideBarListItem';

export const SideBar: FC = () => {
  const { isSideBarOpen, toogleSidebarOpen } = useContext(UiContext);

  const options = [
    {
      Icon: DashboardIcon,
      label: 'Dashboard',
      link: '/admin'
    },
    {
      Icon: GroupIcon,
      label: 'Users',
      link: '/admin/users'
    },
    {
      Icon: UpdateIcon,
      label: 'Updates',
      link: '/admin/updates'
    }
  ];

  return (
    <SideBarDrawer open={isSideBarOpen} onClose={toogleSidebarOpen}>
      <Box className='sidebar-header'>
        <IconButton className='close' onClick={toogleSidebarOpen}>
          <CloseIcon />
        </IconButton>
      </Box>

      <SideBarList>
        {options.map(option => (
          <SideMenuListItem key={option.label} option={option} />
        ))}
      </SideBarList>
    </SideBarDrawer>
  );
};
