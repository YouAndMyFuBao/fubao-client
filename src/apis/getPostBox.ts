import { baseAxios } from './baseAxios';
import { APIResponse, InfinitePostData } from '@/data/type';

export const getPostBox = async ({ pageParam = 0 }) => {
  const {
    data: { data },
  } = await baseAxios.get<APIResponse<InfinitePostData>>(`/api/posts?size=10&page=${pageParam}`);

  return data;
};
