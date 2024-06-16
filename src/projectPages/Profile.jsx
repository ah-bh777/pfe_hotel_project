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

  // Mapping the service names and counts
  const serviceLabels = Object.keys(data.topServiceNames).map(key => data.topServiceNames[key]);
  const serviceCounts = Object.keys(data.topServiceNames).map(key => {
    return data.reserveDetails.reduce((count, reserve) => {
      return count + reserve.services.filter(service => service.id === parseInt(key)).length;
    }, 0);
  });

  // Mapping the room names and counts
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
