import { useAPI } from './useAPI';
import { User } from '../models/User';
import { useCallback } from 'react';

export const useUserAPI = () => {
  const { data, error, loading, getAll } = useAPI<User>();

  const getUsers = useCallback(() => {
    getAll('auth/users');
  }, []);

  return {
    data,
    error,
    loading,
    getUsers
  };
};
