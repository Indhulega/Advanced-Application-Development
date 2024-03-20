import React from 'react';
import './Venue.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';


function Venue() {
  return (

    
    <div className="main-page">
       
      <NavBar/>
      <div className="featured-projects">
        <h2 className='pro'></h2>
        <div className='projects'>
        <Link to='/booking'> <div className="project-card">
            <img src={'https://thumbs.dreamstime.com/b/large-banquet-hall-decorated-social-event-served-tables-stage-background-large-lighted-banquet-hall-decorated-248976489.jpg'} alt="Project 1" />
            <h3>"Grand Vista Hall"-₹2,00,000/day</h3>
            <p>"Grand Vista Hall offers ample space to comfortably accommodate gatherings of up to 1500 attendees, providing an ideal venue for large-scale events, conferences, ceremonies, and celebrations. With its expansive layout and versatile facilities, Grand Vista Hall ensures that every guest enjoys a spacious and memorable experience.""</p>
          </div></Link>
          <Link to='/booking'><div className="project-card">
                <img src={'https://lh3.googleusercontent.com/P_WczRU36EbcsLy5VRaZm9FG1zas7RPnLoZbzS5-Gq2nDc77jqNBUT3AaAC08UQS_xyaclPcoGeAzhlFei15nxIV=w961-h641-l80-e31'} alt="Project 2" />
                <h3>"Elite Pavilion"-₹1,00,000/day</h3>
                <p>"Introducing Elite Pavilion, an exclusive setting tailored for intimate gatherings of up to 100 guests. Despite its compact size, Elite Oasis Pavilion exudes sophistication and charm, offering a refined ambiance for small weddings, executive meetings, private receptions, and intimate ceremonies. With its elegant décor and attentive service, Elite  Pavilion promises a memorable and upscale experience, ensuring luxury and comfort for you and your esteemed guests."!"</p>
              </div></Link>
              <Link to='/booking'> <div className="project-card">
                <img src={'https://media.timeout.com/images/105772937/750/422/image.jpg'} alt="Project 3" />
                <h3>"SkyLounge Terrace"-50,000/day</h3>
                <p>"Welcome to SkyLounge Terrace, where the skyline meets sophistication. Perched atop the city, our rooftop venue offers breathtaking views and an unparalleled atmosphere for your special occasions. With a capacity of up to 150 guests, SkyLounge Terrace is the perfect setting for chic cocktail parties, romantic dinners, lively receptions, and memorable social gatherings. Elevate your event experience with our stylish décor, delectable cuisine, and impeccable service, all under the open sky at SkyLounge Terrace."".</p>
              </div></Link>
              
              
        </div>
      </div>
      <div className="latest-articles">
        <h3>Empowering Celebrations with Care and Community Involvement!</h3>
        <p>We believe in the power of local connections in crafting unforgettable events. By collaborating with local vendors and enthusiasts, we build a network of support that guarantees every celebration is a memorable success.</p>
        {/* Other paragraphs go here */}
      </div>
    </div>
  );
}

export default Venue;
