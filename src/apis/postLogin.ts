import { baseAxios } from './baseAxios';

export const postLogin = async (authorizationCode: string) => {
  const data = await baseAxios.post<{
    accessToken: string;
    refreshToken: string;
  }>('api/auth/kakao', {
    authorizationCode: authorizationCode,
  });
  return data;
};
