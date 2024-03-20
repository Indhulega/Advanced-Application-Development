import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from "./logo.svg";
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          
        <Link to='/'> <img src={Image} alt="Logo" /></Link>
          
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            
             <Link to='/package'>Packages</Link>
            
          </li>
          <li className="nav-item">
            
          <Link to='/venue'>Venue</Link>
           
          </li>
          <li className="nav-item">
            
          <Link to='/theme'>Theme</Link>
           
          </li>
          <li className="nav-item">
            
            <Link to='/food'>Others</Link>
             
            </li>
            <li className="nav-item">
            
            <Link to='/profile'>Profile</Link>
             
            </li>
            
          <li className="nav-item">
            
          <Link to='/login'>Login</Link>
            
          </li>
          
        </ul>
        <div className="nav-icon" onClick={handleClick}>
          <FontAwesomeIcon icon={click ? faTimes : faBars} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
