import * as Style from './header.css';
import { IconArrowBack } from '../../../public/assets/svgs';
import { useRouter } from 'next/router';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
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
  ...props
}: HeaderProps) {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };
  return (
    <>
      <div css={Style.headerWrapper} className="header" {...props}>
        <div>
          {leftBackPage && (
            <button onClick={handleBackClick}>
              <IconArrowBack alt="exit-button" />
            </button>
          )}
          {children && <h2 css={Style.title}>{children}</h2>}
        </div>
        {rightDoneButton && (
          <button css={Style.rightButton} onClick={onClick}>
            완료
          </button>
        )}
        {rightCloseButton && (
          <button css={Style.rightButton} onClick={onClick}>
            닫기
          </button>
        )}
      </div>
    </>
  );
}
