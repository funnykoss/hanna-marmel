import React from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePageView from "./view/HomePageView";
import Header from "./components/Header";
import PortfolioPageView from "./view/PortfolioPageView";
import DronePageView from "./view/DronePageView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePageView />} />
          <Route path="portfolio" element={<PortfolioPageView />} />
          <Route path="portfolio/drone" element={<DronePageView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
