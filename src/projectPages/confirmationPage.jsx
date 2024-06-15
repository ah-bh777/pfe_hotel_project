import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Frame from './frame';

export default function ResConfirmation() {
  const [myValue, setMyValue] = useState();
  const [rooms, setRooms] = useState([]);
  const [framesData, setFramesData] = useState([]);
  const roomIds = useSelector(data => data.etatDeUtilisateur.room);
  const navigate = useNavigate();

  useEffect(() => {
    const storedToken = JSON.parse(localStorage.getItem('theObjToken'));
    if (storedToken) {
      setMyValue(storedToken);
    }

    axios.get('http://127.0.0.1:8000/api/rooms')
      .then(response => {
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

  useEffect(() => {
    const selectedRooms = rooms.filter(room => roomIds.includes(room.id));
    const initialFramesData = selectedRooms.map(room => ({
      roomId: room.id,
      wifi: false,
      breakfast: false,
      cleaning: false,
      spa: false,
      pool: false,
      checkin: '',
      checkout: ''
    }));
    setFramesData(initialFramesData);
  }, [rooms, roomIds]);

  const handleInputChange = (roomId, field, value) => {
    setFramesData(prevFramesData => 
      prevFramesData.map(frame => 
        frame.roomId === roomId ? { ...frame, [field]: value } : frame
      )
    );
  };

  const handleBack = () => {
    window.history.back();
  };

  const handleSubmit = () => {
    const formattedRooms = framesData.map(frame => {
      const services = [];
      if (frame.wifi) services.push(1);
      if (frame.breakfast) services.push(2);
      if (frame.cleaning) services.push(3);
      if (frame.spa) services.push(4);
      if (frame.pool) services.push(5);

      return {
        id: frame.roomId,
        start_date: frame.checkin,
        end_date: frame.checkout,
        services: services
      };
    });

    const reservationData = {
      clients_id: myValue?.client.id,
      rooms: formattedRooms
    };

    // Log the reservation data to the console
    console.log('Reservation Data:', reservationData);

    // Send the reservation data to the backend
    axios.post('http://127.0.0.1:8000/api/storeReservation', reservationData)
    .then(response => {
      console.log('Reservation created successfully:', response.data);
      navigate('/confirmation', { state: { reservationData: formattedRooms } });
    })
    .catch(error => {
      console.error('Error creating reservation:', error);
    });
  
  };

  const handleAddNewFrame = () => {
    setFramesData(prevFramesData => [
      ...prevFramesData,
      {
        roomId: rooms.length > 0 ? rooms[0].id : null, // Use the first room ID as default
        wifi: false,
        breakfast: false,
        cleaning: false,
        spa: false,
        pool: false,
        checkin: '',
        checkout: ''
      }
    ]);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'grey', padding: '30px', textAlign: 'center' }}>
      {framesData.map((frame, index) => {
        const room = rooms.find(r => r.id === frame.roomId);
        return (
          <Frame
            key={index}
            frameData={frame}
            client={myValue?.client}
            roomName={room?.typeDeChambre}
            roomDescription={room?.description}
            roomAdditionalities={room?.additionalities}
            roomCost={room?.coutParNuit}
            onInputChange={handleInputChange}
          />
        );
      })}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" size="large" style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black' }} onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" size="large" style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black' }} onClick={handleSubmit}>
          Check Out
        </Button>
      </div>
    </div>
  );
}