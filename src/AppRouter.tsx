import { FC } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import { AdminRouter } from './admin-dashboard/AdminRouter';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/admin/*' element={<AdminRouter />} />
      </Routes>
    </Router>
  );
};
