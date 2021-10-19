import React from 'react';
import { Card, Container, Col, CardGroup } from 'react-bootstrap';
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
    // <Container>
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
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
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
    // </Container>
  );
};

export default Service;
