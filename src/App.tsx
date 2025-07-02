import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import AboutPage from './components/AboutPage';
import CarRentalPage from './components/CarRentalPage';

function App() {
  return (
    <div className="min-h-screen">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rental" element={<CarRentalPage />} />
      </Routes>
    </div>
  );
}

export default App;