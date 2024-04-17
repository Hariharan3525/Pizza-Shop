import React, {useState} from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import Img4 from "../Assets/Img4.jpg";

const PickoftheWeek = () => {
    const [show, setShow] = useState(false);

  return (
    <section id="musttry" className="my-3">
      <div className="text-center my-2 py-3">
        <h2 className="display-5 text-primary">
          <i class="bi bi-search-heart"></i> Pick of the Week!
        </h2>
      </div>
      <Container>
        <Row>
          <Col md={7} className="d-flex align-items-center justify-content-center">
            <Image src={Img4} fluid={true} className="rounded-4 h-75" alt="pizza"></Image>
          </Col>
          <Col md={5} className="d-flex align-items-center justify-content-center">
            <div className="p-3">
              <h2 className="h1">Double Cheese Fagita</h2>
              <p className="lead text-muted">
                Lorem ipsum dolor sit amet consectetur adipisicing elit
              </p>
              <div className="text-center">
                <Button onClick={()=>setShow(true)}> 
                  <i class="bi bi-basket"></i> Buy Now
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <ToastContainer
          className="position-fixed bottom-0 end-0 p-3"
          position='bottom-end'
          style={{ zIndex: 1 }}
        >
          <Toast show={show} onClose={()=>setShow(false)} delay={3000} autohide>
            <Toast.Header closeButton={false}>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded me-2"
                alt=""
              />
              <strong className="me-auto">Added!</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>Item added to cart...</Toast.Body>
          </Toast>
        </ToastContainer>
      </Container>
    </section>
  );
};

export default PickoftheWeek;
