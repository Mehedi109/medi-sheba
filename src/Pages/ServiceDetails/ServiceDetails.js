import React, { useEffect, useState } from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import { useParams } from 'react-router';

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
      (details) => details?.id === serviceId
    );
    setSingleService(foundService);
  }, [serviceDetails]);

  return (
    <Container>
      <div
        className=""
        style={{
          width: '400px',
          marginTop: '30px',
          marginBottom: '30px',
          marginLeft: '350px',
        }}
      >
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src={singleService?.img}
              className="image img-fluid"
              style={{ height: '220px' }}
            />
            <Card.Body>
              <Card.Title>{singleService?.name}</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <button
                onClick={singleService?.description}
                className="btn btn-primary"
              >
                Details
              </button>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
    </Container>
  );
};

export default ServiceDetails;
