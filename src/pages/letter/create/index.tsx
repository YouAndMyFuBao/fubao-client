import { postPost } from '@/apis/postPost';
import Header from '@/components/header/header';
import LetterCard from '@/components/letter-card/letter-card';
import { useLetterContext } from '@/hooks/useLetterContext';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';

export default function CreateLetter() {
  const router = useRouter();
  const { letterImage, letterText } = useLetterContext();

  const mutation = useMutation({
    mutationKey: ['postPost'],
    mutationFn: async () => {
      // 이미지와 텍스트가 정의되었는지 확인
      if (letterImage && letterText) {
        return postPost({ image: letterImage, text: letterText });
      } else {
        throw new Error('Image or text is undefined.');
      }
    },
    onSuccess: (data) => {
      console.log('Success', data);
      router.push(
        {
          pathname: '/letter/preview',
          query: { postId: data.data.data.postId },
        },
        '/letter/preview',
      );
    },
  });

  const handleCreateLetter = () => {
    if (letterImage !== undefined) {
      mutation.mutate();
    } else {
      console.error('letterImage is required');
    }
  };
  return (
    <>
      <div className="wrapper">
        <Header leftBackPage>푸바오에게 편지쓰기</Header>
        <LetterCard variant="textCount" />
        <button onClick={handleCreateLetter}>제출하기</button>
      </div>
    </>
  );
}
