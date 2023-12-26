import { baseAxios } from './baseAxios';
import { APIResponse, PostBoxData } from '@/data/type';

export const getPostBox = async (page: number, size: number) => {
  const {
    data: { data },
  } = await baseAxios.get<APIResponse<PostBoxData[]>>(`/api/posts?size=${size}&page=${page}`);
  return data;
};
