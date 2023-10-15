import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { login } from '../api';
import UTDImage from '../UTD.png';
import { Button, TextField, Container, Typography, Box } from '@mui/material';


function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await login(formData);

      
      console.log('Login successful:', response);
    } catch (error) {
    
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <div className="login-form">
          <form noValidate onSubmit={handleSubmit}>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <Button type="submit" fullWidth variant="contained">
              Login
            </Button>
            <Link to="/dashboard" className="login-link">
              New
            </Link>
            <Box className="login-link">
              <p>
                Don't have an account? <Link to="/signin">Sign Up</Link>
              </p>
            </Box>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Login;