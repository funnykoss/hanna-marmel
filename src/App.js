import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageView from "./view/HomePageView";
import Header from "./components/Header";
import PortfolioPageView from "./view/PortfolioPageView";
import PortretsPageView from "./view/PortretsPageView/PortretsPageView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePageView />} />
          <Route path="portfolio" element={<PortfolioPageView />} />
          <Route path="portfolio/portrets" element={<PortretsPageView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
