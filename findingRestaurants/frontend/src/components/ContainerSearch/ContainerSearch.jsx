import React from 'react';
import { ContainerStyled } from './styled';
import Searchfield from '../SearchField/SearchField';
import logo from '../../assets/logo/logo.svg';

const ContainerSearch = () => {
  return (
    <ContainerStyled>
      <img src={logo} alt="Logo" width="210px" height="100px" />
      <Searchfield />
    </ContainerStyled>
  );
};

export default ContainerSearch;
