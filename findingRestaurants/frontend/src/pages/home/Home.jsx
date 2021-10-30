import React from 'react';
import Containermapa from '../../components/ContainerMapa/ContainerMapa';
import Menulateral from '../../components/MenuLateral/MenuLateral';
import { HomeStyled } from './styles';

const Home = () => {
  return (
    <>
      <HomeStyled>
        <Menulateral />
        <Containermapa />
      </HomeStyled>
    </>
  );
};

export default Home;
