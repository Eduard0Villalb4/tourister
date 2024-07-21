import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Landing from './pages/Landing';


const App: React.FC = () => (
  <div>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="**" element={<Navigate to="/" />} />
    </Routes>
  </div>
);

export default App;