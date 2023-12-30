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
  width: '354px',
  height: '56px',
});

export const variantsCss: Record<ButtonProps['variants'], SerializedStyles> = {
  'one-button-enable-none': css({
    backgroundColor: '#1E212B',
    color: 'white',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
    '&:disabled': {
      backgroundColor: '#A7C2B1',
      color: 'white',
      cursor: 'default',
    },
  }),
};
