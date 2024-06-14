import React from 'react';
import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';
import img6 from '../pics/chambrePics/img6.jpg';

const images = [img1, img2, img3, img4, img5, img6];

const Frame = ({ roomId, client, roomName, roomDescription, roomAdditionalities, roomCost }) => {
  const imageIndex = roomId - 1; // Assuming roomId starts from 1 and is sequential
  const image = images[imageIndex % images.length]; // Handle cases where roomId exceeds the number of images

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
          <input type="checkbox" className="me-3" />
          <label style={{ marginRight: '30px' }}><strong>petit déjeuner</strong></label>
          <input type="checkbox" className="me-3" />
          <label style={{ marginRight: '30px' }}><strong>nettoyage</strong></label>
          <input type="checkbox" className="me-3" />
          <label style={{ marginRight: '30px' }}><strong>spa</strong></label>
          <input type="checkbox" className="me-3" />
          <label style={{ marginRight: '30px' }}><strong>piscine</strong></label>
          <input type="checkbox" className="me-3" />
        </div>
        <div className="d-flex justify-content-center mt-4">
          <label style={{ marginRight: '10px' }}><strong>checkin</strong></label>
          <input type="date" className="form-control me-3" />
          <label style={{ marginRight: '10px' }}><strong>checkout</strong></label>
          <input type="date" className="form-control" />
        </div>
      </div>
    </div>
  );
};

export default Frame;
