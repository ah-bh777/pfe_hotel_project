import React from 'react';
import { useLocation } from 'react-router-dom';

const ConfirmationPage = () => {
  const location = useLocation();
  const reservationData = location.state?.reservationData || [];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Reservation Confirmation</h1>
      {reservationData.map((room, index) => (
        <div key={index} style={{ marginBottom: '20px', border: '1px solid #ccc', borderRadius: '10px', padding: '10px' }}>
          <p><strong>Room ID:</strong> {room.id}</p>
          <p><strong>Start Date:</strong> {room.start_date}</p>
          <p><strong>End Date:</strong> {room.end_date}</p>
          <p><strong>Services:</strong> {room.services.join(', ')}</p>
        </div>
      ))}
    </div>
  );
};

export default ConfirmationPage;
