import { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { AdminRouter } from '@/pages/admin-dashboard';

export const AppRouter: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path='/admin/*' element={<AdminRouter />} />
      </Routes>
    </Router>
  );
};
