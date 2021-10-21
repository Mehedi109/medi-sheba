import React from 'react';
import { Card, Col, CardGroup } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './Service.css';

const Service = ({ service }) => {
  const { id, img, name, description } = service;
  const history = useHistory();

  const url = `/service/${id}`;

  const handleServiceDetails = () => {
    history.push(url);
  };
  return (
    <Col xs={12} md={8} lg={4} className="g-5">
      <div className="single-service">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={img}
              className="image img-fluid"
              style={{ height: '220px' }}
            />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-center">
              <button
                onClick={handleServiceDetails}
                className="btn btn-primary"
              >
                Details
              </button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </Col>
  );
};

export default Service;
