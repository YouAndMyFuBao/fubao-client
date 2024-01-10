import * as Style from './header.css';
import { IconArrowBack } from '../../../public/assets/svgs';
import { useRouter } from 'next/router';
import { BottomSheet } from '../bottom-sheet/bottom-sheet';
import Button from '../button';

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: string;
  onClick?: () => void;
  leftBackPage?: boolean;
  rightDoneButton?: boolean;
  rightCloseButton?: boolean;
}

function HeaderWithModal({
  children,
  onClick,
  leftBackPage,
  rightDoneButton,
  rightCloseButton,
  ...props
}: HeaderProps) {
  const router = useRouter();

  return (
    <>
      <div css={Style.headerWrapper} className="header" {...props}>
        <div>
          {leftBackPage && (
            <BottomSheet.Root>
              <BottomSheet.Trigger>
                <IconArrowBack alt="exit-button" />
              </BottomSheet.Trigger>
              <BottomSheet.Portal>
                <BottomSheet.Content style={{ height: '184px' }}>
                  현재 작성 중인 내용이 저장되지 않았어요.
                  <br />
                  삭제하시겠어요?
                  <BottomSheet.BottomCTA>
                    <BottomSheet.Close asChild>
                      <Button variants="quanternary">닫기</Button>
                    </BottomSheet.Close>
                    <Button variants="tertiary" onClick={() => router.back()}>
                      삭제하기
                    </Button>
                  </BottomSheet.BottomCTA>
                </BottomSheet.Content>
                <BottomSheet.Overlay />
              </BottomSheet.Portal>
            </BottomSheet.Root>
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

function HeaderWithoutModal({
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

export default function Header({ hasModal, ...rest }: { hasModal: boolean } & HeaderProps) {
  return hasModal ? <HeaderWithModal {...rest} /> : <HeaderWithoutModal {...rest} />;
}
