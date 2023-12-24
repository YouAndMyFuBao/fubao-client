import type { Meta, StoryObj } from '@storybook/react';
import Header from '@/components/header/header';

const meta = {
  title: 'components/header/header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const letterWritePage: Story = {
  args: {
    leftBackPage: true,
    children: '편지쓰기',
  },
};

export const letterPreview: Story = {
  args: {
    leftBackPage: true,
    rightDoneButton: true,
  },
};

export const mailboxPage: Story = {
  args: {
    leftBackPage: true,
    rightSettingsButton: true,
  },
};

export const editMyLetterPage: Story = {
  args: {
    leftBackPage: true,
  },
};
