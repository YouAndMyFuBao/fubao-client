import * as Style from './header.css';
import { IconArrowBack } from '../../../public/assets/svgs';

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
  return (
    <>
      <div css={Style.headerWrapper} className="header">
        <div>
          {leftBackPage && <IconArrowBack alt="exit-button" />}
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
