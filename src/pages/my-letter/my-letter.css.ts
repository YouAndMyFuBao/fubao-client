import { css } from '@emotion/react';

export const base = css({
  backgroundColor: '#000000',
  marginTop: '76px',
  paddingTop: '30px',
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
  margin: '40px 0',
});

export const buttonContainer = css({
  display: 'flex',
  margin: '30px 18px 35px 18px',
  gap: '10px',
});
