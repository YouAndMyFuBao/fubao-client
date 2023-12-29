import { SerializedStyles, css } from '@emotion/react';
import { ComponentProps } from 'react';
import Button from '.';

type ButtonProps = ComponentProps<typeof Button>;

export const base = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '17px',
  fontWeight: '600',
  borderRadius: '16px',
});

export const variantsCss: Record<ButtonProps['variants'], SerializedStyles> = {
  primary: css({
    backgroundColor: '#1E212B',
    color: 'white',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
    '&:disabled': {
      backgroundColor: '#909190',
      cursor: 'default',
    },
  }),
  secondary: css({
    backgroundColor: 'white',
    color: '#1E212B',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.12)',
  }),
  'green-primary': css({
    backgroundColor: '#009436',
    color: 'white',
  }),
  'green-secondary': css({
    backgroundColor: '#A7C2B1',
    color: '#1E212B',
  }),
  login: css({
    backgroundColor: '#FEE500',
    color: '#000',
  }),
};

export const sizeCss: Record<NonNullable<ButtonProps['size']>, SerializedStyles> = {
  small: css({ width: '100px', height: '56px' }),
  medium: css({ width: '172px', height: '56px' }),
  large: css({ width: '354px', height: '56px' }),
};
