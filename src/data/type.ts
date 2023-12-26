export interface APIResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
}

export type PostBoxData = {
  imageUrl: string;
  content: string;
  time: string;
};
