import React, { useState } from 'react';
import './Profile.css';
import NavBar from '../NavBar/NavBar';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Indhulega',
    email: 'indhu@gmail.com',
    mobileNumber: '9487423696'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Save logic, e.g., send updated user info to backend
    console.log('Updated user information:', userInfo);
    setIsEditing(false);
  };

  return (
    <div className="profile-page">
        <NavBar/>
      <div className="profile-details">
        <h1>User Information</h1>
        {isEditing ? (
          <>
            <p>Name: <input type="text" name="name" value={userInfo.name} onChange={handleInputChange} /></p>
            <p>Email: <input type="text" name="email" value={userInfo.email} onChange={handleInputChange} /></p>
            <p>Mobile Number: <input type="text" name="mobileNumber" value={userInfo.mobileNumber} onChange={handleInputChange} /></p>
            <button onClick={handleSaveClick}>Save</button>
          </>
        ) : (
          <>
            <p>Name: {userInfo.name}</p>
            <p>Email: {userInfo.email}</p>
            <p>Mobile Number: {userInfo.mobileNumber}</p>
            <button onClick={handleEditClick}>Edit</button>
          </>
        )}
      </div>
      <div className="background-image"></div>
    </div>
  );
};

export default Profile;
