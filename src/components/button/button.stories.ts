import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'Common/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Example: Story = {
  args: {
    variants: 'primary',
    size: 'small',
    children: 'Button',
  },
};

// export const Middle: Story = {
//   args: {
//     size: 'medium',
//     children: 'Button',
//   },
// };

// export const Large: Story = {
//   args: {
//     size: 'large',
//     children: 'Button',
//   },
// };
