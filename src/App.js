import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 

import Login from './components/Login';
import Signin from './components/Signin';
import Dash from './dashboard/dash';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dash />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
