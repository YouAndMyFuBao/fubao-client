import { css } from '@emotion/react';

export const wrapper = css({
  position: 'relative',
});

export const buttonWrapper = css({
  width: '354px',
  margin: '0 auto',
  padding: '12px 0',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '2.5px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: '600',
});

export const copiedSnackbar = css(buttonWrapper, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  borderRadius: '12px',
  backgroundColor: 'white',
  fontWeight: '500',
});
