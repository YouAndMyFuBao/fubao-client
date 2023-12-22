import type { Meta, StoryObj } from '@storybook/react';
import Modal from '@/components/modal/modal';

const meta: Meta<typeof Modal> = {
  title: 'components/modal/modal',
  component: Modal,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Modal>;

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
