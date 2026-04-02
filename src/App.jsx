import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { VersionProvider, useVersion } from './context/VersionContext';
import { ColorProvider } from './context/ColorContext';
import HomePage from './pages/HomePage';
import HomePageV2 from './pages/HomePageV2';
import SizingPage from './pages/SizingPage';
import SizingPageV2 from './pages/SizingPageV2';
import UnitsPage from './pages/UnitsPage';
import UnitsPageV2 from './pages/UnitsPageV2';
import UnitDetailPage from './pages/UnitDetailPage';
import AboutPage from './pages/AboutPage';
import AboutPageV2 from './pages/AboutPageV2';

function HomeRoute() {
  const { version } = useVersion();
  return version === 'v2' ? <HomePageV2 /> : <HomePage />;
}

function SizingRoute() {
  const { version } = useVersion();
  return version === 'v2' ? <SizingPageV2 /> : <SizingPage />;
}

function UnitsRoute() {
  const { version } = useVersion();
  return version === 'v2' ? <UnitsPageV2 /> : <UnitsPage />;
}

function AboutRoute() {
  const { version } = useVersion();
  return version === 'v2' ? <AboutPageV2 /> : <AboutPage />;
}

function App() {
  return (
    <VersionProvider>
      <ColorProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomeRoute />} />
          <Route path="/sizing" element={<SizingRoute />} />
          <Route path="/units" element={<UnitsRoute />} />
          <Route path="/units/:slug" element={<UnitDetailPage />} />
          <Route path="/about" element={<AboutRoute />} />
        </Routes>
      </Router>
      </ColorProvider>
    </VersionProvider>
  );
}

export default App;
