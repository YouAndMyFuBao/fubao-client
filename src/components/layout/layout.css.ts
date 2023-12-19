import { style } from '@vanilla-extract/css';

export const base = style([
  {
    display: 'flex',
    flexDirection: 'column',
    minWidth: '390px',
    maxWidth: '450px',
    height: '100vh',
    margin: '0 auto',
    backgroundColor: 'white',
  },
]);
