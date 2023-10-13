import React from 'react'
import { Link } from 'react-router-dom'; // Import the Link component
import '../App.css';

function Signin() {
  return (
    <div className='signin'>
    <form>
            <h3>SignUp</h3>
            <div className='mb-2'>  
            <label htmlFor='name'>Full Name</label>
            <input type='text' placeholder='FullName' className='form-control' required/>
            </div>
            <div className='mb-2'>
                <label htmlFor='email'>Email</label>
                <input type='email' placeholder='Enter your email address' className='form-control' required/>
            </div>
            <div className='mb-2'>  
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter your password' className='form-control' required/>
            </div>
            <div className='d-grid'>
                <button className='btn btn-primary'>SignUp</button>
            </div>
            <div className='signlink'>
            <p>
              Don't have an account? <Link to="/"><span>Login</span></Link>
            </p>
            </div>
        </form>
        </div>
  )
}

export default Signin