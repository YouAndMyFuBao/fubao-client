import { IconKaKao } from '../../../public/assets/svgs';
import Button from '../button';
import * as Style from './bottomSheet.css';

interface BottomSheetProps {
  variants: 'common' | 'login';
  children: string;
  primaryButtonChildren: string;
  onClickClose: () => void;
  onClickPrimaryButton: () => void;
  onClickKaKaoLogin: () => void;
}

export default function BottomSheet({
  variants,
  children,
  primaryButtonChildren,
  onClickClose,
  onClickPrimaryButton,
  onClickKaKaoLogin,
}: BottomSheetProps) {
  return (
    <>
      {variants === 'common' && (
        <div className="bottom-sheet-wrapper" css={Style.wrapper}>
          <div css={Style.bottomSheetBar}></div>
          <strong css={Style.bottomSheetText}>{children}</strong>
          <div className="group-button" css={Style.groupButton}>
            <Button variants="green-secondary" onClick={onClickClose}>
              닫기
            </Button>
            <Button variants="green-primary" onClick={onClickPrimaryButton}>
              {primaryButtonChildren}
            </Button>
          </div>
        </div>
      )}
      {variants === 'login' && (
        <div className="bottom-sheet-wrapper" css={Style.wrapper}>
          <div css={Style.bottomSheetBar}></div>
          <strong css={Style.bottomSheetText}>로그인이 필요한 서비스입니다!</strong>
          <div className="group-button" css={Style.groupButton}>
            <Button
              variants="login"
              size="large"
              onClick={onClickKaKaoLogin}
              css={Style.kakaoLoginButtonWrapper}
            >
              <IconKaKao />
              <p>카카오 로그인</p>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
