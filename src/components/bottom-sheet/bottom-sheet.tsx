import { Drawer } from 'vaul';
import * as Style from './bottom-sheet.css';
import { ComponentProps, PropsWithChildren } from 'react';

const Root = ({ ...props }: ComponentProps<typeof Drawer.Root>) => <Drawer.Root {...props} />;
const Trigger = ({ ...props }: ComponentProps<typeof Drawer.Trigger>) => (
  <Drawer.Trigger {...props} />
);
const Portal = ({ ...props }: ComponentProps<typeof Drawer.Portal>) => <Drawer.Portal {...props} />;
const Content = ({ children, ...props }: ComponentProps<typeof Drawer.Content>) => (
  <Drawer.Content css={Style.base} {...props}>
    <div css={Style.bottomSheetBar} />
    {children}
  </Drawer.Content>
);
const Overlay = ({ ...props }: ComponentProps<typeof Drawer.Overlay>) => (
  <Drawer.Overlay {...props} css={Style.overlay} />
);

const BottomCTA = ({ children }: PropsWithChildren) => {
  return <div css={Style.groupButton}>{children}</div>;
};

export const BottomSheet = {
  ...Drawer,
  Root,
  Trigger,
  Portal,
  Content,
  Overlay,
  BottomCTA,
};
