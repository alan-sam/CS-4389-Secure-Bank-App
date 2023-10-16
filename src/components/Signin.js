import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../App.css';
import { Typography, TextField, Container, Button } from '@mui/material';

function Signin() {
  return (
    <div className="signin">
      <Container>
        <Typography component="h1" variant="h5" color={'#f57c00'}>
          SignUp
        </Typography>
        <div className="mb-2">
          <TextField
            variant="outlined"
            margin="normal"
            label="FullName"
            color="warning"
            id="fullname"
            name="fullname"
          ></TextField>
        </div>
        <div className="mb-2">
          <TextField
            variant="outlined"
            margin="normal"
            label="Email"
            color="warning"
            id="email"
            name="email"
          ></TextField>
        </div>
        <div className="mb-2">
          <TextField
            variant="outlined"
            margin="normal"
            label="Password"
            color="warning"
            id="password"
            name="password"
          ></TextField>
        </div>
        <div className="d-grid">
          <Button variant="contained" color="warning">
            Sign Up
          </Button>
        </div>
        <div className="signlink">
          <p>
            Don't have an account?{' '}
            <Link to="/">
              <span>Login</span>
            </Link>
          </p>
        </div>
      </Container>
    </div>
  );
}

export default Signin;
