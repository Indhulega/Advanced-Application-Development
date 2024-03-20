import React from 'react';
import './Theme.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


function Theme() {
  return (

    
    <div className="main-page">
        <NavBar/>
      
      <div className="featured-projects">
        <h2 className='pro'></h2>
        <div className='projects'>
        <Link to='/booking'> <div className="project-card">
            <img src={'https://i.pinimg.com/736x/79/99/b9/7999b9f02b811348027681250a510330.jpg'} alt="Project 1" />
            <h3>"Tangerine and Torquoise"</h3>
            <h4>₹40,000 to ₹1,00,000 </h4>
            
          </div></Link>
          <Link to='/booking'> <div className="project-card">
                <img src={'https://i.pinimg.com/736x/02/9e/94/029e94e9cafd1f736b8ea4b59a3d27a5.jpg'} alt="Project 2" />
                <h3>"Violet AND DUSTY ROSE"</h3>
                <h4>₹40,000 to ₹80,000 </h4>
              </div></Link>
              <Link to='/booking'> <div className="project-card">
                <img src={'https://i.pinimg.com/736x/c5/f2/9a/c5f29ab74f5b9fd07fdc86dac848d6ba.jpg'} alt="Project 3" />
                <h3>"NEUTRAL"</h3>
                <h4>₹60,000 to ₹1,00,000 </h4>
              </div></Link>
              
              
        </div>
      </div>
      <div className="latest-articles">
        <h3>Empowering Celebrations with Care and Community Involvement!</h3>
        
      </div>
    </div>
  );
}

export default Theme;
