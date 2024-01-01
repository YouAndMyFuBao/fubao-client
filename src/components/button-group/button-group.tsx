import { ReactNode } from 'react';
import * as Style from './button-group.css';
import { SerializedStyles } from '@emotion/react';

interface ButtonGroupProps {
  variants: 'two-button-enable-black' | 'two-button-enable-green' | 'modal';
  size?: 'small' | 'medium';
  leftButton: (css: SerializedStyles[]) => ReactNode;
  rightButton: (css: SerializedStyles[]) => ReactNode;
}

export const ButtonGroup = ({
  variants,
  leftButton,
  rightButton,
  size = 'medium',
}: ButtonGroupProps) => {
  const buttonLeftCss = [Style.base, Style.leftCss[variants], Style.sizeCss[size]];
  const buttonRightCss = [Style.base, Style.rightCss[variants], Style.sizeCss[size]];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {leftButton(buttonLeftCss)}
      {rightButton(buttonRightCss)}
      {/* <button
        type={type}
        css={buttonLeftCss}
        disabled={disabled}
        children={leftChildren}
        {...props}
      />
      <button
        type={type}
        css={buttonRightCss}
        disabled={disabled}
        children={rightChildren}
        {...props}
      /> */}
    </div>
  );
};
