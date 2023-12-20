import axios from 'axios';
import { getCookie } from 'cookies-next';

export const baseAxios = axios.create({
  baseURL: 'https://dev.yamfubao.shop',
});

baseAxios.interceptors.request.use((config) => {
  const jwtToken = getCookie('jwtToken') as string;

  if (jwtToken) {
    config.headers.Authorization = `Bearer ${jwtToken}`;
  }

  return config;
});
