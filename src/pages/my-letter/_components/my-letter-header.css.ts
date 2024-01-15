import { css } from '@emotion/react';

export const base = css({
  position: 'fixed',
  top: 47,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
});

export const container = css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '10px 18px',
  height: '39px',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
});

export const text = css({
  color: '#FFF',
  fontSize: '16px',
  fontWeight: 500,
  cursor: 'pointer',
});
