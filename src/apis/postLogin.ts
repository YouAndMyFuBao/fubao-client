import { APIResponse } from '@/data/type';
import { baseAxios } from './baseAxios';

export const postLogin = async (authorizationCode: string) => {
  const {
    data: { data },
  } = await baseAxios.post<
    APIResponse<{
      accessToken: string;
      refreshToken: string;
    }>
  >('api/auth/kakao', {
    authorizationCode,
  });
  return data;
};
