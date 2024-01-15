import { AnimatePresence, motion } from 'framer-motion';
import * as Style from './navigation-modal.css';
import Image from 'next/image';
import Link from 'next/link';
import { getCookie } from 'cookies-next';
import { postLogout } from '@/apis/postLogout';
import { deleteDeactivation } from '@/apis/deleteDeactivation';
import { useRouter } from 'next/router';
import { BottomSheet } from '../bottom-sheet/bottom-sheet';
import Button from '../button';

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

  const kakaoLogin = () => {
    window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${process.env
      .NEXT_PUBLIC_KAKAO_REST_API_KEY!}&redirect_uri=${
      process.env.NEXT_PUBLIC_KAKAO_REDIRECT_URI
    }&response_type=code`;
  };

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
                  {/* 로그아웃 */}
                  <BottomSheet.Root>
                    <BottomSheet.Trigger>
                      <button css={Style.memberManagementButton}>로그아웃</button>
                    </BottomSheet.Trigger>
                    <BottomSheet.Portal>
                      <BottomSheet.Content>
                        로그아웃 하시겠어요?
                        <br />
                        다음에 다시 만나요
                        <BottomSheet.BottomCTA>
                          <BottomSheet.Close asChild>
                            <Button variants="quanternary">닫기</Button>
                          </BottomSheet.Close>
                          <Button
                            variants="tertiary"
                            onClick={async () => {
                              await postLogout();
                              router.reload();
                            }}
                          >
                            로그아웃
                          </Button>
                        </BottomSheet.BottomCTA>
                      </BottomSheet.Content>
                      <BottomSheet.Overlay />
                    </BottomSheet.Portal>
                  </BottomSheet.Root>
                  <BottomSheet.Root>
                    <BottomSheet.Trigger>
                      <button css={Style.memberManagementButton}>회원탈퇴</button>
                    </BottomSheet.Trigger>
                    <BottomSheet.Portal>
                      <BottomSheet.Content>
                        디어바오와 작별합니다.
                        <br />
                        다음에 다시 만나요.
                        <BottomSheet.BottomCTA>
                          <BottomSheet.Close asChild>
                            <Button variants="quanternary">닫기</Button>
                          </BottomSheet.Close>
                          <Button
                            variants="tertiary"
                            onClick={async () => {
                              await deleteDeactivation();
                              router.reload();
                            }}
                          >
                            회원탈퇴
                          </Button>
                        </BottomSheet.BottomCTA>
                      </BottomSheet.Content>
                      <BottomSheet.Overlay />
                    </BottomSheet.Portal>
                  </BottomSheet.Root>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.3, ease: 'easeInOut' }}
                  css={Style.memberManagement}
                >
                  <BottomSheet.Root>
                    <BottomSheet.Trigger>
                      <button css={Style.memberManagementButton}>로그인</button>
                    </BottomSheet.Trigger>
                    <BottomSheet.Portal>
                      <BottomSheet.Content>
                        로그인이 필요한 서비스입니다.
                        <BottomSheet.BottomCTA>
                          <button css={Style.kakaoButton} onClick={() => kakaoLogin()}>
                            <Image
                              alt="kakao"
                              src="/assets/svgs/IconKaKao.svg"
                              width={18}
                              height={18}
                            />
                            카카오 로그인
                          </button>
                        </BottomSheet.BottomCTA>
                      </BottomSheet.Content>
                      <BottomSheet.Overlay />
                    </BottomSheet.Portal>
                  </BottomSheet.Root>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
