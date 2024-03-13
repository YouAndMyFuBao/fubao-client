import { css } from '@emotion/react';

export const base = css({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 0,
});

export const container = css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '10px 8px',
  height: '39px',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
});

export const hamburger = css({
  cursor: 'pointer',
});
