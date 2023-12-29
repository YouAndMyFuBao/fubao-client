import { css } from '@emotion/react';

export const base = css({
  height: '100vh',
  background: '#1E212B',
  position: 'fixed',
  top: 0,
  zIndex: 10,
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
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

export const memberManagement = css({
  display: 'flex',
  marginTop: '439px',
  gap: '40px',
});

export const memberManagementButton = css({
  color: 'rgba(255, 255, 255, 0.50)',
  fontWeight: '800',
  fontSize: '18px',
});

export const example = css({
  position: 'relative',
  zIndex: 100,
  borderRadius: '20px',
  backgroundColor: 'red',
  width: '300px',
  height: '50px',
});

export const exampleSecond = css({
  position: 'relative',
  zIndex: 100,
  borderRadius: '20px',
  backgroundColor: 'blue',
  width: '300px',
  height: '50px',
});
