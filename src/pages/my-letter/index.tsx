import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import HomeHeader from '../home/_components/home-header';
import { useQuery } from '@tanstack/react-query';
import { getMyLetter } from '@/apis/getMyLetter';
import LetterCard from '@/components/letter-card/letter-card';
import * as Style from './my-letter.css';

export default () => {
  const { data: letterData } = useQuery({
    queryKey: ['letterData'],
    queryFn: getMyLetter,
  });
  const myLetterMessage = `카드를 누르면\n편지 읽는 푸바오를 만날 수 있어요!`;
  return (
    <>
      <HomeHeader />
      <div css={Style.base}>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={(swiper) => {
            console.log(swiper.activeIndex);
          }}
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
              <div>{letter.postId}</div>
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
        <button>삭제하기</button>
        <button>수정하기</button>
      </div>
    </>
  );
};
