import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Home from './pages/Home';
import SpecServices from './pages/SpecServices.tsx';
import GenServices from './pages/GenServices';
import './animations.css';

function App() {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        classNames="page-transition"
        timeout={400}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/specservices" element={<SpecServices />} />
          <Route path="/genservices" element={<GenServices />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default App;