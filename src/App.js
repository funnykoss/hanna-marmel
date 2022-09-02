import React from 'react';

import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePageView from './view/HomePageView';
import Header from './components/Header';
import PortfolioPageView from './view/PortfolioPageView';
import DronePageView from './view/DronePageView';
import AboutPageView from './view/AboutPageView/AboutPageView';
import Footer from './components/Footer/Footer';
import ContactsPageView from './view/ContactsPageView/ContactsPageView';
import PricePageView from './view/PricePageView/PricePageView';

function App() {
  return (
    <div className="wrapper">
      <div className="content">
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<HomePageView />} />
            <Route path="portfolio" element={<PortfolioPageView />} />
            <Route path="portfolio/drone" element={<DronePageView />} />
            <Route path="about" element={<AboutPageView />} />
            <Route path="contacts" element={<ContactsPageView />} />
            <Route path="price" element={<PricePageView />} />
          </Route>
        </Routes>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
