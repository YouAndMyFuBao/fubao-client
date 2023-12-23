import { css } from '@emotion/react';

export const wrapper = css({
  display: 'inline-block',
  padding: '12px 20px 20px',
  backgroundColor: '#fff',
  borderRadius: '20px',
});

export const bottomSheetBar = css({
  margin: '0 auto',
  width: '48px',
  height: '4px',
  borderRadius: '999px',
  backgroundColor: '#E5E8EB',
});

export const bottomSheetText = css({
  display: 'inline-block',
  margin: '24px 0',
  color: '#1E212B',
  fontWeight: '600',
});

export const Button = css({
  borderRadius: '16px',
  padding: '18px 49px',
  border: 'none',
});

export const groupButton = css({
  display: 'flex',
  gap: '10px',
  justifyContent: 'space-between',
});

export const closeButton = css(Button, {
  backgroundColor: '#A7C2B1',
});

export const deleteButton = css(Button, {
  backgroundColor: '#009436',
  color: '#fff',
});
