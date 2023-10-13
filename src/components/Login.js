import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { login } from '../api';
import UTDImage from '../UTD.png';
import { Button } from '@mui/material';


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
    <div className='login'>
        <form>
        {/* <div className='img'>
          <img src={UTDImage} alt="UTD Logo" />
        </div> */}
            <h3>Login</h3>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' value={formData.email} onChange={handleInputChange} placeholder='Enter your email address' className='form-control' required/>
            </div>
            <div className='mb-2'>  
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' value={formData.password} onChange={handleInputChange} placeholder='Enter your password' className='form-control' required/>
            </div>
            <div className='d-grid'>
                   
                    <Button variant="contained">Contained</Button>
                    
            </div>
            <div className='d-grid'>
                <Link to = "/dashboard" className='btn btn-primary' >new</Link>
            </div>
            <div className='signlink'>
            <p>
              Don't have an account? <Link to="/signin"><span>Sign Up</span></Link>
            </p>
            </div>
        </form>
    </div>
  );
}

export default Login;
