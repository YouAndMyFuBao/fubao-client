import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Button from '@/components/button';
import MyLetterHeader from './_components/my-letter-header';
import { useQuery } from '@tanstack/react-query';
import { getMyLetter } from '@/apis/getMyLetter';
import LetterCard from '@/components/letter-card/letter-card';
import * as Style from './my-letter.css';
import { BottomSheet } from '@/components/bottom-sheet/bottom-sheet';
import { useState, useEffect } from 'react';
import { deletePost } from '@/apis/deletePost';

export default () => {
  const { data: letterData } = useQuery({
    queryKey: ['letterData'],
    queryFn: getMyLetter,
  });

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
        <div css={Style.base}>
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
                  style={{ width: '330px' }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <p css={Style.message}>{myLetterMessage}</p>
        <div css={Style.buttonContainer}>
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
                  <Button variants="tertiary">수정하기</Button>
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
