import Button from '@/components/button';
import HomeHeader from '../home/_components/home-header';
import * as Style from './post-box.css';
import { useRouter } from 'next/navigation';
import Post from './_components/post';
import { useQuery } from '@tanstack/react-query';
import { getPostBox } from '@/apis/getPostBox';

const PostBox = () => {
  const router = useRouter();
  const {
    data: postBoxData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['postBoxData'],
    queryFn: () => getPostBox(1, 5),
  });

  if (isLoading) return '로딩중입니다';

  if (error) return '에러발생에러발생: ' + error;

  if (!postBoxData) return '데이터가 없어요';

  return (
    <>
      <HomeHeader />
      <div css={Style.body}>
        <div>
          <main css={Style.base}>
            <div css={Style.postContainer}>
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
              <Post imgSrc="/assets/img/fubao.jpeg" />
            </div>
          </main>
          <div css={Style.bodyContent}>
            <Button
              variants="primary"
              size="large"
              style={{ position: 'fixed', bottom: '41px', zIndex: '10', display: 'flex' }}
              onClick={() => router.push('/letter')}
            >
              {`편지 쓰러가기`}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBox;
