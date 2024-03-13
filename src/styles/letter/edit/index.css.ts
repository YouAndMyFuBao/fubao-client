import { css } from '@emotion/react';

export const wrapper = css({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const main = {
  card: css({
    margin: '30px',
    flexGrow: '1',
  }),

  button: css({
    margin: '12px',
  }),
};
