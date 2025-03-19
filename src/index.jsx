import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import './styles/index.css';
import Navbar from './components/Navbar/Navbar';

import Home from './pages/Home';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  </BrowserRouter>
)
