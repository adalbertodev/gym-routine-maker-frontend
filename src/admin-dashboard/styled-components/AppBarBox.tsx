import { Box, styled } from '@mui/material';

export const AppBarBox = styled(Box)(({ theme }) => ({
  alignItems: 'center',
  display: 'flex',
  height: 'var(--appbar-height)',
  justifyContent: 'flex-end',
  padding: '0 calc((100% - var(--container-width)) / 2)',
  position: 'fixed',
  right: 0,
  top: 0,
  width: 'calc(100% - var(--sidebar-width))',

  '& .open-sidebar-button': {
    display: 'none',

    '& svg': {
      fontSize: '2rem'
    }
  },

  '& .appbar-profile': {
    alignItems: 'center',
    display: 'flex',
    flexGrow: 1,
    height: '100%',
    justifyContent: 'flex-end',

    '& .profile-name': {
      alignItems: 'end',
      display: 'flex',
      flexDirection: 'column',
      height: '60%',
      justifyContent: 'space-evenly'
    },

    '& .profile-button': {
      display: 'flex',
      gap: '1rem',
      height: '100%',
      padding: 0
    },

    '& .profile-photo-container': {
      borderRadius: '50%',
      height: '62.5%',
      padding: 0,
      width: 'calc(var(--appbar-height) / 1.6)'
    },

    '& .profile-photo': {
      backgroundColor: 'gray',
      borderRadius: '50%',
      height: '100%',
      width: '100%'
    }
  },

  [theme.breakpoints.down('md')]: {
    boxShadow: 20,
    left: 0,
    padding: '0 1rem',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: 1000,

    '& .open-sidebar-button': {
      display: 'inline-flex'
    },

    '& .appbar-profile .profile-name': {
      display: 'none'
    }
  }
})) as typeof Box;
