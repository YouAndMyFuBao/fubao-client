import * as Style from './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'primary' | 'secondary' | 'green-primary' | 'green-secondary' | 'login';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variants,
  type = 'button',
  size = 'medium',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const buttonCss = [Style.base, Style.variantsCss[variants], Style.sizeCss[size]];

  return (
    <button type={type} css={buttonCss} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
