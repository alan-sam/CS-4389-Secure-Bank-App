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

  function sendLoginRequest() {
    setErrorMsg("");
    const reqBody = {
      email: email,
      password: password,
    };
  
    fetch("http://localhost:8080/bankingApp/login", {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify(reqBody),
    })
      .then(async (response) => {
        const data = await response.json(); // Assuming the server responds with JSON data
        console.log('Response Status:', response.status);
        console.log('Login Data:', data);
    
        if (response.status === 200 && data === true) {
          navigate("/dashboard");
        } else if (response.status === 200 && data === false) {
          setErrorMsg("Invalid username or password");
        } else if (response.status === 401 || response.status === 403) {
          setErrorMsg("Invalid username or password");
        } else {
          setErrorMsg("Something went wrong, try again later.");
        }
      })
      .catch((error) => {
        console.error('Login Error:', error);
      });
  }
  
  // const validCredentials = [
  //   { email: 'alan@gmail.com', password: '112' },
    
  //   // Add more credentials as needed
  //   { email: 'rajas2.kothari@gmail.com', password: 'password2'},
  // ];

  // function sendLoginRequest() {
  //   setErrorMsg("");

  //   // Check if the provided email and password match any of the valid credentials
  //   const isValid = validCredentials.some(cred => cred.email === email && cred.password === password);

  //   if (isValid) {
  //     navigate("/dashboard");
  //   } else {
  //     setErrorMsg("Incorrect username or password");
  //   }
  // }


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
          {/* <Button variant="contained" color="warning">
            <Link to="/dashboard">Dashboard</Link>
          </Button> */}
        </div>
      </Container>
    </div>
  );
}

export default Login;
