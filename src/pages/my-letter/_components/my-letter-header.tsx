import * as Style from '../../../styles/my-letter/_components/my-letter-header.css';
import { useRouter } from 'next/router';

export default function MyLetterHeader() {
  const router = useRouter();
  return (
    <>
      <header css={Style.base}>
        <div css={Style.container}>
          <p css={Style.text} onClick={() => router.push('/home')}>
            닫기
          </p>
        </div>
      </header>
    </>
  );
}
