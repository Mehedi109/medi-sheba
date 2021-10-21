import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../images/about.jpg';
import './About.css';

const About = () => {
  return (
    <Container>
      <Row>
        <div className="p-4 about">
          <Col xs={12} lg={6}>
            <div className="about-image">
              <img className="p-5" src={img} alt="" />
            </div>
          </Col>
          <Col xs={12} lg={6}>
            <div className="about-description ms-5 mt-5">
              <h2 className="text-center">ABout Us</h2>
              <p>
                Medi Sheba health care organisation where people can get their
                best services for their several disease by which they are
                suffering.There is also chamber of many qualified doctors of
                various departments and also diagonostic lab where people can do
                their important medical tests refered by the doctors.People can
                admit our hospital for their disease if doctors refer them for
                admit in the hospital,we beleive that we will serve you the best
                services that you need because providing good services to
                patients is our first priority.Also if you need to consultate
                with any doctor you can visit the chamber of our doctors with
                the appoinment.We serve the patients 24 hours in a day and 7
                days in a week.In our diagonostic lab advanced technology is
                used so that the medical tests have done properly.
              </p>
            </div>
          </Col>
        </div>
      </Row>
    </Container>
  );
};

export default About;
