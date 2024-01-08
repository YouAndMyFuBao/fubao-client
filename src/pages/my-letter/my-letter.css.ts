import { css } from '@emotion/react';

export const base = css({
  backgroundColor: 'rgba(0, 0, 0, 0.90)',
  marginTop: '39px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

export const message = css({
  fontSize: '14px',
  fontWeight: '500',
  color: 'white',
  whiteSpace: 'pre-wrap',
  textAlign: 'center',
  lineHeight: '1.5',
  marginTop: '60px',
});

export const buttonContainer = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '60px',
});
