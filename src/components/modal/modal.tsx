import * as Style from './modal.css';

interface ModalProps {
  children: string;
  onClickClose: () => void;
  onClickDelete: () => void;
}

export default function Modal({ children, onClickClose, onClickDelete }: ModalProps) {
  return (
    <>
      <div className="modal-wrapper" css={Style.wrapper}>
        <div css={Style.ModalBar}></div>
        <strong css={Style.modalText}>{children}</strong>
        <div className="group-button" css={Style.groupButton}>
          <button css={Style.closeButton} onClick={onClickClose}>
            닫기
          </button>
          <button css={Style.deleteButton} onClick={onClickDelete}>
            삭제하기
          </button>
        </div>
      </div>
    </>
  );
}
