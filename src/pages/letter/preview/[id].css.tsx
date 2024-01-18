import { css } from '@emotion/react';

export const previewLetterStyles = {
  postWrapper: css({
    position: 'relative',
  }),
};

export const backgroundWrapper = css({
  position: 'relative',
  height: '100vh',
});

export const background = {
  hand: css({
    position: 'absolute',
    right: '0',
    top: '47vh',
  }),
  finger: css({
    position: 'absolute',
    right: '0',
    top: '57vh',
    zIndex: '1',
  }),
  head: css({
    position: 'absolute',
    top: '65vh',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '1',
  }),
};

export const pageWrapper = css({
  width: '100%',
});

export const mainLetterCard = {
  hand: css({
    position: 'absolute',
    top: '100px',
    right: '90px',
    transform: 'rotate(-15deg)',
  }),
  head: css({
    position: 'absolute',
    top: '75px',
    left: '80px',
    transform: 'rotate(6.66deg)',
  }),
};

export const footer = {
  btnGroup: css({
    width: '350px',
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  }),
  bottombtn: css({
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  }),
};
