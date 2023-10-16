import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component
import '../App.css';
import { Typography, TextField, Container, Button } from '@mui/material';

function Signin() {
  const [signUpInfo, setSignUpInfo] = useState({
    fullname: '',
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log(signUpInfo);
      const response = await Signin(signUpInfo);
      console.log('Login successful:', response);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

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
            required
            id="fullname"
            name="fullname"
            value={signUpInfo.fullname}
            onChange={handleInputChange}
          ></TextField>
        </div>
        <div className="mb-2">
          <TextField
            variant="outlined"
            margin="normal"
            label="Email"
            color="warning"
            required
            id="email"
            name="email"
            value={signUpInfo.email}
            onChange={handleInputChange}
          ></TextField>
        </div>
        <div className="mb-2">
          <TextField
            variant="outlined"
            margin="normal"
            label="Password"
            color="warning"
            required
            id="password"
            name="password"
            type="password"
            value={signUpInfo.password}
            onChange={handleInputChange}
          ></TextField>
        </div>
        <div className="d-grid">
          <Button
            variant="contained"
            color="warning"
            type="submit"
            onClick={handleSubmit}
          >
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
