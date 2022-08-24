import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </div>
  );
}

export default App;
