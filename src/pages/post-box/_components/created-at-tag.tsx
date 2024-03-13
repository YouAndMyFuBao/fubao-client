import * as Style from '../../../styles/post-box/_components/created-at-tag.css';

interface CreatedAtTagProps {
  time: string;
  onClick?: () => void;
}

export default function CreatedAtTag({ time, onClick }: CreatedAtTagProps) {
  return (
    <div css={Style.base}>
      {time}
      <img src="/assets/svgs/IconCreatedAt.svg" onClick={onClick} />
    </div>
  );
}
