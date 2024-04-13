import React from 'react';
import picture from "./R.jpg";
import picture1 from "./img2.jpg";
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export default function ResConfirmation() {
  const clients = [
    {
      "id": 1,
      "nomClient": "alex",
      "prenomClient": "grayson",
      "villeDeClient": "california",
      "email": "user1",
      "motDePass": "1"
    },
    {
      "id": 2,
      "nomClient": "yuran",
      "prenomClient": "atlatika",
      "villeDeClient": "byalona",
      "email": "user2",
      "motDePass": "2"
    },
    {
      "id": 3,
      "nomClient": "alvis",
      "prenomClient": "recardo",
      "villeDeClient": "mezayap",
      "email": "user3",
      "motDePass": "3"
    }
  ];

  const data = {
    "chambre": [
      {
        "idChambre": 1,
        "typeDeChambre": "Simple",
        "additionalies": "TV",
        "description": "Cette chambre simple est équipée d'une télévision, offrant divertissement pendant votre séjour. Parfait pour les voyageurs en solo cherchant confort et commodité.",
        "coutParNuit": 20,
      },
      {
        "idChambre": 2,
        "typeDeChambre": "Double",
        "additionalies": "Climatiseur",
        "description": "Notre chambre double dispose d'un système de contrôle climatique, assurant un environnement agréable tout au long de votre séjour. Idéal pour les couples ou les petites familles cherchant détente et confort.",
        "coutParNuit": 40,
      }
    ]
  };

  const client1 = clients.find(client => client.id === 1); // First client
  const chambre1 = data.chambre.find(chambre => chambre.idChambre === 1); // First chambre

  const client2 = clients.find(client => client.id === 2); // Second client
  const chambre2 = data.chambre.find(chambre => chambre.idChambre === 2); // Second chambre

  return (
    <div style={{ width: '100vw', backgroundColor: 'grey', padding: '30px', textAlign: 'center' }}>
      {/* First white div */}
      <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '10px' }}>
        <img src={picture} alt="Your Image" style={{ maxWidth: '30%', maxHeight: '100%', objectFit: 'cover', marginRight: '20px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
              <p><strong>Nom:</strong> {client1.nomClient}</p>
              <p><strong>Prénom:</strong> {client1.prenomClient}</p>
              <p><strong>Email:</strong> {client1.email}</p>
            </div>
            <div>
              <p><strong>Type de chambre:</strong> {chambre1.typeDeChambre}</p>
              <p><strong>Additionalies:</strong> {chambre1.additionalies}</p>
              <p><strong>Coût par nuit:</strong> {chambre1.coutParNuit}</p>
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
      {/* Second white div */}
      <div style={{ width: '100%', backgroundColor: 'white', display: 'flex', alignItems: 'center', padding: '20px', borderRadius: '10px', marginTop: '20px' }}>
        <img src={picture1} alt="Your Image" style={{ maxWidth: '30%', maxHeight: '100%', objectFit: 'cover', marginRight: '20px' }} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex' }}>
            <div style={{ marginRight: '20px' }}>
              <p><strong>Nom:</strong> {client2.nomClient}</p>
              <p><strong>Prénom:</strong> {client2.prenomClient}</p>
              <p><strong>Email:</strong> {client2.email}</p>
            </div>
            <div>
              <p><strong>Type de chambre:</strong> {chambre2.typeDeChambre}</p>
              <p><strong>Additionalies:</strong> {chambre2.additionalies}</p>
              <p><strong>Coût par nuit:</strong> {chambre2.coutParNuit}</p>
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
      {/* Buttons */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" size="large" style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black' }}><AddIcon/></Button>
        <Button variant="contained" size="large" style={{ borderRadius: '20px', backgroundColor: 'white', color: 'black' }}>Check Out</Button>
      </div>
    </div>
  );
};
