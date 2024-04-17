import React from "react";
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Orders = () => {
  return (
    <div>
      <ListGroup as="ol" numbered>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Margerita</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            3
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Cheese Pizza</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            7
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Fagita</div>
            Cras justo odio
          </div>
          <Badge bg="primary" pill>
            10
          </Badge>
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Orders;
