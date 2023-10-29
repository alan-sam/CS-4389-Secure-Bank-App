import React, { useState } from 'react';

function Dashboard() {
  const [isAccountsDropdownOpen, setAccountsDropdownOpen] = useState(false);
  const [isTransactionsDropdownOpen, setTransactionsDropdownOpen] = useState(false);
  const [isTransferDropdownOpen, setTransferDropdownOpen] = useState(false);

  const toggleAccountsDropdown = () => {
    setAccountsDropdownOpen(!isAccountsDropdownOpen);
  };

  const toggleTransactionsDropdown = () => {
    setTransactionsDropdownOpen(!isTransactionsDropdownOpen);
  };

  const toggleTransferDropdown = () => {
    setTransferDropdownOpen(!isTransferDropdownOpen);
  };

  return (
    <div className="DashboardWithSidebar">
      {/* Sidebar */}
      <div className="Sidebar">
        <div className="DashboardNavbar">
          <ul>
            <li onClick={toggleAccountsDropdown}>
              <a href="#">Accounts</a>
              {isAccountsDropdownOpen && (
                <ul className="DropdownMenu">
                  <li><a href="#">Checking</a></li>
                  <li><a href="#">Savings</a></li>
                </ul>
              )}
            </li>
            <li onClick={toggleTransactionsDropdown}>
              <a href="#">Transactions</a>
              {isTransactionsDropdownOpen && (
                <ul className="DropdownMenu">
                  <li><a href="#">Recent Transactions</a></li>
                  <li><a href="#">Spend Analyzer</a></li>
                </ul>
              )}
            </li>
            <li onClick={toggleTransferDropdown}>
              <a href="#">Transfer</a>
              {isTransferDropdownOpen && (
                <ul className="DropdownMenu">
                  <li><a href="#">Transfer to Checking</a></li>
                  <li><a href="#">Transfer to Savings</a></li>
                </ul>
              )}
            </li>
            <li onClick='/'>
              <a href="/">Logout</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="MainContent">
        <h1>Comet Bank</h1>
      </div>
    </div>
  );
}

export default Dashboard;