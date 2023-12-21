import * as layout from './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return <div css={layout.base}>{children}</div>;
}
