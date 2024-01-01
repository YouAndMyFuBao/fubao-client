// 푸바오에게 사랑 보내기
import { APIResponse, Deactivation } from '@/data/type';
import { baseAxios } from './baseAxios';

export const postFubaoLove = async () => {
  const data = await baseAxios.post<APIResponse<Deactivation>>('/api/posts/fubao/love');
  console.log('푸바오에게 사랑 보내기', data);
  return data;
};
