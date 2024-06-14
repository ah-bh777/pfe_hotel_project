import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Frame from './frame';

export default function ResConfirmation() {
  const [myValue, setMyValue] = useState();
  const [rooms, setRooms] = useState([]);
  const roomIds = useSelector(data => data.etatDeUtilisateur.room);

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('theObjToken'));
    if (storedToken) {
      setMyValue(storedToken);
    }

    // Fetch room data from the API
    axios.get('http://127.0.0.1:8000/api/rooms')
      .then(response => {
        console.log('API response:', response.data);
        if (Array.isArray(response.data.rooms)) {
          setRooms(response.data.rooms);
        } else {
          console.error('Expected an array, but got:', response.data.rooms);
        }
      })
      .catch(error => {
        console.error('Error fetching room data:', error);
      });
  }, []);

  const selectedRooms = rooms.filter(room => roomIds.includes(room.id));

  const handleBack = () => {
    window.history.back();
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'grey', padding: '30px', textAlign: 'center' }}>
      {selectedRooms.map(room => (
        <Frame key={room.id} 
               roomId={room.id} 
               client={myValue?.client} 
               roomName={room.typeDeChambre} 
               roomDescription={room.description} 
               roomAdditionalities={room.additionalities} 
               roomCost={room.coutParNuit} />
      ))}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" size="large" style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black' }} onClick={handleBack}>
          <AddIcon/>
        </Button>
        <Button variant="contained" size="large" style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black' }}>
          Check Out
        </Button>
      </div>
    </div>
  );
}
