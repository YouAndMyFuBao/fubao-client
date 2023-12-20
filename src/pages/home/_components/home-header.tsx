import Image from 'next/image';
import * as homeHeader from './home-header.css';
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
      <header className={homeHeader.base}>
        <Image
          className={homeHeader.hamburger}
          alt="hamburger"
          src="/assets/svgs/IconHamburger.svg"
          width={26}
          height={26}
          onClick={openModal}
        />
      </header>
      <NavigationModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
