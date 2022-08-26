import { FC, useContext } from 'react';
import { Box, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import UpdateIcon from '@mui/icons-material/Update';

import { SideBarDrawer, SideBarList } from '../styled-components';
import { SideMenuListItem } from './SideBarListItem';
import { UiContext } from '../contexts/ui';

interface Props {}

export const SideBar: FC<Props> = () => {
  const { sidebarOpen, toogleSidebarOpen } = useContext(UiContext);

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
    <SideBarDrawer open={sidebarOpen} onClose={toogleSidebarOpen}>
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
