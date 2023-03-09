import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import s from './DronePageView.module.css';
import PortfolioGallery from '../../components/PortfolioGallery';
import Container from '../../components/Container/Container';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import list from '../../JSON/drone.json';
import Modal from '../../components/Modal/Modal';

const DronePageView = () => {
  const navigate = useNavigate();
  const [modalImage, setModalImage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [alt, setAlt] = useState(null);

  const toggleModal = () => {
    setShowModal(showModal => !showModal);
  };
  const openModal = event => {
    setModalImage(() => event.target.dataset.largeimg);
    console.log(event.target.dataset.largeimg);
    setAlt(() => event.target.alt);
    toggleModal();
  };
  const closeModal = () => {
    setModalImage('');
    toggleModal();
  };

  function goBack() {
    return navigate(-1);
  }
  return (
    <section className={s.portfolioSection}>
      <Container>
        <h1 className={s.sectionTitle}> Unusual and custom characters</h1>
        <PortfolioGallery list={list} onClick={openModal} />
        {showModal && <Modal onClose={closeModal} src={modalImage} alt={alt} />}
        <button type="button" onClick={goBack} className={s.link}>
          <MdOutlineDoubleArrow className={s.icon} />
        </button>
      </Container>
    </section>
  );
};

export default DronePageView;
