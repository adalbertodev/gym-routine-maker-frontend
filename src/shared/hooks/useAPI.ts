import { useCallback, useState } from 'react';

import { get } from '../services/appAPI';

export const useAPI = <T>() => {
  const [data, setData] = useState<T[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getAll = useCallback(async (url: string) => {
    setLoading(true);
    try {
      const { data } = await get<T>(url);
      setData(data);
    } catch (error: any) {
      setData(null);
      setError(error.message);
    }
    setLoading(false);
  }, []);

  return {
    data,
    error,
    loading,

    getAll
  };
};
