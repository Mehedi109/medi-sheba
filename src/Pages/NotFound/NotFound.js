import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container>
      <div
        style={{
          marginTop: '150px',
          marginBottom: '170px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontWeight: 'bold', fontSize: '40px' }}>404</h2>
        <h3 style={{ fontWeight: 'bold', fontSize: '30px' }}>
          Sorry, the page is not found
        </h3>
      </div>
    </Container>
  );
};

export default NotFound;
