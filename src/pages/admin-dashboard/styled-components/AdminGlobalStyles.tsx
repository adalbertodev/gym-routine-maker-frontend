import { GlobalStyles, styled, Theme } from '@mui/material';
import { useCallback } from 'react';

const Composition = () => {
  const styles = useCallback(
    (theme: Theme) => ({
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
    }),
    []
  );

  return <GlobalStyles styles={styles} />;
};

export const AdminGlobalStyles = styled(Composition)({});
