import { css } from '@emotion/react';

export const body = css({
  position: 'relative',
  top: '63px',
  left: '0',
  width: '100%',
});

export const bodyContent = css({
  display: 'flex',
  justifyContent: 'center',
});

export const base = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
  background: `url('/assets/svgs/IconPostBox.svg')`,
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  height: '100vh',
  position: 'fixed',
  zIndex: '0',
});

export const postContainer = css({
  position: 'relative',
  top: '22px',
  left: '0',
  width: '284px',
  height: '485px',
  display: 'grid',
  gridGap: '16px',
  overflowY: 'scroll',
  msOverflowStyle: 'none',
  scrollbarWidth: 'none',
  WebkitScrollBar: 'none',
  gridTemplateColumns: 'repeat(2, 1fr)',
});
