import React from 'react';
import Carrousel from '../Carrousel/Carrousel';
import ContainerSearch from '../ContainerSearch/ContainerSearch';
import RestaurantCard from '../RestaurantCard/RestaurantCard';
import { MenuContainer } from './styled';

const Menulateral = () => {
  return (
    <MenuContainer>
      <ContainerSearch />
      <Carrousel />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </MenuContainer>
  );
};

export default Menulateral;
