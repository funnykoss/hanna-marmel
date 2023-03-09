import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Modal from '../../components/Modal/Modal';

import s from './PortfolioPageView.module.css';
import PortfolioGallery from '../../components/PortfolioGallery/';
import list from '../../JSON/portrets.json';
import Container from '../../components/Container/Container';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import { useState } from 'react';

const PortfolioPageView = () => {
  // const {list, setList}=useState([])
  const location = useLocation();
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

  return (
    <>
      <section className={s.portfolioSection}>
        <Container>
          <h1 className={s.sectionTitle}> Unusual and custom characters</h1>
          <PortfolioGallery list={list} onClick={openModal} />
          {showModal && <Modal onClose={closeModal} src={modalImage} alt={alt} />}
          <Link
            to={{
              pathname: 'drone',
              state: { from: location },
            }}
            className={s.link}
          >
            <MdOutlineDoubleArrow className={s.icon} />
          </Link>
        </Container>
      </section>
    </>
  );
};

export default PortfolioPageView;
