import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DashboardPage } from './pages/Dashboard';
import { AdminLayout } from './layouts/AdminLayout';

interface Props {}

export const AdminRouter: FC<Props> = () => {
  return (
    <Routes>
      <Route path='/' element={<AdminLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path='*' element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
};
