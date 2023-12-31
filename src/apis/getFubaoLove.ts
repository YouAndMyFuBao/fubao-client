// 푸바오 받은 사랑
import { baseAxios } from './baseAxios';
import { APIResponse, ReceivedLove } from '@/data/type';

export const getFubaoLove = async () => {
  const data = await baseAxios.get<APIResponse<ReceivedLove>>(`/api/posts/fubao/love`);
  return data.data;
};
