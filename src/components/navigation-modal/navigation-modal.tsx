import * as navigationModal from './navigation-modal.css';
import Image from 'next/image';
import Link from 'next/link';

interface NavigationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type TabType = {
  id: string;
  name: string;
  title: string;
};

const navigationList: TabType[] = [
  {
    id: '1',
    name: 'introduce',
    title: '서비스 소개',
  },
  {
    id: '2',
    name: 'letter',
    title: '푸바오에게 편지쓰기',
  },
  {
    id: '3',
    name: 'mailbox',
    title: '푸바오 우체통 구경하기',
  },
  {
    id: '4',
    name: 'inquire',
    title: '문의하기',
  },
];

export default function NavigationModal({ isOpen, onClose }: NavigationModalProps) {
  if (!isOpen) return null;
  return (
    <div css={navigationModal.base}>
      <header css={navigationModal.modalHeader}>
        <button css={navigationModal.modalCloseButton} onClick={onClose}>
          <Image alt="exit-button" src="/assets/svgs/IconArrowBack.svg" width={18} height={18} />
        </button>
      </header>
      {navigationList.map((tab: TabType) => (
        <Link href={tab.name} key={tab.id} css={navigationModal.modalButton}>
          <p>{tab.title}</p>
          <Image
            alt="arrow-button"
            src="/assets/svgs/IconNavigationButton.svg"
            width={12}
            height={12}
          />
        </Link>
      ))}
    </div>
  );
}
