import React from 'react';
import Carrousel from '../Carrousel/Carrousel';
import ContainerSearch from '../ContainerSearch/ContainerSearch';
import { MenuContainer } from './styled';

const Menulateral = () => {
  return (
    <MenuContainer>
      <ContainerSearch />
      <Carrousel />
    </MenuContainer>
  );
};

export default Menulateral;
