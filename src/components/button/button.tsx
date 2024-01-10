import * as Style from './button.css';
import { IconKaKao } from '../../../public/assets/svgs';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variants: 'primary' | 'secondary' | 'tertiary' | 'quanternary' | 'kakao';
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
      {variants === 'kakao' && (
        <>
          <IconKaKao />
          <p>카카오 로그인</p>
        </>
      )}
      {children}
    </button>
  );
};
