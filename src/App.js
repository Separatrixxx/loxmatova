import React from "react";
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Price from './pages/Price'
import Contacts from './pages/Contacts'

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {

    if (document.location.pathname === '/') {
        document.title = 'LOxmatova';
    } else if (document.location.pathname === '/about') {
        document.title = 'О себе';
    } else if (document.location.pathname === '/portfolio') {
        document.title = 'Портфолио';
    } else if (document.location.pathname === '/price') {
        document.title = 'Прайс-лист';
    } else if (document.location.pathname === '/contacts') {
        document.title = 'Контакты';
    } else {
        document.title = '404';
    }

  return (
      <div className="scroll-smooth bg-neutral-900">
          <Router>
              <Routes>
                  <Route path='/' element={<Home/>} />
                  <Route path='*' element={<NotFound/>} />
                  <Route path='/about' element={<About/>} />
                  <Route path='/portfolio' element={<Portfolio/>} />
                  <Route path='/price' element={<Price/>} />
                  <Route path='/contacts' element={<Contacts/>} />
              </Routes>
          </Router>
      </div>
  );
}

export default App;
