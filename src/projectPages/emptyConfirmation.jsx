import React from 'react';

import { FaInbox } from "react-icons/fa";

export default function EmptyConfirmation() {
  return (
    <div style={{ height: '100vh', backgroundColor: 'grey', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <FaInbox style={{ fontSize: '600%', marginBottom: '20px' }} />
      <p style={{ fontSize: '200%' }}>Aucune réservation pour le moment</p>
    </div>
  );
};
