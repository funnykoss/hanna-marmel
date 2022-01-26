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
        <Route exact path="/" element={<HomePageView />} />
        <Route path="/portfolio" element={<PortfolioPageView />} />
      </Routes>
    </>
  );
}

export default App;
