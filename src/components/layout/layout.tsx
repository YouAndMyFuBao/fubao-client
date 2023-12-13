import { ReactElement } from 'react';
import * as layout from './layout.css';

interface LayoutProps {
  children: ReactElement;
}

export default function Layout({ children }: LayoutProps) {
  return <div className={layout.base}>{children}</div>;
}
