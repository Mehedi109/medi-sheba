import React from 'react';
import { Card, Container, Row, CardGroup, Col } from 'react-bootstrap';
import img1 from '../../../images/stethoscope-solid.svg';
import img2 from '../../../images/ambulance-solid.svg';
import img3 from '../../../images/clock-regular.svg';

const ChosenUs = () => {
  return (
    <div style={{ background: 'rgb(233 222 235)' }}>
      <Container className="p-5">
        <h3 className="text-center">Why you will chose us</h3>
        <Row>
          <Col xs={12} md={8} lg={4} className="g-5">
            <div className="chosen">
              <CardGroup>
                <Card className="d-flex p-3" style={{ height: '290px' }}>
                  {/* <div className="doctor-image"> */}
                  <Card.Img
                    variant="top"
                    src={img1}
                    style={{ height: '120px' }}
                  />
                  {/* </div> */}
                  <Card.Body className="text-center">
                    <Card.Title>Standards Treatment</Card.Title>
                    <Card.Text>
                      We provide quality treatment for our patients
                    </Card.Text>
                    {/* <Button variant="btn btn-success">View</Button> */}
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
          <Col xs={12} md={8} lg={4} className="g-5">
            <div className="chosen">
              <CardGroup>
                <Card className="d-flex p-3" style={{ height: '290px' }}>
                  {/* <div className="doctor-image"> */}
                  <Card.Img
                    variant="top"
                    src={img3}
                    style={{ height: '120px' }}
                  />
                  {/* </div> */}
                  <Card.Body className="text-center">
                    <Card.Title>24/7 Services</Card.Title>
                    <Card.Text>
                      We are available for 24 hours in a day and 7 day in a week
                      for our patient
                    </Card.Text>
                    {/* <Button variant="btn btn-success">View</Button> */}
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
          <Col xs={12} md={8} lg={4} className="g-5">
            <div className="chosen">
              <CardGroup>
                <Card className="d-flex p-3" style={{ height: '290px' }}>
                  {/* <div className="doctor-image"> */}
                  <Card.Img
                    variant="top"
                    src={img2}
                    style={{ height: '120px' }}
                  />
                  {/* </div> */}
                  <Card.Body className="text-center">
                    <Card.Title>Emergency Ambulance</Card.Title>
                    <Card.Text>
                      We have emergency ambulance service for the patients
                    </Card.Text>
                    {/* <Button variant="btn btn-success">View</Button> */}
                  </Card.Body>
                </Card>
              </CardGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ChosenUs;
