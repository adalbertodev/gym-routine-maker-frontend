import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { adminDarkTheme } from '../themes/adminDarkTheme';
import { AdminDashboardContainer, AppBar, SideBar } from '../components';
import { adminLightTheme } from '../themes/adminLightTheme';
import { UiProvider } from '../contexts/ui';
import { useAppSelector } from '../../shared/hooks/useAppSelector';
import { AdminGlobalStyles } from '../styled-components/AdminGlobalStyles';

interface Props {}

export const AdminLayout: FC<Props> = () => {
  const { mode } = useAppSelector(state => state.ui);

  const themes = {
    light: adminLightTheme,
    dark: adminDarkTheme
  };

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
