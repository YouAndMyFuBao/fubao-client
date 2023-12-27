import type { Meta, StoryObj } from '@storybook/react';

import Snackbar from './snackbar';

const meta: Meta<typeof Snackbar> = {
  title: 'Common/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const HomeSnackbar: Story = {
  args: {
    variants: 'home',
  },
};

export const LetterSnackbar: Story = {
  args: {
    variants: 'letter',
  },
};
