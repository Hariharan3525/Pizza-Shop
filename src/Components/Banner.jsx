import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Container, Row, Col } from "react-bootstrap"
import Img1 from '../Assets/Img1.avif'
import Img2 from '../Assets/Img2.jpg'
import Img3 from '../Assets/Img3.jpg'
// import Img4 from '../Assets/Img4.jpg'

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={12} className="p-0">
          <Carousel>
            <Carousel.Item interval={3000}>
                <img src={Img1} className="d-block w-100" alt="First slide" />
              <Carousel.Caption>
                <h3>Margherita</h3>
                <p className="d-none d-sm-block">
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={Img2} className="d-block w-100" alt="Second slide" />
              <Carousel.Caption>
                <h3>Cheese Pizza</h3>
                <p className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={3000}>
            <img src={Img3} className="d-block w-100" alt="Third slide" />
              <Carousel.Caption>
                <h3>Pepporoni</h3>
                <p className="d-none d-sm-block">
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Pizza for every occasion</h2>
        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </Container>
  );
};

export default Banner;
