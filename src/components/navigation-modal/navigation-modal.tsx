import { AnimatePresence, motion } from 'framer-motion';
import * as Style from './navigation-modal.css';
import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { useState } from 'react';
import { postLogout } from '@/apis/postLogout';
import { deleteDeactivation } from '@/apis/deleteDeactivation';
import { useRouter } from 'next/router';

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
  const router = useRouter();
  const accessToken = getCookie('accessToken');

  const [modal, setModal] = useState<{ isOpen: boolean; type: 'login' | 'logout' | 'delete' }>({
    isOpen: false,
    type: 'login',
  });

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env
      .NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${
      process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
    }&response_type=code`;
  };

  function SwitchModal({ type }: { type: 'login' | 'logout' | 'delete' }) {
    switch (type) {
      case 'login':
        return (
          <>
            <button css={Style.example} onClick={() => kakaoLogin()}>
              login
            </button>
            <button
              css={Style.exampleSecond}
              onClick={() => {
                setModal({
                  isOpen: false,
                  type: 'login',
                });
              }}
            >
              닫기
            </button>
          </>
        );
      case 'logout':
        return (
          <>
            <button
              css={Style.example}
              onClick={async () => {
                await postLogout();
                router.reload();
              }}
            >
              logout
            </button>
            <button
              css={Style.exampleSecond}
              onClick={() => {
                setModal({
                  isOpen: false,
                  type: 'logout',
                });
              }}
            >
              닫기
            </button>
          </>
        );
      case 'delete':
        return (
          <>
            <button
              css={Style.example}
              onClick={async () => {
                await deleteDeactivation();
                router.reload();
              }}
            >
              delete
            </button>
            <button
              css={Style.exampleSecond}
              onClick={() => {
                setModal({
                  isOpen: false,
                  type: 'delete',
                });
              }}
            >
              닫기
            </button>
          </>
        );
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          css={Style.motion}
        >
          <div css={Style.base}>
            <header css={Style.modalHeader}>
              <button css={Style.modalCloseButton} onClick={onClose}>
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
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  css={Style.modalButton}
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
            <div>
              {accessToken ? (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  css={Style.memberManagement}
                >
                  <button
                    css={Style.memberManagementButton}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        type: 'logout',
                      });
                    }}
                  >
                    로그아웃
                  </button>
                  <button
                    css={Style.memberManagementButton}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        type: 'delete',
                      });
                    }}
                  >
                    회원탈퇴
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  css={Style.memberManagement}
                >
                  <button
                    css={Style.memberManagementButton}
                    onClick={() => {
                      setModal({
                        isOpen: true,
                        type: 'login',
                      });
                    }}
                  >
                    로그인
                  </button>
                </motion.div>
              )}
            </div>
          </div>
          {modal.isOpen && <SwitchModal type={modal.type} />}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
