import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { ADD_ROOM } from "../store/action";

import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';
import img6 from '../pics/chambrePics/img6.jpg';

import axios from "axios";

const drawerWidth = 200;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    marginTop: "65px",
    position: "fixed",
    zIndex: "1000",
    borderRight: "none",
  },
}));

const ContentWrapper = styled("div")({
  flexGrow: 1,
  marginLeft: drawerWidth,
  padding: (theme) => theme.spacing(3),
});

export default function SelectRoom() {
  const [rooms, setRooms] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAdditionalities, setSelectedAdditionalities] = useState([]);
  const navigate = useNavigate();
  const dispatcher = useDispatch()

  const fetchData = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/rooms");
      setRooms(response.data.rooms);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAdditionalityToggle = (additionality) => () => {
    const currentIndex = selectedAdditionalities.indexOf(additionality);
    const newSelectedAdditionalities = [...selectedAdditionalities];

    if (currentIndex === -1) {
      newSelectedAdditionalities.push(additionality);
    } else {
      newSelectedAdditionalities.splice(currentIndex, 1);
    }

    setSelectedAdditionalities(newSelectedAdditionalities);
  };

  const handleRoomSelection = (selectedRoom) => {
    dispatcher(ADD_ROOM(selectedRoom))
    navigate('/confirm');
  };

  const roomImages = {
    Simple: img1,
    Double: img2,
    Roi: img3,
    Reine: img4,
    Suite: img5,
    Jumeau: img6,
  };

  const filteredRooms = rooms.filter((room) => {
    const matchesSearchTerm = room.typeDeChambre.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesAdditionalities = selectedAdditionalities.length === 0 || selectedAdditionalities.includes(room.additionalities);

    return matchesSearchTerm && matchesAdditionalities;
  });

  return (
    <>
      <StyledDrawer variant="permanent" anchor="left">
        <List>
          <ListItem>
            <ListItemText primary="Équipements supplémentaires" />
          </ListItem>
          {['TV', 'Climatiseur', 'Balcon', 'Baignoire', 'Boissons gratuites'].map((additionality) => (
            <ListItem button key={additionality} onClick={handleAdditionalityToggle(additionality)}>
              <Checkbox checked={selectedAdditionalities.indexOf(additionality) !== -1} />
              <ListItemText primary={additionality} />
            </ListItem>
          ))}
        </List>
      </StyledDrawer>
      <ContentWrapper>
        <TextField
          style={{ margin: "10px", width: "98%" }}
          id="search-input"
          label="Rechercher"
          variant="outlined"
          fullWidth
          margin="normal"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <Container>
          <Row xs={1} md={2} lg={3}>
            {filteredRooms.map((room) => (
              <Col key={room.typeDeChambre} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={roomImages[room.typeDeChambre]} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>{room.typeDeChambre}</Card.Title>
                    <Card.Text>{room.description}</Card.Text>
                    <Card.Text>
                      Prix par nuit : {room.coutParNuit} $
                    </Card.Text>
                    <Button variant="contained" color="primary" onClick={() => handleRoomSelection(room.id)}>Réserver maintenant</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </ContentWrapper>
    </>
  );
}

