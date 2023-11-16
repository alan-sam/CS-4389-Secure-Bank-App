import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Button, TextField, Container, Typography, Box } from '@mui/material';

const EmailTokenAuth = () => {
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Generate a random 6-digit number as a token
    const simulatedToken = Math.floor(100000 + Math.random() * 900000).toString();
    localStorage.setItem('simulatedAuthToken', simulatedToken);
    console.log("Generated Token:", simulatedToken); // we have the token in the console press f12 or inspect and go to console.
  }, []);

  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  const handleTokenVerification = () => {
    const storedToken = localStorage.getItem('simulatedAuthToken');
    
    if (token === storedToken) {
      navigate('/dashboard/account');
      localStorage.removeItem('simulatedAuthToken'); // Clear the token after use
    } else {
      alert("Invalid or expired token.");
    }
  };

  return (
    <div className="auth">
      <Container component="main" maxWidth="xs">
        <div className="auth-box">
          <form noValidate>
            <Box sx={{ textAlign: 'center', mb: 2 }}>
              {/* Uncomment and add your logo if necessary */}
              {/* <img src={logo} alt="Logo" width="72" /> */}
            </Box>
            <Typography component="h1" variant="h5" color={'#f57c00'}>
              Enter Token
            </Typography>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="token"
              label="Token"
              type="password"
              id="token"
              value={token}
              onChange={handleTokenChange}
            />
            <Button
              type="button"
              variant="contained"
              color="primary"
              onClick={handleTokenVerification}
            >
              Verify Token
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default EmailTokenAuth;
