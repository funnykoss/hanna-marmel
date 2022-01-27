import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageView from "./view/HomePageView";
import Header from "./components/Header";
import PortfolioPageView from "./view/PortfolioPageView";

function App() {
  return (
    <>
      <Header />
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<Header />}>
          <Route index element={<HomePageView />} />
          <Route path="portfolio" element={<PortfolioPageView />} />
          <Route path="portfolio/portrets" element={<PortretsPageView />} />
        </Route>
=======
        <Route exact path="/" element={<HomePageView />} />
        <Route path="/portfolio" element={<PortfolioPageView />} />
>>>>>>> parent of 45ec768 (active-link)
      </Routes>
    </>
  );
}

export default App;
