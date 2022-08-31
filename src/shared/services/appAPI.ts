import axios from 'axios';
import { APIResponse } from '../models/APIResponse';

const appAPI = axios.create({
  baseURL: 'http://localhost:5000/api/',
  validateStatus: status => status >= 200 && status < 300,
  withCredentials: true
});

export const get = async <T>(url: string): Promise<APIResponse<T[]>> => {
  try {
    const { data } = await appAPI.get<APIResponse<T[]>>(url, {
      method: 'GET',
      responseType: 'json'
    });

    return data;
  } catch (error) {
    console.log(error);

    if (axios.isAxiosError(error)) {
      throw new Error(error.message);
    }
    throw new Error('An unexpexted error occurred');
  }
};
