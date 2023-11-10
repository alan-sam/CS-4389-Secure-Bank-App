import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { useNavigate } from "react-router-dom";
import { Typography, TextField, Container, Button, Box } from '@mui/material';
import logo from '../UTD.png';

function Signin() {
    const navigate = useNavigate();
    const [signUpInfo, setSignUpInfo] = useState({
        fullName: '',
        email: '',
        password: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSignUpInfo(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Sending signup data:', signUpInfo);
        
        try {
            const response = await fetch("http://localhost:9000/bankingApp/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(signUpInfo)
            });
            
            if (response.status === 201) { // Check for 'Created' status
                console.log('SignUp successful');
                navigate("/"); // Adjust as per your routing logic
            } else {
                const responseData = await response.text();
                console.error('Signup error:', responseData);
            }
        } catch (error) {
            console.error('An error occurred:', error);
        }
    };

    return (
        <div className="signin">
            <Container>
                <Box sx={{ textAlign: 'center', mb: 2 }}>
                    <img src={logo} alt="Logo" width="72" />
                </Box>
                <Typography component="h1" variant="h5" color={'#f57c00'}>
                    SignUp
                </Typography>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            label="FullName"
                            color="warning"
                            required
                            id="fullName"
                            name="fullName"
                            value={signUpInfo.fullName}
                            onChange={handleInputChange}
                        />
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
                        />
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
                        />
                    </div>
                    <div className="d-grid">
                        <Button
                            variant="contained"
                            color="warning"
                            type="submit"
                        >
                            Sign Up
                        </Button>
                    </div>
                </form>
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
