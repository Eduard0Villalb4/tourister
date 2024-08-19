import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./App.css";
import TermsAndCondition from './pages/terms';
import PrivacyPolicy from './pages/privacy';
import Contact from './pages/contact';

const App: React.FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndCondition />} />
      <Route path="/contact" element={<Contact />} />


      <Route path="**" element={<Navigate to="/" />} />
    </Routes>
  </div>
);

export default App;