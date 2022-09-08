import { Box, styled } from '@mui/material';

export const AppBarProfileContainer = styled(Box)({
  alignItems: 'center',
  display: 'flex',
  flexGrow: 1,
  height: '100%',
  justifyContent: 'flex-end',

  '& .profile-photo-container': {
    // borderRadius: '50%',
    // height: '62.5%',
    // padding: 0,
    // width: 'calc(var(--appbar-height) / 1.6)'
  },

  '& .profile-photo': {
    // backgroundColor: 'gray',
    // borderRadius: '50%',
    // height: '100%',
    // width: '100%'
  }
}) as typeof Box;
