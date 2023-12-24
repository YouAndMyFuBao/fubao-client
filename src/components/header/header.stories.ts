import type { Meta, StoryObj } from '@storybook/react';
import Header from './header';

const meta = {
  title: 'Common/Header',
  component: Header,
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const writeLetterPage: Story = {
  args: {
    leftBackPage: true,
    children: '편지쓰기',
  },
};

export const previewMyLetterPage: Story = {
  args: {
    rightDoneButton: true,
  },
};

export const previewLetterPage: Story = {
  args: {
    rightCloseButton: true,
  },
};

export const mailboxPage: Story = {
  args: {
    leftBackPage: true,
    children: '푸바오 우체통',
  },
};

export const mailboxDetailPage: Story = {
  args: {
    leftBackPage: true,
  },
};

export const allMyLetterPage: Story = {
  args: {
    rightCloseButton: true,
  },
};

export const allMyLetterDetilPage: Story = {
  args: {
    leftBackPage: true,
  },
};

export const editAllMyLetterPage: Story = {
  args: {
    leftBackPage: true,
  },
};
