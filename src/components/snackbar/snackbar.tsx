import { SerializedStyles } from '@emotion/react';
import * as Style from './snackbar.css';

interface SnackbarProps {
  variants: 'home' | 'letter';
}

interface StyledSnackbarProps extends SnackbarProps {
  additionalCss?: SerializedStyles[];
}

export default function Snackbar({ additionalCss = [], variants }: StyledSnackbarProps) {
  return (
    <div css={[Style.snackbarWrapper, ...additionalCss]}>
      {variants === 'home' && '하트가 +20 되었어요!'}
      {variants === 'letter' && '링크가 복사되었어요!'}
    </div>
  );
}
