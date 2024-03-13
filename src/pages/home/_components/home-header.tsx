import Image from 'next/image';
import { useState } from 'react';
import NavigationModal from '@/components/navigation-modal/navigation-modal';
import { css } from '@emotion/react';

export default function HomeHeader() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <header css={base}>
        <div css={container}>
          <Image
            css={hamburger}
            alt="hamburger"
            src="/assets/svgs/IconHamburger.svg"
            width={26}
            height={26}
            onClick={openModal}
          />
        </div>
      </header>
      <NavigationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

const base = css({
  position: 'fixed',
  top: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  zIndex: 0,
});

const container = css({
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  padding: '10px 8px',
  height: '39px',
  width: '100%',
  minWidth: '390px',
  maxWidth: '450px',
});

const hamburger = css({
  cursor: 'pointer',
});
