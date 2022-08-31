import { useAPI } from './useAPI';
import { User } from '../models/User';

export const useUserAPI = () => {
  const { data, error, loading, getAll } = useAPI<User>();

  const getUsers = () => {
    getAll('auth/users');
  };

  return {
    data,
    error,
    loading,
    getUsers
  };
};
