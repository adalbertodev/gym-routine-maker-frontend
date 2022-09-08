import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminLayout } from '../components/layouts/AdminLayout';
import { DashboardPage, UsersPage } from '../pages';
import { UpdatesPage } from '../pages/Updates';
import { UserPage } from '../pages/User';

export const AdminRouter: FC = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />

        <Route path='/users'>
          <Route index element={<UsersPage />} />
          <Route path=':id' element={<UserPage />} />
        </Route>

        <Route path='/updates' element={<UpdatesPage />} />

        <Route path='*' element={<Navigate to='/admin' />} />
      </Route>
    </Routes>
  );
};
