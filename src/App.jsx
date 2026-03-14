import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VersionProvider, useVersion } from './context/VersionContext';
import { ColorProvider } from './context/ColorContext';
import HomePage from './pages/HomePage';
import HomePageV2 from './pages/HomePageV2';
import SizingPage from './pages/SizingPage';
import UnitsPage from './pages/UnitsPage';
import UnitDetailPage from './pages/UnitDetailPage';
import AboutPage from './pages/AboutPage';
function HomeRoute() {
  const { version } = useVersion();
  return version === 'v2' ? <HomePageV2 /> : <HomePage />;
}

function App() {
  return (
    <VersionProvider>
      <ColorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/sizing" element={<SizingPage />} />
          <Route path="/units" element={<UnitsPage />} />
          <Route path="/units/:slug" element={<UnitDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      </ColorProvider>
    </VersionProvider>
  );
}

export default App;
