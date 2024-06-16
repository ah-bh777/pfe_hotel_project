import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import axios from 'axios';


export default function Compte() {
  
 const [client, setClient] = useState({
    nomClient: '',
    prenomClient: '',
    villeDeClient: '',
    email: ''
  });

  const [newPassword, setNewPassword] = useState('');

  useEffect(() => {
    const theObjToken = JSON.parse(localStorage.getItem('theObjToken'));
    if (theObjToken && theObjToken.client) {
      setClient(theObjToken.client);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setClient((prevClient) => ({
      ...prevClient,
      [name]: value,
    }));
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSave = async () => {
    try {
      const theObjToken = JSON.parse(localStorage.getItem('theObjToken'));
      const token = theObjToken.token;
      
      const updatedClient = { ...client };
      if (newPassword) {
        updatedClient.motDePass = newPassword;
      }

      const response = await axios.put(
        'http://127.0.0.1:8000/api/update',
        updatedClient,
        
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data.state) {
        theObjToken.client = response.data.client;
        localStorage.setItem('theObjToken', JSON.stringify(theObjToken));
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile');
      }
    } catch (error) {
      alert('An error occurred while updating the profile');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Profil
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="First Name"
              name="prenomClient"
              value={client.prenomClient}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              margin="normal"
              label="Last Name"
              name="nomClient"
              value={client.nomClient}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="City"
              name="villeDeClient"
              value={client.villeDeClient}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="Email"
              name="email"
              value={client.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              margin="normal"
              label="New Password"
              name="motDePass"
              type="password"
              value={newPassword}
              onChange={handlePasswordChange}
            />
          </Grid>
        </Grid>
        <Box sx={{ mt: 2 }}>
          <Button variant="contained" color="primary" onClick={handleSave}>
            Save
          </Button>
        </Box>
      </Box>
    </Container>
  );
  
}