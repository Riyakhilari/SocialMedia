
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/item/:id" element={<DetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
