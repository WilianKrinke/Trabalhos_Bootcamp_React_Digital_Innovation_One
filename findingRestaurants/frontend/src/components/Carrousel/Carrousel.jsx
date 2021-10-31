import React from 'react';
import { CarrouselContainer } from './styled';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ItemCarrousel from './ItemCarrousel';

const Carrousel = () => {
  return (
    <CarrouselContainer>
      <Carousel>
        <ItemCarrousel />
        <ItemCarrousel />
        <ItemCarrousel />
      </Carousel>
    </CarrouselContainer>
  );
};

export default Carrousel;
