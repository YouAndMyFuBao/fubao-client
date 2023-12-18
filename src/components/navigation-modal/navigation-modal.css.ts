import { style } from '@vanilla-extract/css';

export const base = style({
  height: '100vh',
  background: '#1E212B',
  zIndex: 1,
  padding: '22px',
  color: 'white',
});

export const modalHeader = style({
  height: '39px',
});

export const modalCloseButton = style({
  cursor: 'pointer',
  background: 'none',
});

export const modalButton = style({
  display: 'flex',
  padding: '18px 0px',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  cursor: 'pointer',
});
