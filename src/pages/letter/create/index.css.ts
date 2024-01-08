import { css } from '@emotion/react';

export const createLetterStyles = {
  postWrapper: css({
    boxShadow: '0 0 0 5px red inset',
    position: 'relative',
    width: '300px',
    margin: '0 auto',
  }),

  image: {
    nonePostImage: css({
      backgroundColor: 'gray',
      width: '300px',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),
    nonPostImageInput: css({
      display: 'none',
    }),
    selectedPostImage: css({
      display: 'block',
      width: '300px',
      height: '300px',
      objectFit: 'cover',
    }),
    deleteButton: css({
      position: 'absolute',
      top: '10px',
      left: '10px',
    }),
  },

  text: {
    postText: css({
      backgroundColor: 'indigo',
      height: '300px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }),

    postTextInput: css({
      width: '90%',
      height: '70%',
      margin: '10px 10px',
    }),
  },

  submitButton: css({
    fontSize: '20px',
  }),
};
