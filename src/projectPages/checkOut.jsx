import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';
import img6 from '../pics/chambrePics/img6.jpg';

const selectRoomImage = (roomId) => {
  switch (roomId) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    case 5:
      return img5;
    case 6:
      return img6;
    default:
      return img1;
  }
};

const Checkout = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory
  const { state } = useLocation();
  const { rooms, total } = state || { rooms: [], total: 0 };

  const [cardType, setCardType] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardHolder, setCardHolder] = useState('');
  const [expires, setExpires] = useState('');
  const [cvc, setCvc] = useState('');

  const handlePayment = () => {
    // Simulate payment logic
    setTimeout(() => {
      // Navigate to home page after successful payment
      navigate('/FrontPage/home');
      
      // Force refresh the page
      window.location.reload();
    }, 1000); // Simulating a delay for payment processing
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', background: 'white', padding: '20px' }}>
      <div style={{ maxWidth: '800px', background: '#fff', boxShadow: '0px 15px 50px 10px rgba(0, 0, 0, 0.2)', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <h2 style={{ fontWeight: '200', fontSize: '1.5rem', marginBottom: '20px' }}>Order Summary</h2>
        {rooms.map((room, index) => (
          <div key={index} style={{ width: '100%', display: 'flex', marginBottom: '20px', borderBottom: '1px solid #ddd' }}>
            <div style={{ flex: '0 0 200px', marginRight: '20px' }}>
              <img src={selectRoomImage(room.id)} alt={room.type} style={{ width: '100%', height: '90%', borderRadius: '10px' }} />
            </div>
            <div style={{ flex: '1' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <div>
                  <p><span style={{ fontWeight: 'bold' }}>Room Type:</span> {room.type}</p>
                  <p><span style={{ fontWeight: 'bold' }}>Amenities:</span> {room.additionalities}</p>
                </div>
                <div>
                  <p><span style={{ fontWeight: 'bold' }}>Cost per Night:</span> ${room.cost_per_night}</p>
                  <p><span style={{ fontWeight: 'bold' }}>Total:</span> ${room.total}</p>
                </div>
              </div>
              <h3>Services:</h3>
              <ul>
                {room.services.map(service => (
                  <li key={service.id}><span style={{ fontWeight: 'bold' }}>{service.name}:</span> ${service.cost}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className='total' style={{ display: 'flex', justifyContent: 'space-between', width: '100%', borderTop: '1px solid #ddd', marginTop: '20px', paddingTop: '20px', marginBottom: '20px' }}>
          <div style={{ flex: '1' }}>
            TOTAL
          </div>
          <div style={{ textAlign: 'right', flex: '1' }}>
            ${total}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: '800px', background: 'black', boxShadow: '0px 15px 50px 10px rgba(0, 0, 0, 0.2)', borderRadius: '30px', padding: '20px', marginTop: '20px', width: '100%' }}>
        <h2 style={{ fontWeight: '200', fontSize: '1.5rem', color: 'white', marginBottom: '20px' }}>Payment Form</h2>
        <div className="checkout-form" style={{ color: 'white' }}>
          <div className="form-group">
            <label htmlFor="cardType">Select your card:</label>
            <select className="form-control" id="cardType" value={cardType} onChange={(e) => setCardType(e.target.value)}>
              <option>Visa</option>
              <option>Master Card</option>
              <option>American Express</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" className="form-control" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="cardHolder">Card Holder:</label>
            <input type="text" className="form-control" id="cardHolder" value={cardHolder} onChange={(e) => setCardHolder(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="expires">Expires:</label>
            <input type="text" className="form-control" id="expires" value={expires} onChange={(e) => setExpires(e.target.value)} />
          </div>
          <div className="form-group">
            <label htmlFor="cvc">CVC:</label>
            <input type="text" className="form-control" id="cvc" value={cvc} onChange={(e) => setCvc(e.target.value)} />
          </div>
          <button className='btn btn-primary' onClick={handlePayment}>Pay</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
