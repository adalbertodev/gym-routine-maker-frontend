import { CssBaseline } from '@mui/material';
import { FC } from 'react';
import { Provider } from 'react-redux';

import { AppRouter } from './AppRouter';
import { store } from './shared/redux/store';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
