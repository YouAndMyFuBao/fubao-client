export interface APIResponse<T> {
  isSuccess: boolean;
  code: string;
  message: string;
  data: T;
}

export type PostData = {
  postId: number;
  imageUrl: string;
  content: string;
  date: string;
};

export type PatchPostData = {
  postId: number;
  image?: File;
  content?: string;
};

export type InfinitePostData = {
  content: PostData[];
  pageable: {
    pageNumber: number;
    pageSize: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  totalPages: number;
  totalElements: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
};

export type Logout = {
  data: string;
};

export type Deactivation = {
  data: string;
};

export type MyLetterData = {
  postId: number;
  imageUrl: string;
  content: string;
  date: string;
};

export type DeletePost = {
  data: string;
};

export type DeliverLove = {
  message: string;
};

export type ReceivedLove = {
  love: number;
};
