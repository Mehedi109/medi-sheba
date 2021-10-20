import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  useEffect(() => {
    fetch('./doctors.json')
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);
  return (
    <div className="mb-5">
      <Container>
        <h2 className="text-center mt-5">Meet Our Doctors</h2>
        <Row>
          {doctors.map((doctor) => (
            <Doctor key={doctor.id} doctor={doctor}></Doctor>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Doctors;
