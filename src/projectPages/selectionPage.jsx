import { useState } from "react";
import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button"; // Importer le composant Button
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';
import img6 from '../pics/chambrePics/img6.jpg';

const drawerWidth = 200;

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  "& .MuiDrawer-paper": {
    width: drawerWidth,
    boxSizing: "border-box",
    marginTop: "65px", // Ajuster cette valeur en fonction de la hauteur de votre barre de navigation
    position: "fixed", // Changer en fixé
    zIndex: "-1000", // S'assurer qu'il est au-dessus des autres contenus 
    
    // it worked bro :) 
    
    
    borderRight: "none", // Supprimer la bordure de droite
  },
}));

const ContentWrapper = styled("div")({
  flexGrow: 1,
  marginLeft: drawerWidth,
  padding: (theme) => theme.spacing(3),
});

export default function Sidebar() {
  const [checked, setChecked] = useState([false, false, false, false, false]);

  const handleToggle = (index) => () => {
    const newChecked = [...checked];
    newChecked[index] = !newChecked[index];
    setChecked(newChecked);
  };

  const data = [
    {
      idChambre: 1,
      typeDeChambre: "Simple",
      additionalies: "TV",
      description:
        "Cette chambre simple est équipée d'une télévision, offrant divertissement pendant votre séjour. Parfait pour les voyageurs en solo cherchant confort et commodité.",
      coutParNuit: 20,
      img: img1,
    },
    {
      idChambre: 2,
      typeDeChambre: "Double",
      additionalies: "Climatiseur",
      description:
        "Notre chambre double dispose d'un système de contrôle climatique, assurant un environnement agréable tout au long de votre séjour. Idéal pour les couples ou les petites familles cherchant détente et confort.",
      coutParNuit: 40,
      img: img2,
    },
    {
      idChambre: 3,
      typeDeChambre: "Roi",
      additionalies: "Balcon",
      description:
        "Profitez du luxe de notre chambre king avec un balcon privé, offrant des vues imprenables et une atmosphère sereine. Parfait pour ceux qui recherchent une expérience premium.",
      coutParNuit: 50,
      img: img3,
    },
    {
      idChambre: 4,
      typeDeChambre: "Reine",
      additionalies: "Baignoire",
      description:
        "Détendez-vous dans notre chambre queen avec une baignoire spacieuse, offrant un confort ultime et un rajeunissement. Idéal pour les clients souhaitant se détendre après une longue journée d'exploration.",
      coutParNuit: 60,
      img: img4,
    },
    {
      idChambre: 5,
      typeDeChambre: "Suite",
      additionalies: "Balcon",
      description:
        "Indulgez dans le luxe de notre suite, avec un balcon privé pour des vues à couper le souffle et la détente. Parfait pour ceux qui recherchent une expérience somptueuse pendant leur séjour.",
      coutParNuit: 80,
      img: img5,
    },
    {
      idChambre: 6,
      typeDeChambre: "Jumeau",
      additionalies: "Boissons gratuites",
      description:
        "Cette chambre jumelle spacieuse offre une retraite confortable pour les voyageurs en solo ou les compagnons cherchant un hébergement confortable et élégant. Équipé de boissons gratuites.",
      coutParNuit: 35,
      img: img6,
    },
  ];

  return (
    <>
      <StyledDrawer  variant="permanent" anchor="left">
        <List>
          <ListItem>
            <ListItemText primary="Équipements supplémentaires" />
          </ListItem>
          {data.map((chambre, index) => (
            <ListItem button key={index} onClick={handleToggle(index)}>
              <Checkbox checked={checked[index]} />
              <ListItemText primary={chambre.additionalies} />
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
        />
        <Container>
          <Row xs={1} md={2} lg={3}>
            {data.map((chambre) => (
              <Col key={chambre.idChambre} className="mb-4">
                <Card>
                  <Card.Img variant="top" src={chambre.img} style={{ height: "200px" }} />
                  <Card.Body>
                    <Card.Title>{chambre.typeDeChambre}</Card.Title>
                    <Card.Text>{chambre.description}</Card.Text>
                    <Card.Text>
                      Prix par nuit : {chambre.coutParNuit} $
                    </Card.Text>
                    <Button variant="contained" color="primary">Réserver maintenant</Button> {/* Ajouter le bouton Réserver maintenant */}
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
