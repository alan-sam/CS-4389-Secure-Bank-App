import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Drawer, Button, Box, Typography, CssBaseline } from '@mui/material';

const Contact = props => {
  return (
<div>
    <Box
    sx={{ 
      margin: '10rem', 
      padding: '1.5rem', 
      border: '5px solid #e0e0e0', 
      borderRadius: '5px',
      backgroundColor: '#f57c00',
      height: '30rem',
      width: '50rem'
    }}
  >
    <Typography variant="h6" gutterBottom>
    Contact Page
    </Typography>
    <Typography variant="body1" gutterBottom>
      Phone Number: 222-222-2222
    </Typography>
    <Typography variant="body1" gutterBottom>
      Email: CometBank@gmail.com
    </Typography>
    <Typography variant="body1" gutterBottom>
      254 Washington Street, Washington.
    </Typography>
  </Box>
  
</div>
  );
};

export default Contact;
