import React, { useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap'; 

import CenteredTabs from './admin_client_switcher';
import {  Dialog, DialogActions, DialogContent, DialogTitle,  IconButton, Stack, TextField } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close"
import Axios from 'axios';

import {useSelector} from "react-redux"

export default function ClientLogin() {

  // popUP
  const [openModal, setOpenModal] = useState(false);

  // stocking  data client and admin

  const [clientApi,setClientApi] = useState([])
  const [adminApi,setadminApi] = useState([])

  // input email / input password 

  const [email,setEmail] = useState()
  const [password,setPassword] = useState()


  // BRINGING the raget for the switcher 
  const selected = useSelector(data => data.etatDeUtilisateur)


  // popUP functionalities

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // fetching data client and admin
/*
  useEffect(()=>{
    Axios.get("http://localhost:8000/client").then(res => setClientApi(res.data))
    Axios.get("http://localhost:7000/admin").then(res => setadminApi(res.data))
  },[])
*/

  const clearance = ()=>{
    if(selected.role === "CLEINT"){

        const user = clientApi.find((client)=>{
          return client.email === email && client.motDePass === password
        })
        if(user){
          alert(`welcome ${user.nomClient}`)
        }else{
          alert("invalde input")
        }

    }else{

      const user = adminApi.find((admin)=>{
        return admin.email === email && admin.motDePass === password
      })
      if(user){
        alert(`welcome aboard  admin`)
      }else{
        alert("invalde input for admin")
      }
    }

  }


  return (
    <>
      <CenteredTabs />
    <br />
      <Form>
        
        <div className="d-flex flex-column align-items-center"></div>
        <Form.Group className="mb-4">
          <Form.Label>Adresse Email </Form.Label>
          <Form.Control type="email" id="email" value={email} onChange={(e)=>{setEmail(e.target.value)}}  aria-describedby="emailHelp" />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
        </Form.Group>

        <div className="d-flex justify-content-between mb-4">
          <Button onClick={clearance} variant="primary" className="mb-4">
            Se connecter
          </Button>
          <Button variant="link" className="text-decoration-none" href="#forgot">
            Mot de passe oublié ?
          </Button>
        </div>
        {selected.role !== "ADMIN"  ? (
                  <div className="text-center">
                  <p>Pas encore membre ? <Button variant="link" className="text-decoration-none" onClick={handleOpenModal}>S'inscrire</Button></p>
                </div>
        ) : "" }

      </Form>

      <Modalpopup open={openModal} onClose={handleCloseModal} />
    </>
  );
}



const Modalpopup = ({ open, onClose }) => {
  const [prenom, setPrenom] = useState('');
  const [nom, setNom] = useState('');
  const [ville, setVille] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [api,setApi] = useState([])

/*
  useEffect(() => {
    Axios.get("http://localhost:8000/client").then((res) => {
      setApi(res.data);
    })
  }, []);
*/

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const Obj = { 
      "id" : api.length + 1 ,
      "nomClient" : nom ,
      "prenomClient"  : prenom ,
      "villeDeClient" : ville ,
      "email" : email ,
      "motDePass" : motDePasse 
    };
  
    Axios.post("http://localhost:8000/client", Obj)
      .then((response) => {
        console.log("Client added successfully:", response.data);
        
      })
      .catch((error) => {
        console.error("Error adding client:", error);
      });
  
    setPrenom('');
    setNom('');
    setVille('');
    setEmail('');
    setMotDePasse('');
  };
  

  

  return (
    <div style={{ textAlign: 'center' }}>
      <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
        <DialogTitle>
        Enregistrement du client 
          <IconButton onClick={onClose} style={{ float: 'right' }}>
            <CloseIcon color="primary" />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Stack spacing={2} margin={2}>
          <TextField variant="outlined" label="Prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} />
              <TextField variant="outlined" label="Nom" value={nom} onChange={(e) => setNom(e.target.value)} />
              <TextField variant="outlined" label="Ville" value={ville} onChange={(e) => setVille(e.target.value)} />
              <TextField variant="outlined" label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField  type="password" variant="outlined" label="Mot de passe" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} />
            <Button type="submit" onClick={handleSubmit} fullWidth variant="contained" color="secondary" sx={{ mt: 3, mb: 2 }}>
            Submit
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
