import React, { useState } from 'react';
import {
  AppBar, Toolbar, Drawer, Button, Box, CssBaseline,
} from '@mui/material';
import { AccountBox, ListAlt, ExitToApp, Send } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  // State for handling drawer open/close
  const [openDrawer, setOpenDrawer] = useState(false);

  // Router navigation
  const navigate = useNavigate();

  // Function to handle logout
  const handleLogout = () => {
    // Redirecting user to the login page
    navigate('/');
  };

  // Function to render a button for the drawer
  const renderDrawerButton = (icon, label) => (
    <Button 
      startIcon={icon}
      sx={{
        textTransform: 'none',
        justifyContent: 'flex-start',
        padding: '10px 16px',
        color: 'white'
      }}
    >
      {openDrawer && label}
    </Button>
  );

  return (
    <div className="desh">
      <CssBaseline />

      {/* Main Toolbar */}
      <Toolbar />

      {/* Sidebar */}
      <Drawer
        variant="permanent"
        open={openDrawer}
        onMouseEnter={() => setOpenDrawer(true)}
        onMouseLeave={() => setOpenDrawer(false)}
        sx={{
          width: 240,
          '& .MuiDrawer-paper': {
            width: 240,
            transition: '.3s',
            overflowX: 'hidden',
            backgroundColor: '#f57c00',
            width: openDrawer ? 240 : 60,
          }
        }}
      >
        {/* Additional Toolbar inside Drawer */}
        <Toolbar />

        {/* Drawer content */}
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flexGrow: 1 
          }}
        >
          {renderDrawerButton(<AccountBox />, 'Account')}
          {renderDrawerButton(<ListAlt />, 'Transactions')}
          {renderDrawerButton(<Send />, 'Transfer')}
        </Box>

        {/* Logout Button */}
        <Button 
          startIcon={<ExitToApp />}
          onClick={handleLogout}
          sx={{
            textTransform: 'none',
            justifyContent: 'flex-start',
            padding: '10px 16px',
            color: 'white'
          }}
        >
          {openDrawer && 'Logout'}
        </Button>
      </Drawer>
      <h1 alignment = "centre">This is my comet App</h1>
    </div>
  );
}

export default Dashboard;
