import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePageView from './view/HomePageView';
import PortfolioPageView from './view/PortfolioPageView';
import DronePageView from './view/DronePageView';
import AboutPageView from './view/AboutPageView/AboutPageView';
import ContactsPageView from './view/ContactsPageView/ContactsPageView';
import PricePageView from './view/PricePageView/PricePageView';
import Layout from './components/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePageView />} />
          <Route path="portfolio" element={<PortfolioPageView />} />
          <Route path="portfolio/drone" element={<DronePageView />} />
          <Route path="about" element={<AboutPageView />} />
          <Route path="contacts" element={<ContactsPageView />} />
          <Route path="price" element={<PricePageView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
