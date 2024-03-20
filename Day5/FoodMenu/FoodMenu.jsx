import React from 'react';
import './FoodMenu.css';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';



function FoodMenu() {
  return (

    
    <div className="fmain-page">
       
      <NavBar/>
      <div className="ffeatured-projects">
        
        <div className='fprojects'>
        <Link to='/booking'>  <div className="fproject-card">
            <img src={'https://www.bhmpics.com/downloads/indian-food-images-Wallpapers/6.various-indian-dishes-featuring-rogan-josh-chicken-tikka-masala-biryani-tandoori-chicken.jpg'} alt="Project 1" />
            <h3>NON-VEG</h3>
            <h4>₹40,000 to ₹80,000 </h4>
            <p>'Chicken Biryani'<br></br>
      'Mutton Rogan Josh'<br></br>
      'Butter Chicken'<br></br>
      'Chicken Tikka Masala'<br></br>
      'Fish Curry'<br></br>
      'Beef Stew'</p>
      
          </div></Link>
          <Link to='/booking'> <div className="fproject-card">
                <img src={'https://t4.ftcdn.net/jpg/06/03/15/77/360_F_603157700_vyoeoK6tila5D9fB7VdbQr4mAY1to9zJ.jpg'} alt="Project 2" />
                <h3>VEGAN</h3>
                <h4>₹40,000 to ₹60,000 </h4>
                <p>'Vegetable Biryani'<br></br>
      'Paneer Tikka'<br></br>
      'Dal Makhani'<br></br>
      'Palak Paneer'<br></br>
      'Aloo Gobi'<br></br>
      'Chana Masala'</p>
              </div></Link>
              <Link to='/booking'>  <div className="fproject-card">
                
            <img src={'https://homafy.com/wp-content/uploads/2024/01/wedding-selfie-booth-1.jpeg'} alt="Project 1" />
            <h3>SELFIE BOOTH</h3>
            <h4>₹20,000</h4>
            
      
          </div></Link>
          <Link to='/booking'> <div className="fproject-card">
                <img src={'https://images.squarespace-cdn.com/content/v1/58669c64197aea52832c9a2e/4231919f-38af-4745-9018-6d106c4e2b42/360-video-photo-booth-rental-illinois.jpg'} alt="Project 2" />
                <h3>SELFIE 360</h3>
                <h4>₹40,000 </h4>
                
              </div></Link>
              <Link to='/booking'>  <div className="fproject-card">
            <img src={'https://www.theknot.com/tk-media/images/28d95138-1b84-47f3-a885-1c231a03b787'} alt="Project 1" />
            <h3>Drinks</h3>
            <h4>₹80,000 </h4>
            
      
          </div></Link>
          <Link to='/booking'> <div className="fproject-card">
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQelxxniVJpA41BUw_ovty0cgJM5iHbV8TxL2KrNahJcsu1EC6j6ss-TDpllNPVmo9NyaA&usqp=CAU'} alt="Project 2" />
                <h3>Drinks and Dj</h3>
                <h4>₹1,00,000 </h4>
                
              </div></Link>
              
              
        </div>
      </div>
      <div className="flatest-articles">
        <h3>Empowering Celebrations with Care and Community Involvement!</h3>
        <p>We believe in the power of local connections in crafting unforgettable events. By collaborating with local vendors and enthusiasts, we build a network of support that guarantees every celebration is a memorable success.</p>
        
      </div>
    </div>
  );
}

export default FoodMenu;
