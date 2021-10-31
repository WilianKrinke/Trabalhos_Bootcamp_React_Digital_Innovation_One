import React from 'react';
import propTypes from 'prop-types';
import { Item } from './styled';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ItemCarrousel = ({ nome, image }) => {
  return (
    <>
      <Item image={image}>
        <h3>{nome}</h3>
      </Item>
    </>
  );
};

ItemCarrousel.propTypes = {
  nome: propTypes.string,
  image: propTypes.any,
};

export default ItemCarrousel;
