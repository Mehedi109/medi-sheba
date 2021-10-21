import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useParams } from 'react-router';
import './ServiceDetails.css';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState([]);
  const [singleService, setSingleService] = useState({});

  useEffect(() => {
    const url = `/service.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServiceDetails(data));
  }, []);

  useEffect(() => {
    const foundService = serviceDetails?.find(
      (details) => details?.id == serviceId
    );
    setSingleService(foundService);
  }, [serviceDetails]);

  return (
    <Container>
      <div className="service-details">
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={singleService?.img}
              className="image img-fluid"
              style={{ height: '240px' }}
            />
            <Card.Body>
              <Card.Title className="text-center">
                {singleService?.name}
              </Card.Title>
              <Card.Text>{singleService?.description}</Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
};

export default ServiceDetails;
