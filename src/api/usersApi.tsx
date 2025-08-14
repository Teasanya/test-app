import axios, { type AxiosInstance } from 'axios';
import type { User } from './types';

const usersApi: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/users',
});

export const fetchAllUsers = async (): Promise<User[]> => {
  const response = await usersApi.get<User[]>('/');
  return response.data;
};

export const fetchUserById = async (id: number): Promise<User> => {
  const response = await usersApi.get<User>(`/${id}`);
  return response.data;
};
