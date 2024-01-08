import { baseAxios } from './baseAxios';

export const postPost = async ({ image, text }: { image: File; text: string }) => {
  // console.log('image', image, 'text', text);
  const formData = new FormData();
  if (image !== undefined) {
    formData.append('image', image);
  }
  if (text !== undefined) {
    const object = {
      content: text,
    };
    formData.append(
      'data',
      new Blob([JSON.stringify(object)], {
        type: 'application/json',
      }),
    );
  }

  // // 키-값 확인
  // const imageData = formData.get('image');
  // const jsonData = formData.get('data');

  // console.log('imageData Data:', imageData);
  // console.log('JSON Data:', jsonData);
  // //

  const response = await baseAxios.post(`/api/posts`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  console.log('postResponse', response);

  return response;
};
