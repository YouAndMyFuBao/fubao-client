import { APIResponse, Deactivation } from '@/data/type';
import { deleteCookie } from 'cookies-next';
import { baseAxios } from './baseAxios';

export const deleteDeactivation = async () => {
  const data = await baseAxios.delete<APIResponse<Deactivation>>('/api/auth/deactivation');

  deleteCookie('accessToken');
  deleteCookie('refreshToken');

  return data;
};
