import Button from '../button';
import * as Style from './bottomSheet.css';

interface BottomSheetProps {
  children: string;
  onClickClose: () => void;
  onClickDelete: () => void;
}

export default function BottomSheet({ children, onClickClose, onClickDelete }: BottomSheetProps) {
  return (
    <>
      <div className="bottom-sheet-wrapper" css={Style.wrapper}>
        <div css={Style.bottomSheetBar}></div>
        <strong css={Style.bottomSheetText}>{children}</strong>
        <div className="group-button" css={Style.groupButton}>
          <Button variants="green-secondary" onClick={onClickClose}>
            닫기
          </Button>
          <Button variants="green-primary" onClick={onClickDelete}>
            삭제하기
          </Button>
        </div>
      </div>
    </>
  );
}
