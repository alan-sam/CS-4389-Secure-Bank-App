import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography, Box } from '@mui/material';
import '../App.css';
import logo from '../UTD.png';

const Login = () => {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const [sessionTimeout, setSessionTimeout] = useState(null);


  function sendLoginRequest() {
    setErrorMsg("");
    const reqBody = {
      email: email,
      password: password,
    };
  
    fetch("http://localhost:9000/bankingApp/login", { // Update this URL based on your Spring Boot route
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify(reqBody),
    })
      .then(async (response) => {
        const data = await response.json(); // Assuming server responds with JSON
        console.log('Response Status:', response.status);
        console.log('Login Data:', data);
  
        if (response.status === 200) {
          if(data === true) {
            navigate(`/auth?email=${email}`); // Update to navigate to the dashboard or appropriate route
            startSessionTimer();
          } else {
            setErrorMsg("Invalid username or password");
          }
        } else {
          setErrorMsg("Something went wrong, try again later.");
        }
      })
      .catch((error) => {
        console.error('Login Error:', error);
        setErrorMsg("An error occurred during login.");
      });

      const startSessionTimer = () => {
        // Clear any existing timers
        if (sessionTimeout) clearTimeout(sessionTimeout);
    
        // Set a new timer
        const timeout = setTimeout(() => {
          showLogoutWarning();
        }, 10 * 60000); // 5 minute in milliseconds
    
        // Save the timeout to state so we can clear it if needed
        setSessionTimeout(timeout);
    };
    const showLogoutWarning = () => {
      let userHasResponded = false;
      setTimeout(() => {
          if (!userHasResponded) {
              // If the user hasn't responded in 5 seconds, log them out
              navigate("/");
          }
      }, 5000); // Auto logout after 5 seconds if no response
  
      const userConfirmed = window.confirm("You will be logged out due to inactivity. Do you want to stay logged in?");
      userHasResponded = true;
  
      if (userConfirmed) {
          // If the user wants to stay logged in, reset the session timer
          startSessionTimer();
      } else {
          // If the user chose to log out, navigate to the login page
          navigate("/");
      }
  };
  
  
  
  }



  return (
    <div className="login">
      <Container component="main" maxWidth="xs">
        <div className="login-form">
          <form noValidate>
          <Box sx={{ textAlign: 'center', mb: 2 }}>
              <img src={logo} alt="Logo" width="72" />
          </Box>
            <Typography component="h1" variant="h5" color={'#f57c00'}>
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
              placeholder='Enter your email'
              value={email}
              onChange={(e) => setemail(e.target.value)}
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
              placeholder='Enter your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="button" variant="contained" color="warning" onClick={sendLoginRequest}>
              Login
            </Button>
          </form>
          <Box className="login-link">
            <p>
              Don't have an account? <Link to="/signin">Sign Up</Link>
            </p>
          </Box>
            <Link to="/dashboard/account">Dashboard</Link>
         
        </div>
      </Container>
    </div>
  );
}

export default Login;
