import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from '@/components/bottomSheet/bottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'components/modal/modal',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const DeleteModal: Story = {
  args: {
    children: '정말 삭제하시겠습니까?',
  },
};

export const EditModal: Story = {
  args: {
    children: '수정하시겠습니까?',
  },
};
