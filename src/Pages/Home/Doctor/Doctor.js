import React from 'react';
import { Card, CardGroup, Col, Button } from 'react-bootstrap';
import './Doctor.css';

const Doctor = ({ doctor }) => {
  const { picture, name, specialities } = doctor;
  return (
    <Col xs={12} md={8} lg={4} className="g-5">
      <div className="doctor shadow-lg">
        <CardGroup>
          <Card>
            <div className="doctor-image">
              <Card.Img
                variant="top"
                src={picture}
                className="img-fluid"
                style={{ height: '220px' }}
              />
            </div>
            <Card.Body className="text-center">
              <Card.Title>{name}</Card.Title>
              <Card.Text>{specialities}</Card.Text>
              <Button variant="btn btn-success">View</Button>
            </Card.Body>
            {/* <Card.Footer className="bg-info">
              <h6 className="text-center">View</h6>
            </Card.Footer> */}
          </Card>
        </CardGroup>
      </div>
    </Col>
  );
};

export default Doctor;
