import { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from './redux';
import { AppRouter } from './routers';

export const App: FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
};
