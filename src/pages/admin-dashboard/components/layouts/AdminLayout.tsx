import { FC, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { useAppSelector } from '@/hooks';
import { darkAdminTheme, lightAdminTheme } from '@/themes';
import { UiProvider } from '../../contexts';
import { AdminDashboardContainer, AdminGlobalStyles } from '../../styled-components';
import { AppBar } from '../AppBar';
import { SideBar } from '../SideBar';

export const AdminLayout: FC = () => {
  const { mode } = useAppSelector(state => state.ui);

  const themes = useMemo(() => ({ light: lightAdminTheme, dark: darkAdminTheme }), []);

  return (
    <ThemeProvider theme={themes[mode]}>
      <CssBaseline />

      <UiProvider>
        <AdminGlobalStyles />
        <AdminDashboardContainer>
          <AppBar />
          <SideBar />

          <Outlet />
        </AdminDashboardContainer>
      </UiProvider>
    </ThemeProvider>
  );
};
