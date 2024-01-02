import { css } from '@emotion/react';

export const previewLetterStyles = {
  postWrapper: css({
    position: 'relative',
  }),
};

export const backgroundWrapper = css({
  position: 'relative',
});

export const background = {
  hand: css({
    position: 'absolute',
    right: '0',
    top: '40vh',
  }),
  finger: css({
    position: 'absolute',
    right: '0',
    top: '50vh',
  }),
  head: css({
    position: 'absolute',
    top: '65vh',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
};

export const pageWrapper = css({});

export const footer = {
  btnGroup: css({
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
  }),
};
