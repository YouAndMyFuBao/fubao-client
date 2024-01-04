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
  overflow: 'hidden',
  // boxShadow: '0 0 0 3px red',
  height: '100%',
  width: '100%',
});

export const mainLetterCard = {
  hand: css({
    width: '38%',
    height: '61%',
    position: 'absolute',
    top: '20vh',
    right: '32%',
    // boxShadow: '0 0 0 10px purple',
    transform: 'rotate(-15deg)',
  }),
  head: css({
    width: '38%',
    height: '61%',
    // boxShadow: '0 0 0 10px red',
    position: 'absolute',
    top: '13vh',
    left: '35%',
    transform: 'rotate(6.66deg)',
  }),
};

export const footer = {
  btnGroup: css({
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  }),
};
