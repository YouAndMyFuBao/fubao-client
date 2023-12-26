import * as Style from './created-at-tag.css';

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
