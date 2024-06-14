import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';
import CenteredTabs from './admin_client_switcher';
import { Dialog, DialogActions, DialogContent, DialogTitle, IconButton, Stack, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { LOGIN_STATE } from "../store/action";

export default function ClientLogin({ setLoggedIn }) {
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const selectedRole = useSelector(state => state.etatDeUtilisateur.role);
  const selectedLog = useSelector(state => state.etatDeUtilisateur.log);
  const navigate = useNavigate();
  const dispatcher = useDispatch();

  useEffect(() => {
    if (selectedLog) {
      console.log("User logged in successfully");
      if (selectedRole === "CLIENT") {
        navigate("/FrontPage/home");
      } else {
        navigate("/admin");
      }
    }
  }, [selectedLog, selectedRole, navigate]);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const clearance = () => {
    console.log("Selected role:", selectedRole);

    const loginEndpoint = selectedRole === "CLIENT" ? "http://127.0.0.1:8000/api/loginC" : "http://127.0.0.1:8000/api/login";
    const welcomeMessage = selectedRole === "CLIENT" ? "Welcome client" : "Welcome admin";
    const invalidCredentialsMessage = selectedRole === "CLIENT" ? "Invalid client credentials" : "Invalid admin credentials";

    console.log("Sending login request with payload:", { email, motDePass: password });

    Axios.post(loginEndpoint, { email, motDePass: password })
      .then(response => {
        console.log("Response data:", response.data);
        if (response.data.state) {
          const token = response.data.token;
          const client = response.data.client;
          alert(welcomeMessage);
          console.log("Token:", token);
          dispatcher(LOGIN_STATE());
          localStorage.setItem("theObjToken", JSON.stringify({"token": token, 'client': client}));

          setLoggedIn(true); // Update loggedIn state
          console.log("Dispatched LOGIN_STATE action");
        } else {
          console.log("Login failed with state:", selectedLog);
          alert(invalidCredentialsMessage);
        }
      })
      .catch(error => {
        console.error("Error logging in:", error);
        alert("Error logging in");
      });
  };

  return (
    <>
      <CenteredTabs />
      <br />
      <Form onSubmit={e => { e.preventDefault(); clearance(); }}>
        <Form.Group className="mb-4 text-start">
          <Form.Label>Adresse Email</Form.Label>
          <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Form.Group>

        <Form.Group className="mb-4 text-start">
          <Form.Label>Mot de passe</Form.Label>
          <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </Form.Group>

        <div className="d-flex justify-content-between mb4">
          <Button type="submit" variant="primary" className="mb-4">
            Se connecter
          </Button>
          <Button variant="link" className="text-decoration-none" href="#forgot">
            Mot de passe oublié ?
          </Button>
        </div>
        {selectedRole !== "ADMIN" && (
          <div className="text-center">
            <p>Pas encore membre ? <Button variant="link" className="text-decoration-none" onClick={handleOpenModal}>S'inscrire</Button></p>
          </div>
        )}
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
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const Obj = {
      nomClient: nom,
      prenomClient: prenom,
      villeDeClient: ville,
      email: email,
      motDePass: motDePasse
    };

    Axios.post("http://localhost:8000/api/register", Obj)
      .then((response) => {
        if (response.data.state) {
          console.log("Client added successfully:", response.data.client);
          setPrenom('');
          setNom('');
          setVille('');
          setEmail('');
          setMotDePasse('');
          setErrors({});
          onClose();
        } else {
          setErrors(response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error adding client:", error);
      });
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
            <TextField
              variant="outlined"
              label="Prenom"
              value={prenom}
              onChange={(e) => setPrenom(e.target.value)}
              error={!!errors.prenomClient}
              helperText={errors.prenomClient}
            />
            <TextField
              variant="outlined"
              label="Nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              error={!!errors.nomClient}
              helperText={errors.nomClient}
            />
            <TextField
              variant="outlined"
              label="Ville"
              value={ville}
              onChange={(e) => setVille(e.target.value)}
              error={!!errors.villeDeClient}
              helperText={errors.villeDeClient}
            />
            <TextField
              variant="outlined"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              type="password"
              variant="outlined"
              label="Mot de passe"
              value={motDePasse}
              onChange={(e) => setMotDePasse(e.target.value)}
              error={!!errors.motDePass}
              helperText={errors.motDePass}
            />
            <Button
              type="submit"
              onClick={handleSubmit}
              fullWidth
              variant="contained"
              color="secondary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Stack>
        </DialogContent>
        <DialogActions></DialogActions>
      </Dialog>
    </div>
  );
};
