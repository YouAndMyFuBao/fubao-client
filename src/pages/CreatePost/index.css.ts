import { style } from '@vanilla-extract/css';

export const createPostStyles = {
  postWrapper: style({
    boxShadow: '0 0 0 5px red inset',
  }),

  postImage: style({
    backgroundColor: 'gray',
    width: '300px',
    height: '300px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }),

  postText: style({
    backgroundColor: 'indigo',
    height: '300px',
  }),

  postTextInput: style({
    width: '90%',
    height: '70%',
    margin: '10px 10px',
  }),

  submitButton: style({
    boxShadow: '0 0 0 5px green inset',
    height: '100px',
    fontSize: '20px',
  }),
};
