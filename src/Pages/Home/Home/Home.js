import React from 'react';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import ChosenUs from '../ChosenUs/ChosenUs';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <Doctors></Doctors>
      <ChosenUs></ChosenUs>
    </div>
  );
};

export default Home;
