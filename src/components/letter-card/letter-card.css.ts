import { css } from '@emotion/react';

export const letterWrapper = css({
  border: '3px solid #1E212B',
  // margin: '28px 30px',
  padding: '16px',
  display: 'flex',
  flexDirection: 'column',
  color: '#1E212B',
  gap: '16px',
  fontSize: '14px',
  backgroundColor: 'white',
  minWidth: '330px',
});

export const imageUploaded = {
  wrapper: css({
    position: 'relative',
    height: '278px',
    border: '3px solid #000',
  }),
  image: css({
    display: 'block',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  }),
  deleteImageIcon: css({
    position: 'absolute',
    top: '0',
    right: '0',
  }),
};

export const noneImageUploaded = {
  wrapper: css({
    position: 'relative',
    height: '278px',
    border: '3px dashed #000',
  }),
  label: css({
    position: 'absolute',
    width: '100%',
    height: '100%',
  }),
  icon: css({
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }),
  input: css({
    display: 'none',
  }),
};

export const mainText = {
  wrapper: css({
    position: 'relative',
    height: '100px',
  }),
  textarea: css({
    border: 'none',
    width: '100%',
    height: '100px',
    resize: 'none',
    backgroundColor: 'transparent',

    '&::placeholder': {
      lineHeight: '1.7',
    },
  }),
  pPlaceholder: {
    position: 'absolute',
    top: '0',
    left: '0',
    lineHeight: '1.7',
    paddingLeft: '3px',
  },
};

export const footer = {
  wrapper: css({
    color: '#969696',
  }),
  textCounter: css({
    textAlign: 'right',
  }),
  date: css({
    color: '#1E212B',
  }),
};
