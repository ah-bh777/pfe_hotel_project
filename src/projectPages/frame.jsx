import React from 'react';
import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';
import img6 from '../pics/chambrePics/img6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Frame = ({ frameData, client, roomName, roomDescription, roomAdditionalities, roomCost, onInputChange }) => {
  const imageIndex = frameData.roomId - 1;
  const image = images[imageIndex % images.length];

  const handleChange = (field, value) => {
    onInputChange(frameData.roomId, field, value);
  };

  return (
    <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '10px', marginBottom: '20px' }}>
      <img src={image} alt="Room Image" style={{ maxWidth: '30%', maxHeight: '100%', objectFit: 'cover', marginRight: '20px' }} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '20px' }}>
            <p><strong>Nom:</strong> {client?.nomClient}</p>
            <p><strong>Prénom:</strong> {client?.prenomClient}</p>
            <p><strong>Email:</strong> {client?.email}</p>
          </div>
          <div>
            <p><strong>Type de chambre:</strong> {roomName}</p>
            <p><strong>Additionalities:</strong> {roomAdditionalities}</p>
            <p><strong>Coût par nuit:</strong> {roomCost}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center mt-4">
          <label style={{ marginRight: '30px' }}><strong>wifi</strong></label>
          <input type="checkbox" className="me-3" checked={frameData.wifi} onChange={(e) => handleChange('wifi', e.target.checked)} />
          <label style={{ marginRight: '30px' }}><strong>petit déjeuner</strong></label>
          <input type="checkbox" className="me-3" checked={frameData.breakfast} onChange={(e) => handleChange('breakfast', e.target.checked)} />
          <label style={{ marginRight: '30px' }}><strong>nettoyage</strong></label>
          <input type="checkbox" className="me-3" checked={frameData.cleaning} onChange={(e) => handleChange('cleaning', e.target.checked)} />
          <label style={{ marginRight: '30px' }}><strong>spa</strong></label>
          <input type="checkbox" className="me-3" checked={frameData.spa} onChange={(e) => handleChange('spa', e.target.checked)} />
          <label style={{ marginRight: '30px' }}><strong>piscine</strong></label>
          <input type="checkbox" className="me-3" checked={frameData.pool} onChange={(e) => handleChange('pool', e.target.checked)} />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <label style={{ marginRight: '10px' }}><strong>checkin</strong></label>
          <input type="date" className="form-control me-3" value={frameData.checkin} onChange={(e) => handleChange('checkin', e.target.value)} />
          <label style={{ marginRight: '10px' }}><strong>checkout</strong></label>
          <input type="date" className="form-control" value={frameData.checkout} onChange={(e) => handleChange('checkout', e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default Frame;
