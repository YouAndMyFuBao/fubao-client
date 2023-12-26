import CreatedAtTag from './created-at-tag';
import * as Style from './post.css';

interface PostProps {
  imgSrc: string;
  onClick?: () => void;
}

export default function Post({ imgSrc, onClick }: PostProps) {
  return (
    <article onClick={onClick} css={Style.container}>
      <div css={Style.base}>
        <CreatedAtTag time="1시간 전" />
        <img
          src={imgSrc}
          style={{ zIndex: '-10px', border: '1px solid #000' }}
          width={114}
          height={114}
        />
      </div>
    </article>
  );
}
