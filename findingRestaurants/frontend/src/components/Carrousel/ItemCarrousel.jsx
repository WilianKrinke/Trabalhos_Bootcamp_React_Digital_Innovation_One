import React from 'react';
import propTypes from 'prop-types';
import { Item } from './styled';

const ItemCarrousel = ({ nome }) => {
  return (
    <>
      <Item>
        <h3>{nome}</h3>
        <img src="" alt="alguma imagem" width="100%" height="100px" />
      </Item>
    </>
  );
};

ItemCarrousel.propTypes = {
  nome: propTypes.string,
};

export default ItemCarrousel;
