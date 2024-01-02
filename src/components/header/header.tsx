import * as Style from './header.css';
import { IconArrowBack } from '../../../public/assets/svgs';
import { useRouter } from 'next/router';

interface HeaderProps {
  children?: string;
  onClick?: () => void;
  leftBackPage?: boolean;
  rightDoneButton?: boolean;
  rightCloseButton?: boolean;
}

export default function Header({
  children,
  onClick,
  leftBackPage,
  rightDoneButton,
  rightCloseButton,
}: HeaderProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <>
      <div css={Style.headerWrapper} className="header">
        <div>
          {leftBackPage && (
            <button onClick={handleBackClick}>
              <IconArrowBack alt="exit-button" />
            </button>
          )}
          {children && <h2 css={Style.title}>{children}</h2>}
        </div>
        {rightDoneButton && (
          <strong css={Style.rightButton} onClick={onClick}>
            완료
          </strong>
        )}
        {rightCloseButton && (
          <strong css={Style.rightButton} onClick={onClick}>
            닫기
          </strong>
        )}
      </div>
    </>
  );
}
