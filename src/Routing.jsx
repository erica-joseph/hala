import React from 'react';
import {  HashRouter,  Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home.jsx';
import About from './Pages/Home/About.jsx';
import Portfolio from './Pages/Projects/Projects.jsx';
import Resume from './Pages/Resume.jsx';

import Roosevelt from './Pages/Projects/Project1.jsx';
import EastKing from './Pages/Projects/Project2.jsx';
import Alaska from './Pages/Projects/Project3.jsx';
import LochHaven from './Pages/Projects/Project5.jsx';
import SystemicTower from './Pages/Projects/Project4.jsx';
import Michigan from './Pages/Projects/Project6.jsx';
import BokTower from './Pages/Projects/Project7.jsx';
import Form from './Pages/Projects/Project8.jsx';

import PortfolioDownload from './Pages/Portfolio.jsx';

const Routing = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about" element={<About />} />

        <Route path="/portfolio/Roosevelt" element={<Roosevelt />} />
        <Route path="/portfolio/EastKing" element={<EastKing />} />
        <Route path="/portfolio/Alaska" element={<Alaska />} />
        <Route path="/portfolio/SystemicTower" element={<SystemicTower />} />
        <Route path="/portfolio/LochHaven" element={<LochHaven />} />
        <Route path="/portfolio/Michigan" element={<Michigan />} />
        <Route path="/portfolio/BokTower" element={<BokTower />} />
        <Route path="/portfolio/FormStudies" element={<Form />} />
        <Route path="/portfolio/More" element={<Portfolio />} />

        <Route path="/portfolio/Download" element={<PortfolioDownload />} />
      </Routes>

  );
};

export default Routing;
