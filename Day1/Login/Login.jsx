import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import './Login.css'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
   

    e.preventDefault();
    
    if (!email || !password) {
      setError('Email and password cannot be empty');
      return;
    }
    if (email === 'admin@gmail.com' && password === 'adminpassword') {
      console.log("Admin login successful");
      
      navigate('/admin');
      return;
    }

    
    

    

    navigate('/'); 
  };

  return (
    <div className='signup-page'>
      <div className='signup-image-container'>
        <img src={'https://wedinstyle.vn/wp-content/uploads/2020/02/MIRRORWEDDING-PHOTOGRAPHER-DESTINATION-WEDDING-ELEGANT-SUITES-WESTLAKE-HANOI-NAM-PHUONG-ANH-30161338_websize-1030x686.jpg'} height={740} width={1450} alt="Login Image" />
      </div>

      <div className='signup-main-box'>
        <div className='signup-container'>
          <h1 className='text29'>LOGIN</h1>
          <div className='signup-box'>
            <div className='signup-username-box'>
              <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className='signup-username-box'>
              <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            {error && <div className='error'>{error}</div>}
            <button type="submit" onClick={handleLogin}>LOGIN</button>
            <div className='goto'>
              <p>Don't have an account?<Link to='/signup'>SignUp</Link></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
