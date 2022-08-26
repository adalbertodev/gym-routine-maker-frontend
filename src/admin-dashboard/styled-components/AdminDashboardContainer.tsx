import { FC } from 'react';
import { Box } from '@mui/material';

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const AdminDashboardContainer: FC<Props> = ({ children }) => {
  return (
    <Box
      sx={theme => ({
        display: 'grid',
        gap: '1.8rem',
        gridTemplateColumns: 'var(--sidebar-width) auto 20%',
        height: '100vh',
        margin: '0 auto',
        paddingBottom: '4rem',
        position: 'relative',
        width: 'var(--container-width)',

        [theme.breakpoints.down('lg')]: {
          gridTemplateColumns: '7rem auto 20%'
        },
        [theme.breakpoints.down('md')]: {
          gridTemplateColumns: '1fr'
        }
      })}
    >
      {children}
    </Box>
  );
};
