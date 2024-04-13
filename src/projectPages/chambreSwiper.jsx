import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from 'react-bootstrap/Card';

// Importez vos images statiquement
import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';
import img6 from '../pics/chambrePics/img6.jpg';

export default function ChambreInfos() {

  const data = {
    "chambre": [
      {
        "idChambre": 1,
        "typeDeChambre": "Simple",
        "additionalies": "TV",
        "description": "Cette chambre simple est équipée d'une télévision, offrant divertissement pendant votre séjour. Parfait pour les voyageurs en solo cherchant confort et commodité.",
        "coutParNuit": 20,
        "img": img1
      },
      {
        "idChambre": 2,
        "typeDeChambre": "Double",
        "additionalies": "Climatiseur",
        "description": "Notre chambre double dispose d'un système de contrôle climatique, assurant un environnement agréable tout au long de votre séjour. Idéal pour les couples ou les petites familles cherchant détente et confort.",
        "coutParNuit": 40,
        "img": img2
      },
      {
        "idChambre": 3,
        "typeDeChambre": "Roi",
        "additionalies": "Balcon",
        "description": "Profitez du luxe de notre chambre king avec un balcon privé, offrant des vues imprenables et une atmosphère sereine. Parfait pour ceux qui recherchent une expérience premium.",
        "coutParNuit": 50,
        "img": img3
      },
      {
        "idChambre": 4,
        "typeDeChambre": "Reine",
        "additionalies": "Baignoire",
        "description": "Détendez-vous dans notre chambre queen avec une baignoire spacieuse, offrant un confort ultime et un rajeunissement. Idéal pour les clients souhaitant se détendre après une longue journée d'exploration.",
        "coutParNuit": 60,
        "img": img4
      },
      {
        "idChambre": 5,
        "typeDeChambre": "Suite",
        "additionalies": "Balcon",
        "description": "Indulgez dans le luxe de notre suite, avec un balcon privé pour des vues à couper le souffle et la détente. Parfait pour ceux qui recherchent une expérience somptueuse pendant leur séjour.",
        "coutParNuit": 80,
        "img": img5
      },
      {
        "idChambre": 6,
        "typeDeChambre": "Jumeau",
        "additionalies": "Boissons gratuites",
        "description": "Cette chambre jumelle spacieuse offre une retraite confortable pour les voyageurs en solo ou les compagnons cherchant un hébergement confortable et élégant. Équipé de boissons gratuites.",
        "coutParNuit": 35,
        "img": img6
      }
    ]
  };
  

  return (
    <Swiper
      spaceBetween={250}
      slidesPerView={3}
      loop={true}
    >
      {data.chambre.map(chambre => (
        <SwiperSlide key={chambre.idChambre}>
          <Card style={{ width: '22rem' }}>
            <Card.Img variant="top" src={chambre.img} style={{ height: '300px', objectFit: 'cover' }} />
            <Card.Body style={{textAlign : "center"}}>
              <Card.Title><strong>{` ${chambre.typeDeChambre}`}</strong></Card.Title>

            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
