import React from 'react';
import { Carousel, CarrouselContainer } from './styled';
import imageFake from '../../assets/logo/restaurante-fake.png';

import ItemCarrousel from './ItemCarrousel';

const settings = {
  dots: true,
  infinite: true,
  speed: 200,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const Carrousel = () => {
  return (
    <CarrouselContainer>
      <Carousel {...settings}>
        <ItemCarrousel nome="Item1" image={imageFake} />
        <ItemCarrousel nome="Item2" image={imageFake} />
        <ItemCarrousel nome="Item3" image={imageFake} />
        <ItemCarrousel nome="Item4" image={imageFake} />
        <ItemCarrousel nome="Item5" image={imageFake} />
        <ItemCarrousel nome="Item6" image={imageFake} />
        <ItemCarrousel nome="Item7" image={imageFake} />
        <ItemCarrousel nome="Item8" image={imageFake} />
      </Carousel>
    </CarrouselContainer>
  );
};

export default Carrousel;
