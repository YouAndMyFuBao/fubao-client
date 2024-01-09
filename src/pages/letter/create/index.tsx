import { postPost } from '@/apis/postPost';
import Button from '@/components/button';
import Header from '@/components/header/header';
import LetterCard from '@/components/letter-card/letter-card';
import { useLetterContext } from '@/hooks/useLetterContext';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import * as Style from './index.css';
import { useEffect, useState } from 'react';

export default function CreateLetter() {
  const router = useRouter();
  const { letterImage, letterText } = useLetterContext();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (letterImage && letterText) {
      setIsButtonDisabled(false);
      console.log('isButtonDiabled', isButtonDisabled);
    } else {
      setIsButtonDisabled(true);
      console.log('isButtonDiabled', isButtonDisabled);
    }
  }, [letterImage, letterText]);

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
      <div className="wrapper" css={Style.createLetterStyles.wrapper}>
        <Header leftBackPage>푸바오에게 편지쓰기</Header>
        <div css={Style.createLetterStyles.postWrapper}>
          <LetterCard variant="textCount" />
        </div>
        <div css={Style.createLetterStyles.buttonWrapper}>
          {isButtonDisabled ? (
            <Button
              variants="quanternary"
              onClick={handleCreateLetter}
              css={Style.createLetterStyles.submitButton}
              disabled={isButtonDisabled}
            >
              제출하기
            </Button>
          ) : (
            <Button
              variants="primary"
              onClick={handleCreateLetter}
              css={Style.createLetterStyles.submitButton}
              disabled={isButtonDisabled}
            >
              제출하기
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
