import { style } from '@vanilla-extract/css';

export const base = style({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '10px 8px',
  height: '39px',
  background: 'red',
  zIndex: 0,
});

export const hamburger = style({
  cursor: 'pointer',
});
