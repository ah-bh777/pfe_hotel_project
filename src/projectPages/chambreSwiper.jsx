import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Card from 'react-bootstrap/Card';

// Import your images statically
import img1 from '../pics/chambrePics/img1.jpg';
import img2 from '../pics/chambrePics/img2.jpg';
import img3 from '../pics/chambrePics/img3.jpg';
import img4 from '../pics/chambrePics/img4.jpg';
import img5 from '../pics/chambrePics/img5.jpg';

export default function ChambreInfos() {
    const data = {
        "chambre": [
          {
            "idChambre": 1,
            "typeDeChambre": "Single",
            "additionalies": "tv",
            "description": "This single room is equipped with a TV, providing entertainment during your stay. It's perfect for solo travelers looking for comfort and convenience what are you waiting for .",
            "coutParNuit": 20,
            "img": img1
          },
          {
            "idChambre": 2,
            "typeDeChambre": "Double",
            "additionalies": "climatiseur",
            "description": "Our double room features a climate control system, ensuring a pleasant environment throughout your stay. It's ideal for couples or small families seeking relaxation and comfort.",
            "coutParNuit": 40,
            "img": img2
          },
          {
            "idChambre": 3,
            "typeDeChambre": "King",
            "additionalies": "balcon",
            "description": "Enjoy the luxury of our king room with a private balcony, offering stunning views and a serene atmosphere. It's perfect for those seeking a premium experience.",
            "coutParNuit": 50,
            "img": img3
          },
          {
            "idChambre": 4,
            "typeDeChambre": "Queen",
            "additionalies": "baignoire",
            "description": "Relax in our queen room with a spacious bathtub, providing ultimate comfort and rejuvenation. It's ideal for guests looking to unwind after a long day of exploring.",
            "coutParNuit": 60,
            "img": img4
          },
          {
            "idChambre": 5,
            "typeDeChambre": "Suite",
            "additionalies": "balcon",
            "description": "Indulge in the luxury of our suite, complete with a private balcony for breathtaking views and relaxation. It's perfect for those seeking a lavish experience during their stay.",
            "coutParNuit": 80,
            "img": img5
          }
        ]
      };

  return (
    <Swiper
      spaceBetween={300}
      slidesPerView={3}
      loop={true}
    >
      {data.chambre.map(chambre => (
        <SwiperSlide key={chambre.idChambre}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={chambre.img} style={{ height: '200px', objectFit: 'cover' }} />
            <Card.Body>
              <Card.Title><strong>{`Type: ${chambre.typeDeChambre}`}</strong></Card.Title>
              <Card.Text><strong>Additionalies:</strong> {`${chambre.additionalies}`}</Card.Text>
              <Card.Text><strong>Description:</strong> {`${chambre.description}`}</Card.Text>
              <Card.Text><strong>Cost Per Night:</strong> ${`${chambre.coutParNuit}`}</Card.Text>
            </Card.Body>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
