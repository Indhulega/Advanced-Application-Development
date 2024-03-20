import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './SignUp.css';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileno: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
 // const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignUp = async () => {
    const { username, email, password, mobileno } = formData;

    if (!username || !email || !password || !mobileno) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    if (!validateMobileNumber(mobileno)) {
      setErrorMessage('Please enter a valid mobile number (e.g., 1234567890).');
      return;
    }

    try {
      await axios.post('http://localhost:8080/auth/register', {
        username,
        emailid: email,
        password,
        mobileno,
      });

     
     
     // navigate('/'); 
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateMobileNumber = (mobileno) => {
    const re = /^\d{10}$/;
    return re.test(mobileno);
  };

  return (
    <div className="signup-page">
      <div className="signup-image-container">
        <img
          src={'https://images.unsplash.com/photo-1530023367847-a683933f4172?q=80&w=2912&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt="Signup"
        />
      </div>
      <div className="signup-main-box">
        <div className="signup-container">
          <h1>SIGN UP</h1>
          <div className="signup-box">
            <div className="signup-username-box">
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Username"
                required
              />
            </div>
            <div className="signup-username-box">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="signup-username-box">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="signup-username-box">
              <input
                type="text"
                name="mobileno"
                value={formData.mobileno}
                onChange={handleInputChange}
                placeholder="Mobile Number"
                required
              />
            </div>
            <p className="error-message">{errorMessage}</p>
            <div className="signup-button-box-outer">
              <div className="signup-button-box">
                <button onClick={handleSignUp}>Sign Up</button>
              </div>
              <div className="already">
                <p>Already have an account?</p>
                <Link to='/login'><p>Login</p></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
