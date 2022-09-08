import { useCallback } from 'react';

import { User } from '@/models';
import { useAPI } from './useAPI';

export const useUserAPI = () => {
  const { data, error, loading, getAll, getOne } = useAPI<User>();

  const getUsers = useCallback(() => {
    getAll('auth/users');
  }, []);

  const getUser = useCallback((id: string) => {
    getOne(`auth/users/${id}`);
  }, []);

  return {
    data,
    error,
    loading,

    getUsers,
    getUser
  };
};
