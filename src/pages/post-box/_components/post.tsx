import { PostData } from '@/data/type';
import CreatedAtTag from './created-at-tag';
import * as Style from '../../../styles/post-box/_components/post.css';
import { useRouter } from 'next/router';

interface PostProps {
  post: PostData;
}

export default function Post({ post }: PostProps) {
  const { date, imageUrl, postId } = post;
  const router = useRouter();

  return (
    <article onClick={() => router.push(`/letter/${postId}`)} css={Style.container}>
      <div css={Style.base}>
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
