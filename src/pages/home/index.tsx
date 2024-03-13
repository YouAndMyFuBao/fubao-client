import { useState } from 'react';
import HomeHeader from './_components/home-header';
import HomeMessage from './_components/home-message';
import ScratchableImage from './_components/scratchable-image';
import HomeMessageBottom from './_components/home-message-bottom';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';
import MyLetterButton from './_components/my-letter-button';
import CopyLink from '@/components/copy-link/copy-link';
import Button from '@/components/button';
import { css } from '@emotion/react';

const Home = () => {
  const [scratch, setScratch] = useState(false);
  const router = useRouter();
  const cookie = getCookie('accessToken');

  return (
    <>
      <HomeHeader />
      <div css={base}>
        <HomeMessage scratchableEnd={scratch} />
        <ScratchableImage
          onScratchEnd={() => {
            setScratch(true);
          }}
        />
        {!scratch && <HomeMessageBottom />}
        {scratch && cookie && <MyLetterButton onClick={() => router.push('/my-letter')} />}
        {scratch && (
          <>
            <CopyLink />
            <div css={buttonContainer}>
              <Button variants="secondary" onClick={() => router.reload()}>
                다시 하트주기
              </Button>
              <Button variants="primary" onClick={() => router.push('/letter')}>
                편지 쓰러가기
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Home;

const base = css({
  marginTop: '39px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const buttonContainer = css({
  display: 'flex',
  width: '354px',
  gap: '10px',
});
