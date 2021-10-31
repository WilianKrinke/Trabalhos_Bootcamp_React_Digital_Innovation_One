import React, { useState } from 'react';
import Containermapa from '../../components/ContainerMapa/ContainerMapa';
import Menulateral from '../../components/MenuLateral/MenuLateral';
import Modal from '../../Modal';
import { HomeStyled } from './styles';

const Home = () => {
  const [modalIsOpened, setModalIsOpened] = useState(false);

  return (
    <>
      <HomeStyled>
        <Menulateral />
        <Containermapa />
      </HomeStyled>
      <Modal opened={modalIsOpened} onClose={() => setModalIsOpened(!modalIsOpened)} />
    </>
  );
};

export default Home;
