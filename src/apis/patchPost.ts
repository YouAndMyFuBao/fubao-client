import { PatchPostData } from '@/data/type';
import { baseAxios } from './baseAxios';

export const patchPost = async ({ postId, image, content }: PatchPostData) => {
  console.log('postId', postId, 'image', image, 'content', content);
  const formData = new FormData();
  if (image !== undefined) {
    formData.append('image', image);
  }
  if (content !== undefined) {
    const object = {
      content: content,
    };
    formData.append(
      'data',
      new Blob([JSON.stringify(object)], {
        type: 'application/json',
      }),
    );
  }

  //   const imageData = formData.get('image');
  //   const jsonData = formData.get('data');

  //   console.log('Image Data:', imageData);
  //   console.log('JSON Data:', jsonData);

  const response = await baseAxios.patch(`/api/posts/${postId}`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return response;
};
