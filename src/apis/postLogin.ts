import { baseAxios } from './baseAxios';

export const postLogin = async (authorizationCode: string) => {
  const data = await baseAxios.post<{
    data: {
      accessToken: string;
      refreshToken: string;
    };
  }>('api/auth/kakao', {
    authorizationCode: authorizationCode,
  });
  return data.data;
};
