import * as Style from './button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'one-button-enable-none';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button = ({
  variants,
  type = 'button',
  disabled,
  children,
  ...props
}: ButtonProps) => {
  const buttonCss = [Style.base, Style.variantsCss[variants]];

  return (
    <button type={type} css={buttonCss} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
