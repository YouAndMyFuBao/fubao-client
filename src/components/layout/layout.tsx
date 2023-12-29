import * as layout from './layout.css';
import { pretendardFont } from '../../../public/fonts/fonts';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div css={layout.base} className={pretendardFont.className}>
      {children}
    </div>
  );
}
