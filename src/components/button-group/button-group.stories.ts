import type { Meta, StoryObj } from '@storybook/react';

import { ButtonGroup } from './button-group';

const meta: Meta<typeof ButtonGroup> = {
  title: 'Common/ButtonGroup',
  component: ButtonGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variants: 'two-button-enable-black',
    size: 'small',
    children: 'Group',
  },
};
