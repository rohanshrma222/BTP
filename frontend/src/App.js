import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/Sign-up';

import { ReactLenis } from 'lenis/react';  

function App() {
  return (
    <div className="App">
      <ReactLenis root> {/* 👈 wrap everything inside ReactLenis */}
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/services" element={<Services />} />
            <Route exact path="/Products" element={<Products />} />
            <Route exact path="/Sign-up" element={<SignUp />} />
          </Routes>
        </Router>
      </ReactLenis>
    </div>
  );
}

export default App;
