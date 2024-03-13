import { css } from '@emotion/react';

interface CreatedAtTagProps {
  time: string;
  onClick?: () => void;
}

export default function CreatedAtTag({ time, onClick }: CreatedAtTagProps) {
  return (
    <div css={base}>
      {time}
      <img src="/assets/svgs/IconCreatedAt.svg" onClick={onClick} />
    </div>
  );
}

const base = css({
  borderRadius: '999px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: 'rgba(0, 0, 0, 0.30)',
  color: 'white',
  position: 'absolute',
  zIndex: '100px',
  padding: '4px',
  margin: '5px',
  fontSize: '12px',
});
