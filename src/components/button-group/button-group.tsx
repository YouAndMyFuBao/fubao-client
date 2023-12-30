import * as Style from './button-group.css';

interface ButtonGroupProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'two-button-enable-black' | 'two-button-enable-green' | 'modal';
  size?: 'small' | 'medium';
  disabled?: boolean;
  onClick?: () => void;
}

export const ButtonGroup = ({
  variants,
  type = 'button',
  size = 'medium',
  disabled,
  children,
  ...props
}: ButtonGroupProps) => {
  const buttonLeftCss = [Style.base, Style.leftCss[variants], Style.sizeCss[size]];
  const buttonRightCss = [Style.base, Style.rightCss[variants], Style.sizeCss[size]];

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      <button type={type} css={buttonLeftCss} disabled={disabled} {...props}>
        {children}
      </button>
      <button type={type} css={buttonRightCss} disabled={disabled} {...props}>
        {children}
      </button>
    </div>
  );
};
