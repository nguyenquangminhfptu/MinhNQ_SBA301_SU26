import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import AppNavbar from './components/AppNavbar';
import CarouselComponent from './components/Carousel';
import { MyFlower } from './components/MyFlower';
import { flowerData } from './data/flowerData';

function App() {
  return (
    <>
      <AppNavbar />
      <CarouselComponent />
      <Container className="mt-4">
        <h1 className="text-center mb-4" style={{ color: "black" }}>
          List of Flowers
        </h1>
        <Row>
          {flowerData.map((flower) => (
            <Col md={3} key={flower.id} className="mb-4">
              <MyFlower flower={flower} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default App;