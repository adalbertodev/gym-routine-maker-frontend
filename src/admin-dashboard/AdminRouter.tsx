import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminLayout } from './layouts/AdminLayout';
import { DashboardPage, UsersPage } from './pages';

interface Props {}

export const AdminRouter: FC<Props> = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='/users' element={<UsersPage />} />

        <Route path='*' element={<Navigate to='/admin' />} />
      </Route>
    </Routes>
  );
};
