import React, { useEffect, useState } from "react";
import axios from "axios";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from "chart.js";
import "./Profile.css";
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Profil = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/clientDetail")
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const serviceLabels = Object.keys(data.topServiceNames).map(key => data.topServiceNames[key]);
  const serviceCounts = Object.keys(data.topServiceNames).map(key => {
    return data.reserveDetails.reduce((count, reserve) => {
      return count + reserve.services.filter(service => service.id === parseInt(key)).length;
    }, 0);
  });

  const roomLabels = Object.keys(data.topRoomNames).map(key => data.topRoomNames[key]);
  const roomCounts = Object.keys(data.topRoomNames).map(key => {
    return data.reserveDetails.reduce((count, reserve) => {
      return count + reserve.rooms.filter(room => room.id === parseInt(key)).length;
    }, 0);
  });

  const serviceData = {
    labels: serviceLabels,
    datasets: [
      {
        label: 'Top Services',
        data: serviceCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  const roomData = {
    labels: roomLabels,
    datasets: [
      {
        label: 'Top Rooms',
        data: roomCounts,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)'
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)'
        ],
        borderWidth: 1
      }
    ]
  };

  function Row({ row }) {
    const [open, setOpen] = useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.rooms.map(room => room.typeDeChambre).join(", ")}
          </TableCell>
          <TableCell>{row.clientName}</TableCell>
          <TableCell align="right">{row.prix_total}</TableCell>
          <TableCell align="right">{row.débutReservation}</TableCell>
          <TableCell align="right">{row.services.length}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Typography variant="h6" gutterBottom component="div">
                  Services
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Service Name</TableCell>
                      <TableCell align="right">Cost</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.services.map((service, index) => (
                      <TableRow key={index}>
                        <TableCell component="th" scope="row">
                          {service.nomServ}
                        </TableCell>
                        <TableCell align="right">{service.coutDeServ}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }

  return (
    <div>
      <div className="profil-container">
        <div className="profil-box red">
          <h3>Total Spending</h3>
          <p>${data.totalSpending}</p>
        </div>
        <div className="profil-box green">
          <h3>Reservations Made</h3>
          <p>{data.reserveCount}</p>
        </div>
        <div className="profil-box blue">
          <h3>Most Reserved Room</h3>
          <p>{data.mostReservedRoom}</p>
        </div>
      </div>

      <div className="table-container">
        <h3>Reservation Details</h3>
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Rooms</TableCell>
                <TableCell>Client Name</TableCell>
                <TableCell align="right">Total Cost</TableCell>
                <TableCell align="right">Date</TableCell>
                <TableCell align="right">Services Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.reserveDetails.map((reserve, index) => (
                <Row key={index} row={reserve} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="chart-container">
        <div className="chart-box">
          <Bar data={serviceData} />
        </div>
        <div className="chart-box">
          <Doughnut data={roomData} />
        </div>
      </div>
    </div>
  );
};

export default Profil;
