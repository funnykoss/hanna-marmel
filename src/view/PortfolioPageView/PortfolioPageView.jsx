import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import s from './PortfolioPageView.module.css';
import PortfolioGallery from '../../components/PortfolioGallery/';
import list from '../../JSON/portrets.json';
import Container from '../../components/Container/Container';
import { MdOutlineDoubleArrow } from 'react-icons/md';
// import { useState } from "react";

const PortfolioPageView = () => {
  // const {list, setList}=useState([])
  const location = useLocation();

  return (
    <>
      <section className={s.portfolioSection}>
        <Container>
          <h1 className={s.sectionTitle}> Unusual and custom characters</h1>
          <PortfolioGallery list={list} />
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
