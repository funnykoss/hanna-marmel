import React from 'react';
import { useNavigate } from 'react-router-dom';
import s from './DronePageView.module.css';
import PortfolioGallery from '../../components/PortfolioGallery';
import Container from '../../components/Container/Container';
import { MdOutlineDoubleArrow } from 'react-icons/md';
import list from '../../JSON/drone.json';

const DronePageView = () => {
  const navigate = useNavigate();

  function goBack() {
    return navigate(-1);
  }
  return (
    <section className={s.portfolioSection}>
      <Container>
        <h1 className={s.sectionTitle}> Unusual and custom characters</h1>
        <PortfolioGallery list={list} />
        <button type="button" onClick={goBack} className={s.link}>
          <MdOutlineDoubleArrow className={s.icon} />
        </button>
      </Container>
    </section>
  );
};

export default DronePageView;
