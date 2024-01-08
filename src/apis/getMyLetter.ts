import { baseAxios } from './baseAxios';
import { APIResponse, MyLetterData } from '@/data/type';

export const getMyLetter = async () => {
  const {
    data: { data },
  } = await baseAxios.get<APIResponse<MyLetterData[]>>(`/api/posts/my`);
  console.log('확인 용도: ', data);
  return data;
};
