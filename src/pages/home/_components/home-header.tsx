import Image from 'next/image';
import * as homeHeader from '../../../styles/home/_components/home-header.css';
import { useState } from 'react';
import NavigationModal from '@/components/navigation-modal/navigation-modal';

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
      <header css={homeHeader.base}>
        <div css={homeHeader.container}>
          <Image
            css={homeHeader.hamburger}
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
