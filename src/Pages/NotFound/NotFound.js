import React from 'react';
import { Container } from 'react-bootstrap';
import img from '../../images/404-img.jpg';
import './NotFound.css';

const NotFound = () => {
  return (
    <Container>
      <div className="not-found">
        <img src={img} alt="" />
      </div>
    </Container>
  );
};

export default NotFound;
