import React, { useEffect, useState } from 'react';
import picture from "./R.jpg";
import picture1 from "./img2.jpg";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useSelector } from 'react-redux';
import Frame from './frame';

export default function ResConfirmation() {
  const [myValue, setMyValue] = useState();
  const roomIds = useSelector(data => data.etatDeUtilisateur.room);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('theObjToken'));
    if (storedToken) {
      setMyValue(storedToken);
    }
  }, []);

  return (
    <div style={{ height: '100vh', backgroundColor: 'grey', padding: '30px', textAlign: 'center' }}>
      {roomIds.map(roomId => (
        <Frame key={roomId} roomId={roomId} name={myValue?.client?.nomClient} />
      ))}
    </div>
  );
}
