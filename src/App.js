import React from 'react';
import './App.css';
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import Promotions from './pages/promotions';
  
function app() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/promotions' element={<Promotions/>} />
      </Routes>
      </Router>
    );
  }

  export default app;
