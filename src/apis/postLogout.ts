import { getCookie, deleteCookie } from 'cookies-next';
import { baseAxios } from './baseAxios';
import { APIResponse, Logout } from '@/data/type';

export const postLogout = async () => {
  const data = await baseAxios.post<APIResponse<Logout>>('api/auth/logout', {
    refreshToken: getCookie('refreshToken'),
  });

  deleteCookie('accessToken');
  deleteCookie('refreshToken');

  return data;
};
