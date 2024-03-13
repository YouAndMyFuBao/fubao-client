import { css } from '@emotion/react';
import { useRouter } from 'next/router';

export default function MyLetterHeader() {
  const router = useRouter();
  return (
    <>
      <header css={base}>
        <div css={container}>
          <p css={text} onClick={() => router.push('/home')}>
            닫기
          </p>
        </div>
      </header>
    </>
  );
}

const base = css({
  position: 'fixed',
  top: 47,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

const container = css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '10px 18px',
  height: '39px',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
});

const text = css({
  color: '#FFF',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
});
