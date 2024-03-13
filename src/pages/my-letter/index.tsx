import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@/components/button';
import MyLetterHeader from './_components/my-letter-header';
import { useQuery } from '@tanstack/react-query';
import { getMyLetter } from '@/apis/getMyLetter';
import LetterCard from '@/components/letter-card/letter-card';
import { css } from '@emotion/react';
import { BottomSheet } from '@/components/bottom-sheet/bottom-sheet';
import { useState, useEffect } from 'react';
import { deletePost } from '@/apis/deletePost';
import { useRouter } from 'next/router';

export default () => {
  const { data: letterData } = useQuery({
    queryKey: ['letterData'],
    queryFn: getMyLetter,
  });

  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const myLetterMessage = `카드를 누르면\n편지 읽는 푸바오를 만날 수 있어요!`;

  const [activePostId, setActivePostId] = useState<number>(0);

  const handleSlideChange = (swiper: any) => {
    const activeSlide = letterData?.[swiper.activeIndex];
    if (activeSlide) {
      setActivePostId(activeSlide.postId);
      console.log('activePostId', activePostId);
    }
  };

  return (
    mounted && (
      <div style={{ backgroundColor: '#000000' }}>
        <MyLetterHeader />
        <div css={base}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            onSwiper={(swiper) => console.log('슬라이드 이름', swiper.activeIndex)}
            style={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            {letterData?.map((letter) => (
              <SwiperSlide
                key={letter.postId}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <LetterCard
                  variant="date"
                  apiDate={letter.date}
                  apiImage={letter.imageUrl}
                  apiText={letter.content}
                  style={{ width: '330px', cursor: 'pointer' }}
                  onClick={() =>
                    router.push(
                      {
                        pathname: `/my-letter/preview?postId=${activePostId}`,
                        query: {
                          activePostId: activePostId,
                        },
                      },
                      `/my-letter/preview/${activePostId}`,
                    )
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p css={message}>{myLetterMessage}</p>
        <div css={buttonContainer}>
          {/* 삭제하기 */}
          <BottomSheet.Root>
            <BottomSheet.Trigger style={{ width: '100%' }}>
              <Button variants="secondary">삭제하기</Button>
            </BottomSheet.Trigger>
            <BottomSheet.Portal>
              <BottomSheet.Content>
                편지를 삭제하시겠어요?
                <BottomSheet.BottomCTA>
                  <BottomSheet.Close asChild>
                    <Button variants="quanternary">닫기</Button>
                  </BottomSheet.Close>
                  <Button
                    variants="tertiary"
                    onClick={async () => {
                      await deletePost(activePostId);
                    }}
                  >
                    삭제하기
                  </Button>
                </BottomSheet.BottomCTA>
              </BottomSheet.Content>
            </BottomSheet.Portal>
            <BottomSheet.Overlay />
          </BottomSheet.Root>
          {/* 수정하기 */}
          <BottomSheet.Root>
            <BottomSheet.Trigger style={{ width: '100%' }}>
              <Button variants="tertiary">수정하기</Button>
            </BottomSheet.Trigger>
            <BottomSheet.Portal>
              <BottomSheet.Content>
                편지를 수정하시겠어요?
                <BottomSheet.BottomCTA>
                  <BottomSheet.Close asChild>
                    <Button variants="quanternary">닫기</Button>
                  </BottomSheet.Close>
                  <Button
                    variants="tertiary"
                    onClick={() =>
                      router.push(
                        {
                          pathname: `/my-letter/edit/${activePostId}`,
                          query: { activePostId: activePostId },
                        },
                        `/my-letter/edit/${activePostId}`,
                      )
                    }
                  >
                    수정하기
                  </Button>
                </BottomSheet.BottomCTA>
              </BottomSheet.Content>
            </BottomSheet.Portal>
            <BottomSheet.Overlay />
          </BottomSheet.Root>
        </div>
      </div>
    )
  );
};

const base = css({
  backgroundColor: '#000000',
  marginTop: '76px',
  paddingTop: '30px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const message = css({
  fontSize: '14px',
  fontWeight: '500',
  color: 'white',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  lineHeight: '1.5',
  margin: '40px 0',
});

const buttonContainer = css({
  display: 'flex',
  margin: '30px 18px 35px 18px',
  gap: '10px',
});
