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
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
      <RestaurantCard titulo={'Algum Titulo'} rating={4} endereco={'Algum Endereco de Restaurante'} photo={"Arquivo de foto"}/>
    </MenuContainer>
  );
};

export default Menulateral;
