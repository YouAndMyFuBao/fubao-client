import { APIResponse, PostData } from '@/data/type';
import { baseAxios } from './baseAxios';
import { useQuery } from '@tanstack/react-query';

export const getPost = async ({ postId }: { postId: number }) => {
  const { data } = await baseAxios.get<APIResponse<PostData>>(`/api/posts/${postId}`);

  return data;
};

export const useGetPost = ({ postId }: { postId: number }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getPost', postId],
    queryFn: () => getPost({ postId }),
  });

  return { data, isLoading, isError };
};
