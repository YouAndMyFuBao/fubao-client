import { PostData } from '@/data/type';
import CreatedAtTag from './created-at-tag';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const { date, imageUrl, postId } = post;
  const router = useRouter();

  return (
    <article onClick={() => router.push(`/letter/${postId}`)} css={container}>
      <div css={base}>
        <CreatedAtTag time={date} />
        <img
          src={imageUrl}
          style={{ zIndex: '-10px', border: '1px solid #000' }}
          width={114}
          height={114}
        />
      </div>
    </article>
  );
}

const container = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '134px',
  height: '134px',
  border: '1px solid #000',
  backgroundColor: '#FFF',
  cursor: 'pointer',
});

const base = css({
  position: 'relative',
});
