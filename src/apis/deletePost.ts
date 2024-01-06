import { APIResponse, DeletePost } from '@/data/type';
import { baseAxios } from './baseAxios';

export const deletePost = async (postId: number) => {
  const data = await baseAxios.delete<APIResponse<DeletePost>>(`/api/posts/${postId}`);
  console.log('포스트 삭제 완료', data);
  return data;
};
