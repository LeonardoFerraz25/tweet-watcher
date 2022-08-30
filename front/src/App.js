import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Timeline from './pages/Timeline';
import Follows from './pages/Follows';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/feed" element={<Feed />} />
        <Route path="/timeline" element={<Timeline />} /> 
        <Route path="/follows" element={<Follows />} />
      </Routes>
    </div>
  );
}

export default App;
