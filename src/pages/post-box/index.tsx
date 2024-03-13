import Button from '@/components/button';
import HomeHeader from '../home/_components/home-header';
import { css } from '@emotion/react';
import { useRouter } from 'next/navigation';
import Post from './_components/post';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPostBox } from '@/apis/getPostBox';
import useIntersect from '@/hooks/useIntersect';

const PostBox = () => {
  const router = useRouter();
  const {
    data: postBoxData,
    isFetching,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ['postBoxData'],
    initialPageParam: 0,
    queryFn: getPostBox,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.last ? undefined : allPages.length + 1;
    },
  });

  const targetRef = useIntersect(
    (entry, observer) => {
      if (entry.isIntersecting) observer.unobserve(entry.target);
      if (hasNextPage && !isFetching) fetchNextPage();
    },
    { threshold: 0.6 },
  );

  return (
    <>
      <HomeHeader />
      <div css={body}>
        <div>
          <main css={base}>
            <div css={postContainer}>
              {postBoxData?.pages.map((page) =>
                page.content.map((post) => <Post key={post.postId} post={post} />),
              )}
              <div ref={targetRef} />
            </div>
          </main>
          <div
            style={{
              position: 'fixed',
              bottom: '41px',
              zIndex: '10',
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              minWidth: '390px',
              maxWidth: '450px',
            }}
          >
            <Button variants="primary" onClick={() => router.push('/letter')}>
              {`편지 쓰러가기`}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostBox;

const body = css({
  position: 'relative',
  top: '63px',
  left: '0',
  width: '100%',
});

const base = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
  background: `url('/assets/svgs/IconPostBox.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  position: 'fixed',
  zIndex: '0',
});

const postContainer = css({
  position: 'relative',
  top: '22px',
  left: '0',
  width: '284px',
  height: '485px',
  display: 'grid',
  gridGap: '16px',
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  WebkitScrollBar: 'none',
  gridTemplateColumns: 'repeat(2, 1fr)',
});
