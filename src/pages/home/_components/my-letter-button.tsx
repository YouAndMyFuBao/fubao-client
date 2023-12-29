import * as Style from './my-letter-button.css';

interface MyLetterButtonProps {
  onClick?: () => void;
}

export default function MyLetterButton({ onClick }: MyLetterButtonProps) {
  return (
    <button onClick={onClick} css={Style.base}>
      내가 보낸 편지 확인하기
      <img alt="myletterbutton" src="/assets/svgs/IconNavigationButton.svg" />
    </button>
  );
}
