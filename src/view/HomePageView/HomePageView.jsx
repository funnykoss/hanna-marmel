import React from 'react';
import { useState } from 'react';
import PortfolioGallery from '../../components/PortfolioGallery/PortfolioGallery';
import Container from '../../components/Container';
import Modal from '../../components/Modal/Modal';
import list from '../../JSON/start.json';
// import { BsArrowRightShort } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { RiFacebookCircleFill } from 'react-icons/ri';
import s from './HomePageView.module.css';

const HomePageView = () => {
  const [modalImage, setModalImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alt, setAlt] = useState(null);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const openModal = event => {
    setModalImage(() => event.target.dataset.largeImg);
    console.log(event.target.dataset.largeImg);
    setAlt(() => event.target.alt);
    toggleModal();
  };
  const closeModal = () => {
    setModalImage('');
    toggleModal();
  };
  return (
    <Container>
      <div className={s.sectionInfo}>
        <div className={s.photograferName}>
          <h1 className={s.sectionTitle}>Hanna Martysheva</h1>
          <h2 className={s.description}>photographer</h2>
        </div>
        <ul className={s.socialLinks}>
          <li className={s.socialItem}>
            <a href="https://www.instagram.com/hannamarmel/" target="_blank" rel="noreferrer">
              <AiFillInstagram className={s.socialIcon} />
            </a>
          </li>
          <li className={s.socialItem}>
            <a href="https://www.facebook.com/MAnyapeace" target="_blank" rel="noreferrer">
              <RiFacebookCircleFill className={s.socialIcon} />
            </a>
          </li>
        </ul>
      </div>
      <PortfolioGallery list={list} onClick={openModal} />
      {showModal && <Modal onClose={closeModal} src={modalImage} alt={alt} />}
    </Container>
  );
};

export default HomePageView;
