import { AnimatePresence, motion } from 'framer-motion';
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
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div css={navigationModal.base}>
            <header css={navigationModal.modalHeader}>
              <button css={navigationModal.modalCloseButton} onClick={onClose}>
                <Image
                  alt="exit-button"
                  src="/assets/svgs/IconArrowBack.svg"
                  width={18}
                  height={18}
                />
              </button>
            </header>
            {navigationList.map((tab: TabType) => (
              <Link href={tab.name} key={tab.id}>
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  // exit={{ opacity: 0, y: 1000 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  css={navigationModal.modalButton}
                >
                  <p>{tab.title}</p>
                  <Image
                    alt="arrow-button"
                    src="/assets/svgs/IconNavigationButton.svg"
                    width={12}
                    height={12}
                  />
                </motion.div>
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
