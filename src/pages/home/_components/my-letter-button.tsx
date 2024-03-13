import { css } from '@emotion/react';

interface MyLetterButtonProps {
  onClick?: () => void;
}

export default function MyLetterButton({ onClick }: MyLetterButtonProps) {
  return (
    <button onClick={onClick} css={base}>
      내가 보낸 편지 확인하기
      <img alt="myletterbutton" src="/assets/svgs/IconNavigationButton.svg" />
    </button>
  );
}

const base = css({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '8px 18px',
  alignItems: 'center',
  width: '298px',
  height: '39px',
  borderRadius: '12px',
  background: 'rgba(255, 255, 255, 0.20)',
  boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.12)',
  fontSize: '14px',
  color: '#ffffff',
  margin: '14px 0px',
});
