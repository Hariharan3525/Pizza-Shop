import React from "react";
import { Col, Container, FloatingLabel, Form, InputGroup, Row } from "react-bootstrap";

const Comments = () => {
  return (
    <section id="contact" className="bg-light py-3">
      <div className="text-center my-2 py-3">
        <h3 className="display-6 text-primary">
          Comments <i class="bi bi-chat-left-heart"></i>
        </h3>
      </div>
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <Form>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-envelope-open"></i>
                </InputGroup.Text>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3">
                <InputGroup.Text id="basic-addon1">
                  <i class="bi bi-person-circle"></i>
                </InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="Name"
                  aria-label="Name"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <FloatingLabel
                controlId="floatingTextarea"
                label="Comments"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                />
              </FloatingLabel>
            </Form>
            <div className="text-center my-3 text-primary">
                &copy; Copyright 2024-2025
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Comments;
