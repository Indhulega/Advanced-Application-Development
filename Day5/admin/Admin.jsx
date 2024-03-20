import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Admin.css';

function Admin() {
  const [activeTab, setActiveTab] = useState('Packages');

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className="admin-dashboard">
        
      <div className="sidebar">
        <button className={activeTab === 'Packages' ? 'active' : ''} onClick={() => handleTabClick('Packages')}>Packages</button>
        <button className={activeTab === 'Venues' ? 'active' : ''} onClick={() => handleTabClick('Venues')}>Venues</button>
        
      </div>
      <div className="main-content">
        {activeTab === 'Packages' && <PackagesTab />}
        {activeTab === 'Venues' && <VenuesTab />}
       
      </div>
    </div>
  );
}

function BarGraph({ data, dataKey, color }) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey={dataKey} fill={color} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function PackagesTab() {
  const [packages, setPackages] = useState([
    { id: 1, name: 'Birthday', bookings: 5 },
    { id: 2, name: 'Wedding', bookings: 8 },
    { id: 3, name: 'Corporate Event', bookings: 3 }
  ]);
  const handleInsert = () => {
    const newId = packages.length + 1;
    const newPackage = {
      id: newId,
      name: '',
      bookings: 0
    };
    setPackages([...packages, newPackage]);
  };
  const handleDelete = (id) => {
    setPackages(packages.filter((pkg) => pkg.id !== id));
    console.log(`Deleting package with id: ${id}`);
  };

  return (
    <div>
      <div className="main-page">
      <h1>Admin Dashboard</h1>
        <h2>Packages</h2>
        <div className="graph-container">
          <h3>Bookings of Each Package</h3>
          <BarGraph data={packages} dataKey="bookings" color="#8884d8" />
        </div>
        <button onClick={handleInsert}>Add Package</button>
        <table className="package-table">
          <thead>
            <tr>
              <th>Package Name</th>
              <th>Bookings</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {packages.map((pkg) => (
              <tr key={pkg.id}>
                <td>{pkg.name}</td>
                <td>{pkg.bookings}</td>
                <td>
                  <button onClick={() => handleUpdate(pkg.id)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(pkg.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function VenuesTab() {
  const [venues, setVenues] = useState([
    { id: 1, name: 'Grand Vista Hall', bookings: 5 },
    { id: 2, name: 'Elite Pavilion', bookings: 7 },
    { id: 3, name: 'SkyLounge Terrace', bookings: 3 }
  ]);
  const handleInsert = () => {
    const newId = venues.length + 1;
    const newVenue = {
      id: newId,
      name: '',
      bookings: 0
    };
    setVenues([...venues, newVenue]);
  };

  const handleDelete = (id) => {
    setVenues(venues.filter((venue) => venue.id !== id));
    console.log(`Deleting venue with id: ${id}`);
  };

  const handleUpdate = (id) => {
    // Update logic here
    console.log(`Updating venue with id: ${id}`);
  };

  return (
    <div>
      <div className="main-page">
      <h1>Admin Dashboard</h1>
        <h2>Venues</h2>
        <div className="graph-container">
          <h3>Bookings of Each Venue</h3>
          <BarGraph data={venues} dataKey="bookings" color="#82ca9d" />
        </div>
        <button onClick={handleInsert}>Add Venue</button>
        <table className="venue-table">
          <thead>
            <tr>
              <th>Venue Name</th>
              <th>Bookings</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {venues.map((venue) => (
              <tr key={venue.id}>
                <td>{venue.name}</td>
                <td>{venue.bookings}</td>
                <td>
                  <button onClick={() => handleUpdate(venue.id)}>Update</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(venue.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function ThemesTab() {
  return (
    <div>
      <div className="main-page">
        <h2>Themes</h2>
        {/* Add your content for Themes tab here */}
      </div>
    </div>
  );
}

export default Admin;
