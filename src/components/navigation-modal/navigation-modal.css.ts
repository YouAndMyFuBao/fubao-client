import { css } from '@emotion/react';

export const base = css({
  height: '100vh',
  background: '#1E212B',
  zIndex: 1,
  padding: '22px',
  color: 'white',
});

export const modalHeader = css({
  height: '39px',
});

export const modalCloseButton = css({
  cursor: 'pointer',
  background: 'none',
});

export const modalButton = css({
  display: 'flex',
  padding: '18px 0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  cursor: 'pointer',
});
