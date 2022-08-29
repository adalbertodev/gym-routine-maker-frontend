import { Drawer, DrawerProps, useMediaQuery, Theme, styled } from '@mui/material';

interface Props extends DrawerProps {
  children: JSX.Element | JSX.Element[];
}

const Composition = ({ children, ...props }: Props) => {
  const isMobileWidth = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <Drawer anchor='left' elevation={0} variant={isMobileWidth ? 'temporary' : 'permanent'} {...props}>
      {children}
    </Drawer>
  );
};

export const SideBarDrawer = styled(Composition)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    borderRight: 'none',
    boxSizing: 'border-box',
    flexShrink: 0,
    height: '100%',
    position: 'relative',
    width: '100%'
  },

  '& .sidebar-header': {
    ...theme.mixins.toolbar,
    alignItems: 'center',
    display: 'flex',
    height: 'var(--appbar-height)',
    justifyContent: 'flex-end',
    marginBottom: 2,

    '& .close': {
      display: 'none'
    }
  },

  [theme.breakpoints.down('md')]: {
    '& .MuiDrawer-paper': {
      boxShadow: 10,
      height: '100vh',
      paddingRight: '1.5rem',
      position: 'fixed',
      width: '18rem'
    },

    '& .sidebar-header .close': {
      display: 'flex'
    }
  }
})) as typeof Drawer;
