import React from 'react';

function Dashboard() {
  return (
    <div>
      {/* Navbar */}
      <div className="Navbar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Deposit</a></li>
          <li><a href="#">Transfer</a></li>
        </ul>
      </div>

     
      <div className="Dashboard">
        <h1>This is the dashboard</h1>
      </div>
    </div>
  );
}

export default Dashboard;
