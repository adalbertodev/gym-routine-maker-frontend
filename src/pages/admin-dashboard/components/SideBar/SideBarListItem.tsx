import { Link, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SideBarListOption } from '../../models/SideBarListOption';

interface Props {
  option: SideBarListOption;
}

export const SideMenuListItem: FC<Props> = ({ option }) => {
  const { label, Icon: OptionIcon, link } = option;
  const location = useLocation();

  const isActive = location.pathname === link;

  return (
    <ListItem disablePadding>
      <Link component={NavLink} to={link}>
        <ListItemButton selected={isActive}>
          <ListItemIcon>
            <OptionIcon />
          </ListItemIcon>

          <ListItemText primary={label} primaryTypographyProps={{ variant: 'h3', component: 'h3' }} />
        </ListItemButton>
      </Link>
    </ListItem>
  );
};
