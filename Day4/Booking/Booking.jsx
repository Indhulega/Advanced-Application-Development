import React, { useState } from 'react';
import './Booking.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';

function Booking() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [venue, setVenue] = useState('');
  const [colorTheme, setColorTheme] = useState('');
  const [food, setFood] = useState('');
  const [booth, setBooth] = useState('');
  const [bar, setBar] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !phoneNumber || !email || !venue || !colorTheme || !food || !booth || !bar) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/eventdetails/posteventdetails', {
        name,
        phoneNumber,
        email,
        venue,
        colorTheme,
        food,
        booth,
        bar,
      });

      alert('Event booking successful!');
    } catch (error) {
      console.error('Event booking failed:', error);
      alert('Event booking failed. Please try again later.');
    }
  };

  return (
    <div className='vol'>
        <NavBar/>
    <div className='event-management'>
       
      <div className="booking-container">
        <h1>Book Your Event</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              required
            />
          </label>
          <label>
            Phone Number
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              name="phoneNumber"
              required
            />
          </label>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
              required
            />
          </label>
          <label>
            Venue
            <select value={venue} onChange={(e) => setVenue(e.target.value)} required>
              <option value="">Select Venue</option>
              <option value="Grand Vista Hall">Grand Vista Hall</option>
              <option value="Elite Pavilion">Elite Pavilion</option>
              <option value="SkyLounge Terrace">SkyLounge Terrace</option>
            </select>
          </label>
          <label>
            Color Theme
            <select value={colorTheme} onChange={(e) => setColorTheme(e.target.value)} required>
              <option value="">Select Color Theme</option>
              <option value="Tangerine and Turquoise">Tangerine and Turquoise</option>
              <option value="Violet and Dusty Rose">Violet and Dusty Rose</option>
              <option value="Neutral">Neutral</option>
            </select>
          </label>
          <label>
            Food
            <select value={food} onChange={(e) => setFood(e.target.value)} required>
              <option value="">Select Food cuisine</option>
              <option value="Non-veg">Non-veg</option>
              <option value="Veg">Veg</option>
            </select>
          </label>
          <label>
            Booth
            <select value={booth} onChange={(e) => setBooth(e.target.value)} required>
            <option value="">Select booth</option>
              <option value="Selfie Booth">Selfie Booth</option>
              <option value="Selfie 360">Selfie 360</option>
              <option value="none">none</option>
            </select>
          </label>
          <label>
            Party Bar
            <select value={bar} onChange={(e) => setBar(e.target.value)} required>
              <option value="">Select party bar</option>
              <option value="Drinks">Drinks</option>
              <option value="Drinks and dj">Drinks and dj</option>
              <option value="none">none</option>
            </select>
          </label>
          
          <Link to='/payment'><button type="submit">Submit</button></Link>
        </form>
      </div>
      </div>
    </div>
  );
}

export default Booking;
