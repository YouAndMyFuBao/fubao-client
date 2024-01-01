import type { Meta, StoryObj } from '@storybook/react';
import LetterCard from './letter-card';

const meta = {
  title: 'Common/LetterCard',
  component: LetterCard,
  tags: ['autodocs'],
} satisfies Meta<typeof LetterCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const CardWithTextCount: Story = { args: { variant: 'textCount' } };

export const CardWithDate: Story = {
  args: { variant: 'date', apiImage: 'image', apiText: '안녕푸바옹', apiDate: '2023-12-14' },
};
