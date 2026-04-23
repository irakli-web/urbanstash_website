import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ColorProvider } from './context/ColorContext';
import { HeadingFontProvider } from './context/HeadingFontContext';
import HomePage from './pages/HomePage';
import SizingPage from './pages/SizingPage';
import UnitsPage from './pages/UnitsPage';
import UnitDetailPage from './pages/UnitDetailPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <ColorProvider>
      <HeadingFontProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/sizing" element={<SizingPage />} />
            <Route path="/units" element={<UnitsPage />} />
            <Route path="/units/:slug" element={<UnitDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </Router>
      </HeadingFontProvider>
    </ColorProvider>
  );
}

export default App;
