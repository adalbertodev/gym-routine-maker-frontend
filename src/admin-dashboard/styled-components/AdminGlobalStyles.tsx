import { GlobalStyles } from '@mui/material';
import { FC } from 'react';

interface Props {}

export const AdminGlobalStyles: FC<Props> = () => {
  return (
    <GlobalStyles
      styles={theme => ({
        ':root': {
          '--appbar-height': '70px',
          '--container-width': '96%',
          '--sidebar-width': '14rem'
        },

        [theme.breakpoints.down('lg')]: {
          ':root': {
            '--container-width': '94%',
            '--sidebar-width': '7rem'
          }
        },
        [theme.breakpoints.down('md')]: {
          ':root': {
            '--container-width': '98%'
          }
        }
      })}
    />
  );
};
