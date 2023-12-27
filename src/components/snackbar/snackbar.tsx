import * as Style from './snackbar.css';

interface SnackbarProps {
  variants: 'home' | 'letter';
}

export default function Snackbar({ variants }: SnackbarProps) {
  return (
    <div css={Style.snackbarWrapper}>
      {variants === 'home' && '하트가 +20 되었어요!'}
      {variants === 'letter' && '링크가 복사되었어요!'}
    </div>
  );
}
