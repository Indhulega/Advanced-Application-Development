import React, { useState } from 'react';
import './Payment.css';

function Payment() {
  const [selectedCard, setSelectedCard] = useState('');
  const [showPopup, setShowPopup] = useState(false); 

  const handleCardChange = (event) => {
    setSelectedCard(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const form = event.target;
    const formData = new FormData(form);
    const isFormFilled = Array.from(formData.values()).every((value) => value.trim() !== '');
    if (isFormFilled) {
      setShowPopup(true);
    } else {
      alert('Please fill in all fields.');
    }
  };

  return (
    <div className="row">
      <div className="col-75">
      <h1>Payment</h1>
        <div className="container">
            
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-50">
                <h3>Customer Info</h3>
                <label htmlFor="fname"><i className="fa fa-user"></i> Full Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Enter your name" required />
                
                <label htmlFor="email"><i className="fa fa-envelope"></i> Email</label>
                <input type="text" id="email" name="email" placeholder="Enter your email" required />
                
                <label htmlFor="adr"><i className="fa fa-address-card-o"></i> Address</label>
                <input type="text" id="adr" name="address" placeholder="Enter your address" required />
               
                <label htmlFor="city"><i className="fa fa-institution"></i> City</label>
                <input type="text" id="city" name="city" placeholder="Enter your street" required />
                
                <div className="row">
                  <div className="col-50">
                    <label htmlFor="state">State</label>
                    <input type="text" id="state" name="state" placeholder="Enter your state" required />
                    
                  </div>
                  <div className="col-50">
                    <label htmlFor="zip">Zip</label>
                    <input type="text" id="zip" name="zip" placeholder="Type your pin code here" required />
                    
                  </div>
                </div>
              </div>
              <div className="col-50">
                <h3>Payment</h3>
                <label htmlFor="fname">Accepted Cards</label>
                <div className="icon-container">
                  <div>
                    <input
                      type="radio"
                      id="sbi"
                      name="card"
                      value="sbi"
                      checked={selectedCard === 'sbi'}
                      onChange={handleCardChange}
                    />
                    <label htmlFor="sbi">SBI</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="axis"
                      name="card"
                      value="axis"
                      checked={selectedCard === 'axis'}
                      onChange={handleCardChange}
                    />
                    <label htmlFor="axis">Axis</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      id="kvb"
                      name="card"
                      value="kvb"
                      checked={selectedCard === 'kvb'}
                      onChange={handleCardChange}
                    />
                    <label htmlFor="kvb">KVB</label>
                  </div>
                </div>
                <label htmlFor="cname">Name on Card</label>
                <input type="text" id="cname" name="cardname" placeholder="Enter your CARD-NAME" required />
                
                <label htmlFor="ccnum">Credit card number</label>
                <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" required />
               
                <label htmlFor="expmonth">Exp Month</label>
                <input type="text" id="expmonth" name="expmonth" placeholder="Expiry month" required />
                
                <div className="row">
                  <div className="col-50">
                    <label htmlFor="expyear">Exp Year</label>
                    <input type="text" id="expyear" name="expyear" placeholder="Year" required />
                    
                  </div>
                  <div className="col-50">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" name="cvv" placeholder="000" required />
                    
                  </div>
                </div>
              </div>
            </div>
            <input type="submit" value="Submit" className="btn" />
          </form>
        </div>
      </div>
      {/* Popup to show if payment is successful */}
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h2>Payment Successful!</h2>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Payment;
