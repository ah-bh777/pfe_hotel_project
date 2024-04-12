import React from 'react';
import { Container, Row, Col} from 'react-bootstrap'; // Importing Bootstrap components
import { Typography } from '@mui/material';
import placeholderImage from '../pics/hotel.jpg'; // Importing the image
import ClientLogin from './admin_clientLogin';

export default function LoginPage() {
  return (
    <div style={{ marginTop: '130px' }}> {/* Adjusted margin top */}
      <Container className="p-3 my-5">
        <Row>
          <Col md={6} className="mb-4">

            <img src={placeholderImage} alt="Placeholder" className="img-fluid" />
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="d-flex flex-column">
          <Typography variant="h2" component="h2" className="text-center">
          Bienvenue
          </Typography>
            <ClientLogin/>
          </Col>
        </Row>
      </Container>
    </div>
  );
}


