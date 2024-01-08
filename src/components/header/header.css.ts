import { css } from '@emotion/react';

export const headerWrapper = css({
  padding: '7.5px 18px',
  display: 'flex',
  justifyContent: 'space-between',
  position: 'fixed',
  top: '0',
  // display: fixed하면 width: '100%' 적용이 안됨
  width: '450px',
});

export const title = css({
  display: 'inline',
  color: '#fff',
  fontSize: '20',
  verticalAlign: '25%',
  fontWeight: '900',
  marginLeft: '8px',
});

export const rightButton = css({
  color: '#fff',
  fontSize: 16,
  lineHeight: '1.3',
});
