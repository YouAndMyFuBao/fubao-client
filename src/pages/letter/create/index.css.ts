import { css } from '@emotion/react';

export const createLetterStyles = {
  wrapper: css({
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  }),
  postWrapper: css({
    padding: '30px',
    flexGrow: '1',
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

  buttonWrapper: css({
    margin: '18px',
  }),

  kakaoButton: css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '28px',
    width: '100%',
    height: '56px',
    fontSize: '17px',
    fontWeight: '600',
    borderRadius: '16px',
    backgroundColor: '#FEE500',
  }),

  submitButton: css({
    display: 'flex',
  }),
};
