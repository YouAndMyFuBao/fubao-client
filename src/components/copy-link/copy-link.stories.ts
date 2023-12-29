import type { Meta, StoryObj } from '@storybook/react';
import CopyLink from './copy-link';

const meta = {
  title: 'Common/CopyLink',
  component: CopyLink,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof CopyLink>;

export default meta;

type Story = StoryObj<typeof meta>;

export const copyLinkComponent: Story = {};
