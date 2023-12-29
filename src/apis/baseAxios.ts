import axios from 'axios';
import { getCookie } from 'cookies-next';

export const baseAxios = axios.create({
  baseURL: 'https://dev.yamfubao.shop',
});

baseAxios.interceptors.request.use((config) => {
  const accessToken = getCookie('accessToken') as string;

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
