import type { Meta, StoryObj } from '@storybook/react';
import BottomSheet from './bottomSheet';

const meta: Meta<typeof BottomSheet> = {
  title: 'Common/BottomSheet',
  component: BottomSheet,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof BottomSheet>;

export const KakaoLoginBottomSheet: Story = {
  args: {
    variants: 'login',
  },
};

export const SignOutBottomSheet: Story = {
  args: {
    variants: 'common',
    children: `디어바오와 작별합니다ㅜ 
    다음에 다시 만나요 :)`,
    primaryButtonChildren: '탈퇴하기',
  },
};

export const LogOutBottomSheet: Story = {
  args: {
    variants: 'common',
    children: `로그아웃 하시겠어요?
    다음에 다시 만나요 :)`,
    primaryButtonChildren: '로그아웃',
  },
};

export const DeleteLetterBottomSheet: Story = {
  args: {
    variants: 'common',
    children: `현재 작성 중인 내용이 저장되지 않았어요.
    삭제하시겠어요?`,
    primaryButtonChildren: '삭제하기',
  },
};

export const DeleteMyLetter: Story = {
  args: {
    variants: 'common',
    children: '편지를 삭제하시겠어요?',
    primaryButtonChildren: '삭제하기',
  },
};
