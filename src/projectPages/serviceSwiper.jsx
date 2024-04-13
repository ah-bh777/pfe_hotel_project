import React from 'react';
import './styles.css'; // Importez votre fichier CSS pour le style
import WifiOutlinedIcon from '@mui/icons-material/WifiOutlined';
import BakeryDiningOutlinedIcon from '@mui/icons-material/BakeryDiningOutlined';
import CleaningServicesOutlinedIcon from '@mui/icons-material/CleaningServicesOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import PoolOutlinedIcon from '@mui/icons-material/PoolOutlined';

export default function ServicesInfos() {
  const services = [
    {
      "idServ": 1,
      "icon": <WifiOutlinedIcon style={{ fontSize: '4rem', margin: 'auto' }} />,
      "nomServ": "wifi",
      "coutDeServ": 10
    },
    {
      "idServ": 2,
      "icon": <BakeryDiningOutlinedIcon style={{ fontSize: '4rem', margin: 'auto' }} />,
      "nomServ": "petit déjeuner",
      "coutDeServ": 15
    },
    {
      "idServ": 3,
      "icon": <CleaningServicesOutlinedIcon style={{ fontSize: '4rem', margin: 'auto' }} />,
      "nomServ": "nettoyage",
      "coutDeServ": 5
    },
    {
      "idServ": 4,
      "icon": <SpaOutlinedIcon style={{ fontSize: '4rem', margin: 'auto' }} />,
      "nomServ": "spa",
      "coutDeServ": 20
    },
    {
      "idServ": 5,
      "icon": <PoolOutlinedIcon style={{ fontSize: '4rem', margin: 'auto' }} />,
      "nomServ": "piscine",
      "coutDeServ": 30
    }
  ];

  return (
    <div className="container">
      {services.map(service => (
        <React.Fragment key={service.idServ}>
          <div className="box">
            {service.icon && <div className="icon">{service.icon}</div>}
            <h2>{service.nomServ}</h2>
            <p>prix : {service.coutDeServ}</p>
          </div>
          <div className="vertical-line"></div>
        </React.Fragment>
      ))}
    </div>
  );
};
