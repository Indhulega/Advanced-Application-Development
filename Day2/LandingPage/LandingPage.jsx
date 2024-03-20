import React from 'react';
import { Link } from 'react-router-dom'; 
import './LandingPage.css';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

function LandingPage() {
  return (
    <div className="main-page">
      <NavBar/>
      <div className="header">
        <h1>Where every flavor tells a story.</h1>
     
        <Link to="/booking" className="donate-button">Book now!</Link>
      </div>
      <div className="featured-projects">
        <h2 className='pro'>Featured Events</h2>
        <div className='projects'>
        <Link to='/booking'><div className="project-card">
            <img src={'https://img.freepik.com/premium-photo/pet-dog-table-as-girl-with-parents-friends-celebrate-birthday-party-home_562859-2384.jpg'} alt="Project 1" />
            <h3>BIRTHDAY</h3>
            <p>"Birthdays are not just milestones; they're moments of joy, laughter, and cherished memories. Join us in celebrating life's greatest gift with cake, confetti, and a whole lot of fun! Dive into a world where every birthday is a special occasion, filled with warmth, love, and unforgettable moments. Let's make your next birthday the talk of the town – because at our website, every birthday is an extraordinary adventure waiting to happen!"</p>
          </div></Link>
          <Link to='/booking'> <div className="project-card">
            <img src={'https://hips.hearstapps.com/hmg-prod/images/wedding-instgram-captions-happy-bride-and-groom-647faa335c597.jpeg'} alt="Project 2" />
            <h3>WEDDING</h3>
            <p>"For us, weddings are more than just ceremonies; they're magical journeys filled with love, romance, and dreams come true. Step into a world where every detail is meticulously crafted, every moment is cherished, and every love story is celebrated in style. Whether you're planning a grand affair or an intimate gathering, we're here to turn your wedding dreams into reality. From stunning venues to exquisite decorations, let us be your partner in creating memories that will last a lifetime. Say 'I do' to an unforgettable wedding experience with us!"</p>
          </div></Link>
          <Link to='/booking'><div className="project-card">
            <img src={'https://res.cloudinary.com/everfi/images/f_auto,q_auto/v1615811319/CSR/CSR.jpg?_i=AA'} alt="Project 3" />
            <h3>CORPORATE EVENT</h3>
            <p>"Step into excellence with us. From flawless logistics to impactful experiences, we deliver success tailored to your brand. Trust us to elevate your business gatherings with seamless professionalism and lasting impressions.".</p>
          </div></Link>
        </div>
      </div>
      <div className="latest-articles">
        <h3>Empowering Celebrations with Care and Community Involvement!</h3>
        <p>We believe in the power of local connections in crafting unforgettable events. By collaborating with local vendors and enthusiasts, we build a network of support that guarantees every celebration is a memorable success.</p>
        
      </div>
      <Footer/>
    </div>
  );
}

export default LandingPage;
