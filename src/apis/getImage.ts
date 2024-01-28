import { APIResponse, PostData } from '@/data/type';
import { baseAxios } from './baseAxios';

export const getImage = async ({ postId }: { postId: number }) => {
  const { data } = await baseAxios.get<APIResponse<PostData>>(`/api/posts/${postId}/download`);

  return data;
};
