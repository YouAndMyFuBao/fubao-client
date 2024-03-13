import { postPost } from '@/apis/postPost';
import Button from '@/components/button';
import Header from '@/components/header/header';
import LetterCard from '@/components/letter-card/letter-card';
import { useLetterContext } from '@/hooks/useLetterContext';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { getCookie } from 'cookies-next';
import { BottomSheet } from '@/components/bottom-sheet/bottom-sheet';
import { IconKaKao } from '../../../../public/assets/svgs';

export default function CreateLetter() {
  const router = useRouter();
  const { letterImage, letterText } = useLetterContext();
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);
  const [isBottomSheetKakaoOpen, setIsBottomSheetKakaoOpen] = useState<boolean>(false);
  const accessToken = getCookie('accessToken');

  useEffect(() => {
    if (letterImage && letterText) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [letterImage, letterText]);

  const mutation = useMutation({
    mutationKey: ['postPost'],
    mutationFn: async () => {
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
          pathname: `/letter/preview?postId=${data.data.data.postId}`,
          query: { postId: data.data.data.postId },
        },
        `letter/preview/${data.data.data.postId}`,
      );
    },
  });

  const handleCreateLetter = () => {
    if (!accessToken) {
      setIsBottomSheetKakaoOpen(true);
    }
    if (letterImage !== undefined) {
      mutation.mutate();
    } else {
      console.error('letterImage is required');
    }
  };

  const handleKakaoLoginClick = () => {
    router.push(
      `https://kauth.kakao.com/oauth/authorize?client_id=${process.env
        .NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${
        process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
      }&response_type=code`,
    );
  };

  return (
    <>
      <div className="wrapper" css={createLetterStyles.wrapper}>
        <Header leftBackPage hasLeftBackModal={true}>
          푸바오에게 편지쓰기
        </Header>
        <div css={createLetterStyles.postWrapper}>
          <LetterCard variant="textCount" />
        </div>
        <div css={createLetterStyles.buttonWrapper}>
          {isButtonDisabled ? (
            <Button
              variants="quanternary"
              onClick={handleCreateLetter}
              css={createLetterStyles.submitButton}
              disabled={isButtonDisabled}
            >
              제출하기
            </Button>
          ) : (
            <Button
              variants="primary"
              onClick={handleCreateLetter}
              css={createLetterStyles.submitButton}
              disabled={isButtonDisabled}
            >
              제출하기
            </Button>
          )}
        </div>
      </div>
      {isBottomSheetKakaoOpen && (
        <BottomSheet.Root open={isBottomSheetKakaoOpen} onOpenChange={setIsBottomSheetKakaoOpen}>
          <BottomSheet.Trigger></BottomSheet.Trigger>
          <BottomSheet.Portal>
            <BottomSheet.Content>
              로그인이 필요한 서비스입니다!
              <BottomSheet.BottomCTA>
                <button onClick={handleKakaoLoginClick} css={createLetterStyles.kakaoButton}>
                  <IconKaKao />
                  <p>카카오 로그인</p>
                </button>
              </BottomSheet.BottomCTA>
            </BottomSheet.Content>
          </BottomSheet.Portal>
        </BottomSheet.Root>
      )}
    </>
  );
}

const createLetterStyles = {
  wrapper: css({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }),
  postWrapper: css({
    padding: '30px',
    flexGrow: '1',
  }),

  image: {
    nonePostImage: css({
      backgroundColor: 'gray',
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    nonPostImageInput: css({
      display: 'none',
    }),
    selectedPostImage: css({
      display: 'block',
      width: '300px',
      height: '300px',
      objectFit: 'cover',
    }),
    deleteButton: css({
      position: 'absolute',
      top: '10px',
      left: '10px',
    }),
  },

  text: {
    postText: css({
      backgroundColor: 'indigo',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),

    postTextInput: css({
      width: '90%',
      height: '70%',
      margin: '10px 10px',
    }),
  },

  buttonWrapper: css({
    margin: '18px',
  }),

  kakaoButton: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '28px',
    width: '100%',
    height: '56px',
    fontSize: '17px',
    fontWeight: '600',
    borderRadius: '16px',
    backgroundColor: '#FEE500',
  }),

  submitButton: css({
    display: 'flex',
  }),
};
