import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import './index.css'
import Navbar from './Navbar/Navbar.jsx';
import App from './App.jsx'
import Projects from './Projects.jsx';
import Privacy from './Privacy.jsx';
import Footer from './Footer/Footer.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/privacy" element={<Privacy />} />
      <Route path='*' element={<Navigate replace to="/" />} />
    </Routes>
  <Footer />
  </BrowserRouter>,
)
