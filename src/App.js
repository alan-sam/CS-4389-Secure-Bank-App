import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Login from './components/Login';
import Signin from './components/Signin';
import Dash from './dashboard/dash';
import Account from './dashboard/dash-function/account';
import Transaction from './dashboard/dash-function/transactions';
import Transfer from './dashboard/dash-function/transfer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dash />} />
        <Route path="/dashboard/account" element={<Account />} />
        <Route path="/dashboard/transactions" element={<Transaction />} />
        <Route path="/dashboard/transfer" element={<Transfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
