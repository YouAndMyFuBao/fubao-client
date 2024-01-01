import { SerializedStyles, css } from '@emotion/react';
import { ComponentProps } from 'react';
import { ButtonGroup } from './button-group';

type ButtonGroupProps = ComponentProps<typeof ButtonGroup>;

export const base = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '17px',
  fontWeight: '600',
  borderRadius: '16px',
});

export const sizeCss: Record<NonNullable<ButtonGroupProps['size']>, SerializedStyles> = {
  small: css({ width: '156px', height: '56px' }),
  medium: css({ width: '172px', height: '56px' }),
};

export const leftCss: Record<ButtonGroupProps['variants'], SerializedStyles> = {
  'two-button-enable-black': css({
    backgroundColor: 'white',
    color: '#1E212B',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
  }),
  'two-button-enable-green': css({
    backgroundColor: 'white',
    color: '#1E212B',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
  }),
  modal: css({
    backgroundColor: '#A7C2B1',
    color: '#1E212B',
  }),
};

export const rightCss: Record<ButtonGroupProps['variants'], SerializedStyles> = {
  'two-button-enable-black': css({
    backgroundColor: '#1E212B',
    color: 'white',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.02)',
  }),
  'two-button-enable-green': css({
    backgroundColor: '#009436',
    color: 'white',
    boxShadow: '0px 0px 16px 2px rgba(0, 0, 0, 0.12)',
  }),
  modal: css({
    backgroundColor: '#009436',
    color: 'white',
  }),
};
