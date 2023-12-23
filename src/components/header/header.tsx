import * as Style from './header.css';
import Image from 'next/image';

interface HeaderProps {
  children?: string;
  onClick?: () => void;
  leftBackPage?: boolean;
  rightDoneButton?: boolean;
  rightCloseButton?: boolean;
  rightSettingsButton?: boolean;
}

export default function Header({
  onClick,
  leftBackPage,
  rightDoneButton,
  rightCloseButton,
  rightSettingsButton,
}: HeaderProps) {
  return (
    <>
      <div css={Style.headerWrapper} className="header">
        <div>
          {leftBackPage && (
            <Image alt="exit-button" src="/assets/svgs/IconArrowBack.svg" width={18} height={18} />
          )}
          <h2 css={Style.title}>편지쓰기</h2>
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
        {rightSettingsButton && (
          <Image
            alt="settings-button"
            src="assets/svgs/IconSettings.svg"
            width={18}
            height={18}
            onClick={onClick}
          />
        )}
      </div>
    </>
  );
}
